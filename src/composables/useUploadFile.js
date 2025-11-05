/**
 * useUploadFile
 * 檔案上傳與格式轉換的通用組合函式
 *
 * 提供三個常用方法：
 * 1. blobToFile - 將 Blob 轉換為 File 物件
 * 2. dataURLToBlob - 將 Base64 (Data URL) 轉為 Blob
 * 3. uploadFile - 上傳單一檔案至伺服器
 *
 * 適用場景：
 * - 將 Canvas / 簽名板 / 圖片 Base64 資料轉為檔案後上傳
 * - 一般 <input type="file"> 上傳流程
 *
 * 使用範例：
 * const { uploadFile, dataURLToBlob, blobToFile } = useUploadFile()
 * const blob = dataURLToBlob(base64Str)
 * const file = blobToFile(blob, 'sign.png')
 * const res = await uploadFile(file)
 */
export const useUploadFile = () => {
  /**
   * 將 Blob 轉換為 File 物件
   * @param {Blob} blob - 要轉換的 Blob
   * @param {string} fileName - 轉換後的檔案名稱
   * @returns {File} File 物件
   */
  function blobToFile(blob, fileName) {
    return new File([blob], fileName)
  }

  /**
   * 將 Base64 (DataURL) 轉為 Blob
   * @param {string} dataURL - Base64 資料，例如 "data:image/png;base64,xxxxxx"
   * @returns {Blob} Blob 物件，可用於上傳或轉成 File
   */
  function dataURLToBlob(dataURL) {
    const [contentType, base64] = dataURL.split(';base64,')
    const raw = atob(base64)
    const rawLength = raw.length
    const uInt8Array = new Uint8Array(rawLength)

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i)
    }

    return new Blob([uInt8Array], { type: contentType })
  }

  /**
   * 上傳檔案到伺服器
   * @param {File} file - 準備上傳的 File 物件
   * @returns {Promise<object>} API 回傳結果
   */
  async function uploadFile(file) {
    if (!file) throw new Error('No file provided for upload')

    const formData = new FormData()
    formData.append('file', file)

    return await basePost('/uploadFile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }

  return {
    uploadFile,
    dataURLToBlob,
    blobToFile
  }
}
