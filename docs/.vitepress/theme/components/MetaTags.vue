<script setup lang="ts">
  import { computed } from 'vue'
  import { useHead, useSeoMeta } from 'unhead'
  import checkDarkTheme from '@/composables/dark-color-scheme-check?raw'
  import type { Script } from '@unhead/schema'
  type TurboScript = Script & { once: true }
  import { useData } from 'vitepress'

  const { site, frontmatter } = useData()
  const { title, description } = site.value
  const author = 'Pinegrow'

  useSeoMeta({
    title,
    ogTitle: title,
    description,
    ogDescription: description,
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
  })

  useHead({
    title,
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - ${title}` : title
    },
    htmlAttrs: { lang: 'en-US' },
    meta: [
      { property: 'charset', content: 'utf-8' },
      {
        property: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { property: 'author', content: author },
      {
        property: 'twitter:image',
        content: 'https://icons.vuetelescope.com/vue.svg',
      },
      {
        property: 'twitter:image:alt',
        content: 'Vue',
      },
      {
        property: 'twitter:site',
        content: '@pinegrow',
      },
      {
        property: 'twitter:card',
        content: 'summary',
      },
    ],
    script: [{ children: checkDarkTheme, once: true } as TurboScript],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  })
</script>

<template>
  <div></div>
</template>
