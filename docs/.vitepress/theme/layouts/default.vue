<script setup lang="ts">
  // import { VPHomeHero } from 'vitepress/theme'
  import { useData } from 'vitepress'
  const { site, frontmatter } = useData()
  //TODO: HeadAndMeta not loading correctly
</script>

<template>
  <div>
    <HeadAndMeta />
    <div
      class="flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
    >
      <NavBar class="fixed bg-white dark:bg-neutral-950 shadow z-20" />
      <main class="mt-24 shadow">
        <div>
          <div v-if="frontmatter.slug !== 'home'">
            <TheHeader>
              <div>
                <div class="flex items-center">
                  <h2 class="text-5xl">
                    {{ frontmatter.title || site.title }}
                  </h2>
                </div>
                <p>{{ frontmatter.description || site.description }}</p>
                <div class="flex items-center mt-2">
                  <h6 class="mt-2">Github repo for this template</h6>
                  <BaseButton
                    size="xs"
                    class="ml-2"
                    color="secondary"
                    to="https://github.com/pinegrow/pg-vitepress-tailwindcss"
                    target="_blank"
                    ><span>Click here</span>
                  </BaseButton>
                </div>
              </div>
            </TheHeader>
            <div class="container mx-auto px-10 w-full">
              <div class="flex flex-col rounded-lg">
                <article
                  class="dark:xl:divide-gray-700 xl:divide-gray-200 xl:divide-y"
                >
                  <div
                    class="dark:divide-gray-700 divide-gray-200 divide-y pb-16 xl:divide-y-0 xl:gap-x-10 xl:grid xl:grid-cols-4 xl:pb-20 xl:sticky"
                    style="grid-template-rows: auto 1fr"
                  >
                    <div
                      class="dark:divide-gray-700 divide-gray-200 divide-y xl:col-span-3 xl:pb-0 xl:row-span-2"
                    >
                      <div
                        id="post"
                        class="dark:prose-invert dark:prose-gray-100 flex flex-col heading-offset max-w-none prose prose-gray-800 rounded-lg"
                      >
                        <Content />
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div v-else>
            <!-- <VPHomeHero /> -->
            <Content />
          </div>
        </div>
      </main>
      <TheFooter />
    </div>
  </div>
</template>
<style></style>
