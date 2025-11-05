module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16, // 基準值
      propList: ['*'], // 需要轉換的屬性列表，['*']表示所有屬性都轉換
      unitPrecision: 5, // 允許REM單位增長到的十倍數
      selectorBlackList: [], // 要忽略的選擇器並保留為px
      replace: true, // 替換包含的規則
      mediaQuery: false, // 允許在媒體查詢中轉換px
      minPixelValue: 0 // 設定要替換的最小像素值
    }
  }
}
