// vite.config.js (or) vite.config.ts
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { liveDesigner } from '@pinegrow/vite-plugin'
import AutoImportComponents from 'unplugin-vue-components/vite'
import AutoImportAPIs from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
// import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    liveDesigner({
      devtoolsKey: 'devtools',
      tailwindcss: {
        configPath: '../tailwind.config.ts',
        cssPath: '@/tailwind.css',
      },
    }),
    // ...
    // For details, refer to https://github.com/antfu/unplugin-auto-import#configuration
    AutoImportAPIs({
      imports: [
        'vue',
        'vue-router',
        // 'vue-i18n',
        // 'vue/macros',
        // '@vueuse/head',
        // '@vueuse/core',
        // 'pinia',
      ],
      dirs: [
        // 'src/composables',
        // 'src/stores',
      ],
      vueTemplate: true,
      dts: 'auto-imports.d.ts',
    }),
    // ...
    AutoImportComponents({
      dirs: ['.vitepress/theme/components'],
      // resolvers: [], // Auto-import using resolvers
      dts: 'components.d.ts',
    }),
    Unocss({
      presets: [
        presetIcons({
          prefix: 'i-', // default prefix, do not change
        }),
      ],
    }),
    // VueDevTools(),
  ],
  // ...
  resolve: {
    alias: {
      /* Must be either an object, or an array of { find, replacement, customResolver } pairs. */
      /* Refer to: https://vitejs.dev/config/shared-options.html#resolve-alias */
      '@': fileURLToPath(new URL('./.vitepress/theme', import.meta.url)),
      '~': fileURLToPath(new URL('./.vitepress/theme', import.meta.url)),
      '~~': fileURLToPath(new URL('./.vitepress', import.meta.url)),
    },
  },
})
