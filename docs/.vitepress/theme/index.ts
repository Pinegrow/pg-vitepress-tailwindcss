// For customizing theme, make sure you install vue as a dependency
// Refer to: https://vitepress.dev/guide/custom-theme
// Refer to: https://vitepress.dev/guide/extending-default-theme#layout-slots

// You can directly import Vue files in the theme entry
// VitePress is pre-configured with @vitejs/plugin-vue.
// import Layout from './layouts/default.vue'

import 'uno.css'
// import '@/assets/css/main.css'
import '@/assets/css/tailwind.css'

// import { h } from 'vue'
// import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { defineConfigWithTheme } from 'vitepress'
import Layout from '@/layouts/default.vue'
import pinia from '@/plugins/pinia'
import head from '@/plugins/head'

export default {
  // extends: DefaultTheme,
  // Layout: () => {
  //   return h(DefaultTheme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(head)
    app.use(pinia)
    // ...
  },
} satisfies Theme
