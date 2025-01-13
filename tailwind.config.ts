import {
  pg_colors,
  pg_fonts,
  pg_backgrounds,
} from './themes/pg-tailwindcss/tokens.mjs'

import { getFontsWithFallback } from './docs/.vitepress/theme/utils/font'
import { safelist } from './docs/.vitepress/theme/utils/colors'

import tailwindTypography from '@tailwindcss/typography'
import tailwindForms from '@tailwindcss/forms'
import tailwindCssPluginPinegrow from '@pinegrow/tailwindcss-plugin'

export default {
  darkMode: 'class',
  plugins: [
    tailwindTypography,
    tailwindForms,
    tailwindCssPluginPinegrow({
      colors: pg_colors, // primary, secondary etc
      fonts: getFontsWithFallback(pg_fonts),
      backgrounds: pg_backgrounds, // bg-design-image, bg-design-image-large
    }),
  ],

  safelist,

  /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
  get content() {
    const _content = [
      './index.html',
      './docs/.vitepress/theme/**/*.{vue,svelte,astro,js,jsx,cjs,mjs,ts,tsx,cts,mts,html,md,mdx,json}',
    ]
    return process.env.NODE_ENV === 'production'
      ? _content
      : [..._content, './_pginfo/**/*.{html,js}'] // used by Vue Desginer for live-designing during development
  },
}
