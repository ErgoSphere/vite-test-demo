import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/, /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        imports: [
          // presets
          'vue',
            'vue-router',
          // custom
          {
            '@vueuse/core': [
              // named imports
              'useMouse', // import { useMouse } from '@vueuse/core',
              // alias
              ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
            ],
          },
        ],
        dirs: [
            './components'
        ],
        dts: './auto-imports.d.ts',
        vueTemplate: true,
      }),
      Components(({
        resolvers: [ElementPlusResolver()]
      })),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/, /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        dirs: ['./components'],
        dts: './components.d.ts',
        vueTemplate: true,
        resolvers: [ElementPlusResolver()]
      })
  ]
})
