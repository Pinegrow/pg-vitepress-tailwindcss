import fg from 'fast-glob'
import fs from 'fs'
import path from 'path'

export default {
  async paths() {
    const pages = await fg.glob('pages/**/*.{vue,md}', {
      cwd: import.meta.dirname,
    })
    return pages.map((page) => {
      let _page: any
      if (page.endsWith('.vue')) {
        _page = {
          params: { page: page.slice(6, -4) },
          content: `<Comp />\n<script setup>import Comp from '/${page}'</script>`,
        }
      } else {
        _page = {
          params: { page: page.slice(6, -3) },
          content: fs.readFileSync(path.resolve(import.meta.dirname, page)),
        }
      }
      return _page
    })
  },
}

// for now manually press r after adding/deleting any page component
// track - https://github.com/vuejs/vitepress/issues/3937
