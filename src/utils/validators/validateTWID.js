/**
 * 驗證台灣身分證字號（符合內政部檢核演算法）
 * @param {string} id 身分證字號
 * @returns {boolean} 是否有效
 */
export function validateTWID(id) {
  if (!id || typeof id !== 'string') return false

  const s = id.trim().toUpperCase()
  if (!/^[A-Z][12][0-9]{8}$/.test(s)) return false // 格式：英文字 + 1/2 + 8 碼數字

  // 縣市代碼對照表（字母 → 數值）
  const letterCode = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    G: 16,
    H: 17,
    I: 34,
    J: 18,
    K: 19,
    L: 20,
    M: 21,
    N: 22,
    O: 35,
    P: 23,
    Q: 24,
    R: 25,
    S: 26,
    T: 27,
    U: 28,
    V: 29,
    W: 32,
    X: 30,
    Y: 31,
    Z: 33
  }

  const first = letterCode[s[0]]
  if (!first) return false

  // 拆解英文字母為兩位數，並與後續數字組合成完整陣列
  const digits = [
    Math.floor(first / 10), // 十位
    first % 10, // 個位
    ...s
      .slice(1)
      .split('')
      .map((n) => parseInt(n, 10))
  ]

  // 權重值依序相乘
  const weights = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  const sum = digits.slice(0, 10).reduce((acc, num, i) => acc + num * weights[i], 0)

  // 驗證：加總結果加上最後一碼應可被 10 整除
  return (sum + digits[10]) % 10 === 0
}
