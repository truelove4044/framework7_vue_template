import axios from 'axios'
import { usePageStore } from '@/stores/usePageStore'

// 建立 axios 實例，設定基礎路徑與共用設定
const apiBase = axios.create({
  baseURL: '/api', // API 基底網址
  withCredentials: false, // 是否攜帶 cookie（這裡關閉）
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

/* ===============================
 * Request 攔截器
 * 在每次發送請求前執行
 * =============================== */
apiBase.interceptors.request.use(
  (config) => {
    const pageStore = usePageStore()
    const token = pageStore.token

    // 若存在 token，則自動帶入 Authorization 標頭
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

/* ===============================
 * 通用登入逾時處理邏輯
 * =============================== */
let errorMessageIsShow = false // 防止重複顯示提示視窗

function redirectToLogin() {
  const pageStore = usePageStore()
  pageStore.removeToken() // 清除 token 狀態

  // 若尚未顯示錯誤提示，顯示對話框提醒重新登入
  if (!errorMessageIsShow) {
    errorMessageIsShow = true
    showDialog({
      title: '操作時間過長，請重新登入!',
      confirmText: '確定'
    }).then(() => {
      errorMessageIsShow = false // 關閉對話框後恢復狀態
    })
  }
}

/* ===============================
 * Response 攔截器
 * 在接收到回應後執行
 * =============================== */
apiBase.interceptors.response.use(
  (response) => {
    // 若無資料則直接報錯
    if (!response.data) return Promise.reject({ message: 'API 無回傳資料' })

    const { http_code } = response.data

    // 若後端回傳 401（未授權），導向登入
    if (http_code === 401) {
      redirectToLogin()
      return Promise.reject('錯誤')
    }

    // 正常回傳資料
    return response.data
  },
  (err) => {
    // 若伺服器回傳 401（token 過期或未授權）
    if (err.response?.status === 401) {
      redirectToLogin()
    }

    // 顯示錯誤訊息
    showDialog({
      text: err?.response?.data?.message || '發生錯誤',
      confirmText: '確定'
    })

    return Promise.reject(err)
  }
)

/* ===============================
 * 封裝常用請求方法
 * =============================== */

/**
 * GET 方法
 * @param {string} url - API 路徑
 * @param {Object} [params] - 查詢參數
 * @param {AxiosRequestConfig} [config] - 額外設定
 */
const baseGet = (url, params, config) => {
  return apiBase.get(url, { ...config, params })
}

/**
 * POST 方法
 * @param {string} url - API 路徑
 * @param {Object} data - 傳送資料
 * @param {AxiosRequestConfig} [config] - 額外設定
 */
const basePost = (url, data, config) => {
  return apiBase.post(url, data, config)
}

/**
 * PUT 方法
 * @param {string} url - API 路徑
 * @param {Object} formInfo - 更新資料
 */
function basePut(url, formInfo) {
  return apiBase.put(url, formInfo)
}

/**
 * PATCH 方法
 * @param {string} url - API 路徑
 * @param {Object} formInfo - 局部更新資料
 */
function basePatch(url, formInfo) {
  return apiBase.patch(url, formInfo)
}

/**
 * DELETE 方法
 * @param {string} url - API 路徑
 * @param {AxiosRequestConfig} [config] - 額外設定
 */
const baseDel = (url, config) => {
  return apiBase.delete(url, config)
}

// 匯出共用 API 方法
export { baseDel, baseGet, basePatch, basePost, basePut }
