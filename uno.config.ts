import { defineConfig, presetIcons, presetWind3, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto:400,500,700',
        nunito: 'Nunito:400,500,700'
      }
    }),
    presetWind3()
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    // prettier-ignore
    breakpoints: {
      "mobileS": "576px",
      "mobile": "768px",
      "pad": "1024px",
      "pc": "1440px",
      "large": "1600px",
    }
  },
  safelist: [],
  rules: [
    // 自訂 text-[var(--text-32)] 或 text-[32px]（支援 px → rem）
    [
      /^text-\[var\(--text-(.+?)\)\]$/,
      ([, value]) => ({
        'font-size': `var(--text-${value})`
      })
    ],
    [
      /^text-\[(\d+)px\]$/,
      ([, value]) => ({
        'font-size': `${value / 16}rem`
      })
    ],

    // 自訂 p-[40px]-[30px] → padding: 2.5rem 1.875rem
    [
      /^p-\[(.+?)\]-\[(.+?)\]$/,
      ([, topBottom, leftRight]) => {
        const convert = (v) => (v.endsWith('px') ? `${parseFloat(v) / 16}rem` : v)
        return {
          padding: `${convert(topBottom)} ${convert(leftRight)}`
        }
      }
    ],

    // 自訂 m-[40px]-[30px] → margin: 2.5rem 1.875rem
    [
      /^m-\[(.+?)\]-\[(.+?)\]$/,
      ([, topBottom, leftRight]) => {
        const convert = (v) => (v.endsWith('px') ? `${parseFloat(v) / 16}rem` : v)
        return {
          margin: `${convert(topBottom)} ${convert(leftRight)}`
        }
      }
    ],

    // 自訂 border style class（同樣支援 px）
    [
      /^border-\[(.+?)\]$/,
      ([, value]) => ({
        border: value.endsWith('px') ? `${parseFloat(value) / 16}rem solid` : `1px solid ${value}`
      })
    ],
    [
      /^border-t-\[(.+?)\]$/,
      ([, value]) => ({
        'border-top': value.endsWith('px') ? `${parseFloat(value) / 16}rem solid` : `1px solid ${value}`
      })
    ],
    [
      /^border-r-\[(.+?)\]$/,
      ([, value]) => ({
        'border-right': value.endsWith('px') ? `${parseFloat(value) / 16}rem solid` : `1px solid ${value}`
      })
    ],
    [
      /^border-b-\[(.+?)\]$/,
      ([, value]) => ({
        'border-bottom': value.endsWith('px') ? `${parseFloat(value) / 16}rem solid` : `1px solid ${value}`
      })
    ],
    [
      /^border-l-\[(.+?)\]$/,
      ([, value]) => ({
        'border-left': value.endsWith('px') ? `${parseFloat(value) / 16}rem solid` : `1px solid ${value}`
      })
    ],

    // 自動將 px 單位轉換成 rem (1rem = 16px)
    [/^m-(\d+)px$/, ([, value]) => ({ margin: `${value / 16}rem` })],
    [/^mt-(\d+)px$/, ([, value]) => ({ 'margin-top': `${value / 16}rem` })],
    [/^mb-(\d+)px$/, ([, value]) => ({ 'margin-bottom': `${value / 16}rem` })],
    [/^ml-(\d+)px$/, ([, value]) => ({ 'margin-left': `${value / 16}rem` })],
    [/^mr-(\d+)px$/, ([, value]) => ({ 'margin-right': `${value / 16}rem` })],
    [/^p-(\d+)px$/, ([, value]) => ({ padding: `${value / 16}rem` })],
    [/^pt-(\d+)px$/, ([, value]) => ({ 'padding-top': `${value / 16}rem` })],
    [/^pb-(\d+)px$/, ([, value]) => ({ 'padding-bottom': `${value / 16}rem` })],
    [/^pl-(\d+)px$/, ([, value]) => ({ 'padding-left': `${value / 16}rem` })],
    [/^pr-(\d+)px$/, ([, value]) => ({ 'padding-right': `${value / 16}rem` })],
    [/^text-(\d+)px$/, ([, value]) => ({ 'font-size': `${value / 16}rem` })]
  ]
})
