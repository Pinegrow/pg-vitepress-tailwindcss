import { defineConfig } from 'vitepress'

import siteDefn from './theme/site'
const { title, description, url } = siteDefn

// https://vitepress.dev/reference/site-config
export default defineConfig({
  /* Uncomment this line */
  // srcDir: 'theme/pages',
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
})
