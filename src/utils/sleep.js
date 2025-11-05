/**
 * 讓程式暫停執行指定的毫秒時間
 *
 * @param {number} ms - 要暫停的時間（毫秒）
 * @returns {Promise<void>} - 回傳一個 Promise，於指定時間後 resolve
 *
 * @example
 * // 範例：延遲 1 秒後執行
 * await sleep(1000)
 * console.log('1 秒後執行')
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
