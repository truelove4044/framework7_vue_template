/**
 * useNavigator
 * Framework7 導航功能組合
 * 提供 goPage / goBack / reloadPage 三種常用方法
 *
 * @example
 * const { goPage } = useNavigator()
 * goPage('/home') // 一般導頁
 * goPage('/login', { reloadCurrent: true, animate: false }) // 支援 router 選項

 * reloadCurrent	重新載入目前頁面
 * reloadAll	清除 router stack 並載入新頁面
 * animate	是否啟用轉場動畫
 * ignoreCache	忽略快取
 * replaceState	不建立新 history 記錄
 */

export function useNavigator() {
  /**
   * 前往指定頁面
   * @param {string} path - 要導向的路徑
   * @param {object} [options={}] - Framework7 router.navigate 的選項
   */
  const goPage = (path, options = {}) => {
    if (!window?.f7?.view?.main?.router) {
      return
    }
    try {
      f7.view.main.router.navigate(path, options)
    } catch (err) {
      console.error('[useNavigator] 導頁失敗：', err)
    }
  }

  /**
   * 返回上一頁
   */
  const goBack = (options = {}) => {
    if (!window?.f7?.view?.main?.router) return
    try {
      f7.view.main.router.back(options)
    } catch (err) {
      console.error('[useNavigator] 返回上一頁失敗：', err)
    }
  }

  /**
   * 重新載入目前頁面
   */
  const reloadPage = () => {
    if (!window?.f7?.view?.main?.router) return
    try {
      const currentUrl = f7.view.main.router.currentRoute.url
      f7.view.main.router.navigate(currentUrl, { reloadCurrent: true })
    } catch (err) {
      console.error('[useNavigator] 重新載入頁面失敗：', err)
    }
  }

  return { goPage, goBack, reloadPage }
}
