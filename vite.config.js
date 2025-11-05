import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const SRC_DIR = path.resolve(__dirname, './src')
const PUBLIC_DIR = path.resolve(__dirname, './public')
const BUILD_DIR = path.resolve(__dirname, './www')
export default async () => {
  return {
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => tag.includes('swiper-')
          }
        }
      }),
      UnoCSS(),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'pinia',
          {
            yup: [['*', 'yup']],
            'framework7-vue': ['f7', 'f7ready', 'f7Router'],
            framework7: ['Dom7'],
            'lodash-es': ['map', 'find', 'groupBy', 'keyBy', 'orderBy', 'uniqBy', 'debounce', 'pick', 'omit']
          }
        ],
        // prettier-ignore
        dirs: [
          path.resolve(__dirname, 'src/composables'),
          path.resolve(__dirname, 'src/js'),
          path.resolve(__dirname, 'src/stores'),
          path.resolve(__dirname, 'src/routes'),
          path.resolve(__dirname, 'src/utils'),
          path.resolve(__dirname, 'src/utils/validators'),
        ],
        dts: path.resolve(__dirname, 'src/auto-imports.d.ts'),
        vueTemplate: true
      }),
      Components({
        dirs: [path.resolve(__dirname, 'src/components'), path.resolve(__dirname, 'src/pages')],
        extensions: ['vue'],
        deep: true,
        dts: path.resolve(__dirname, 'src/components.d.ts')
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(SRC_DIR, 'assets/icons')],
        symbolId: 'icon-[dir]-[name]'
      })
    ],
    root: SRC_DIR,
    base: '',
    publicDir: PUBLIC_DIR,
    build: {
      outDir: BUILD_DIR,
      assetsInlineLimit: 0,
      emptyOutDir: true,
      rollupOptions: {
        treeshake: false
      }
    },
    resolve: {
      alias: {
        '@': SRC_DIR
      }
    },
    server: {
      host: true
    }
  }
}
