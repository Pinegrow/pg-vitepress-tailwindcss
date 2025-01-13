<script setup lang="ts">
  import siteMeta from '@/site'
  const { title, logo } = siteMeta
</script>
<template>
  <a data-pg-name="Logo" class="flex items-center sm:flex-row" href="/">
    <BaseIcon height="40" class="mt-2" :name="logo" />
    <h6
      class="text-primary-600 dark:text-primary-200 font-extrabold font-serif ml-2 mt-4 text-2xl"
    >
      {{ title }}
    </h6>
  </a>
</template>
<style scoped></style>
