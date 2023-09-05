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
      iconPreferredCase: 'unocss', // default value (can be removed), unocss by default uses the unocss format for icon names
      devtoolsKey: 'devtools', // see app.ts
      tailwindcss: {
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        configPath: '../tailwind.config.ts',
        cssPath: '@/assets/css/tailwind.css',
      },
      // plugins: [
      //   {
      //     name: 'My Awesome Lib 3.0',
      //     key: 'my-awesome-lib',
      //     pluginPath: fileURLToPath(
      //       new URL('./my-awesome-lib/web-types.json', import.meta.url),
      //     ),
      //   },
      // ],
    }),
    // ...
    // For details, refer to https://github.com/antfu/unplugin-auto-import#configuration
    AutoImportAPIs({
      include: [
        /.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /.vue$/,
        /.vue?vue/, // .vue
        /.md$/, // .md
      ],
      imports: [
        'vue',
        'vue-router',
        // 'vue-i18n',
        // 'vue/macros',
        // '@vueuse/head',
        // '@vueuse/core',
        'pinia',
      ],
      dirs: [
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        // 'src/composables',
        // 'src/stores',
      ],
      vueTemplate: true,
      dts: 'auto-imports.d.ts',
    }),
    // ...
    // For details, refer to https://github.com/antfu/unplugin-vue-components#configuration
    // Bug report - https://github.com/vuejs/vitepress/discussions/2836

    AutoImportComponents({
      /* Take care to amend any paths to reflect the actual paths used in your project. */

      dirs: ['./.vitepress/theme/components'],

      // allow auto load markdown components under ./src/components/
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.mdx?/],

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
      /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

      '@': fileURLToPath(new URL('./.vitepress/theme', import.meta.url)),
      '~': fileURLToPath(new URL('./.vitepress/theme', import.meta.url)),
      '~~': fileURLToPath(new URL('./.vitepress', import.meta.url)),
    },
  },
})
