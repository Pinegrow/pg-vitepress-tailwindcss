import { defineConfig } from 'vitepress'

import siteDefn from './theme/site'
const { title, description, url } = siteDefn

import { fileURLToPath, URL } from 'node:url'

import { liveDesigner } from '@pinegrow/vite-plugin'
import AutoImportComponents from 'unplugin-vue-components/vite'
import AutoImportAPIs from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'

// import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // srcDir must be relative to root (docs)
  srcDir: '.vitepress/theme/pages',
  title,
  titleTemplate: `:title - ${title}`,
  description,
  sitemap: {
    hostname: url,
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === 'lite-youtube',
      },
    },
  },
  // themeConfig: {
  //   // https://vitepress.dev/reference/default-theme-config
  //   nav: [
  //     { text: 'Home', link: '/' },
  //     { text: 'Examples', link: '/markdown-examples' },
  //   ],

  //   sidebar: [
  //     {
  //       text: 'Examples',
  //       items: [
  //         { text: 'Markdown Examples', link: '/markdown-examples' },
  //         { text: 'Runtime API Examples', link: '/api-examples' },
  //       ],
  //     },
  //   ],

  //   socialLinks: [
  //     { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
  //   ],
  // },
  vite: {
    plugins: [
      // For details, refer to https://github.com/antfu/unplugin-auto-import#configuration
      AutoImportAPIs({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
          /\.mdx$/, // .mdx
        ],
        imports: [
          'vue',
          'vue-router',
          // 'vue-i18n',
          // 'vue/macros',
          '@vueuse/head',
          '@vueuse/core',
          'pinia',
        ],
        dirs: [
          /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
          // Path must be relative to Vitepress's srcDir
          '../composables',
          '../utils',
          '../stores',
        ],
        vueTemplate: true,
        dts: 'auto-imports.d.ts',
      }),

      // For details, refer to https://github.com/antfu/unplugin-vue-components#configuration
      AutoImportComponents({
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        // Path must be relative to Vitepress's srcDir
        dirs: ['../components'],

        // allow auto load markdown components under ./src/components/
        extensions: ['vue', 'md'],

        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.mdx?/],

        // resolvers: [], // Auto-import using resolvers
        dts: 'components.d.ts',
      }),

      Unocss({
        presets: [
          presetIcons({
            prefix: 'i-', // default prefix, do not change
          }),
        ],
        content: {
          pipeline: {
            include: ['docs/.vitepress/**/*'],
          },
        },
      }),
      // VueDevTools(),
      liveDesigner({
        iconPreferredCase: 'unocss', // default value (can be removed), unocss by default uses the unocss format for icon names
        devtoolsKey: 'devtoolsKey', // see app.ts
        tailwindcss: {
          /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
          configPath: '../tailwind.config.ts',
          cssPath: '@/assets/css/tailwind.css',
          // themePath: false, // Set to false so that Design Panel is not used
          // restartOnConfigUpdate: true,
          restartOnThemeUpdate: true,
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
    ],
    // ...
    resolve: {
      alias: {
        /* Must be either an object, or an array of { find, replacement, customResolver } pairs. */
        /* Refer to: https://vitejs.dev/config/shared-options.html#resolve-alias */
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        // Path resolved relative to this file
        '@': fileURLToPath(new URL('./theme', import.meta.url)),
        '~': fileURLToPath(new URL('./theme', import.meta.url)),
        '~~': fileURLToPath(new URL('.', import.meta.url)),
      },
    },
  },
})
