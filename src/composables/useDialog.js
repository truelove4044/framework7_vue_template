/**
 * useDialog
 * Framework7 對話框組合函式
 * 提供 showAlert / showConfirm 兩種常用彈窗
 */
export function useDialog() {
  /**
   * 顯示提示框（單按鈕）
   *
   * @param {string} title - 對話框標題
   * @param {string} [message=''] - 對話框文字內容
   * @param {object} [options] - 自訂選項
   * @param {string} [options.okText='確定'] - 按鈕文字
   * @param {string|null} [options.content=null] - 自訂 HTML 內容（會覆蓋 message）
   * @returns {Promise<void>} - 無回傳值（按下確定後關閉）
   *
   * showAlert('刪除成功', '資料已移除').then((ok)=>{
   *  if(ok){
   *    console.log('ok')
   *  }
   * })
   *
   * showAlert('提示', '資料儲存成功',{okText:'確認文字', content:`<div>自訂Html</div>`})
   */
  const showAlert = (title, message = '', options = {}) => {
    const { okText = '確定', content = null } = options

    return new Promise((resolve) => {
      const dialog = f7.dialog.create({
        title,
        text: content ? '' : message,
        content,
        closeByBackdropClick: false, // 禁止點擊背景關閉
        closeOnEscape: false, // 禁止按 ESC 關閉
        buttons: [
          {
            text: okText,
            bold: true,
            onClick: () => resolve(true)
          }
        ]
      })
      dialog.open()
    })
  }

  /**
   * 顯示確認框（雙按鈕）
   *
   * @param {string} title - 對話框標題
   * @param {string} [message=''] - 對話框文字內容
   * @param {object} [options] - 自訂選項
   * @param {string} [options.cancelText='取消'] - 取消按鈕文字
   * @param {string} [options.okText='確定'] - 確定按鈕文字
   * @param {string|null} [options.content=null] - 自訂 HTML 內容（會覆蓋 message）
   * @returns {Promise<boolean>} - true 為按下確定，false 為取消
   *
   * showConfirm('刪除確認', '確定要刪除此筆資料嗎？').then((ok)=>{
   *  if(ok){
   *    console.log('ok')
   *  }
   * })
   */
  const showConfirm = (title, message = '', options = {}) => {
    const { cancelText = '取消', okText = '確定', content = null } = options

    return new Promise((resolve) => {
      const dialog = f7.dialog.create({
        title,
        text: content ? '' : message,
        content,
        closeByBackdropClick: false, // 禁止點擊背景關閉
        closeOnEscape: false, // 禁止按 ESC 關閉
        buttons: [
          {
            text: cancelText,
            onClick: () => resolve(false)
          },
          {
            text: okText,
            bold: true,
            onClick: () => resolve(true)
          }
        ]
      })
      dialog.open()
    })
  }

  return { showAlert, showConfirm }
}
