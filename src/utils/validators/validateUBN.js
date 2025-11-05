/**
 * 驗證統一編號（新版規則）
 * 通過：sum % 5 === 0
 * 特例：第 7 碼為 '7' 時允許 (sum + 1) % 5 === 0
 */
export function validateUBN(ubn) {
  if (ubn == null) return false

  ubn = String(ubn).trim()

  if (!/^\d{8}$/.test(ubn)) return false

  const weights = [1, 2, 1, 2, 1, 2, 4, 1]

  const digitSum = (i) => {
    const product = (ubn.charCodeAt(i) - 48) * weights[i]
    return Math.floor(product / 10) + (product % 10)
  }

  let sum = 0
  for (let i = 0; i < 8; i++) sum += digitSum(i)

  if (sum % 5 === 0) return true
  if (ubn[6] === '7' && (sum + 1) % 5 === 0) return true

  return false
}
