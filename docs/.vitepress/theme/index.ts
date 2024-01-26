// import devtools from '@vue/devtools'

// // @ts-ignore
// if (process.env.NODE_ENV === 'development') {
//   // devtools.connect(/* host, port */)
//   // (window as any) = devtools
//   // @ts-ignore
//   window.devtoolsKey = devtools
// }

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
// import Theme from 'vitepress/theme'
import { Theme, defineConfigWithTheme } from 'vitepress'
import Layout from '@/layouts/default.vue'
import pinia from '@/plugins/pinia'

export default <Theme>{
  // extends: Theme,
  // Layout: () => {
  //   return h(Theme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(pinia)
    // ...
  },
}
