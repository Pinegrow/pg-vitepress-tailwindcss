<script setup lang="ts">
  import { ref } from 'vue'

  const props = defineProps({
    name: {
      type: String,
      default: 'Component' /*PinegrowComponentTemplate*/,
    },
  })

  const suffix = ref('placeholder')
</script>
<template>
  <div class="flex flex-col items-center p-4">
    <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4">
      <img
        class="w-full"
        src="https://tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4 pb-2">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="flex justify-around px-6 py-4">
        <BaseButton class="rounded-full" variant="outline" size="xs"
          >#photography</BaseButton
        >
        <BaseButton class="rounded-full" variant="outline" size="xs"
          >#travel</BaseButton
        >
        <BaseButton class="rounded-full" variant="outline" size="xs"
          >#winter</BaseButton
        >
      </div>
    </div>
    <BaseButton label="Quick Start" to="quick-start" variant="solid" />
  </div>
</template>
<style scoped></style>
