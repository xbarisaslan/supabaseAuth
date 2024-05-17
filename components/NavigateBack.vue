<template>
  <NuxtLink
    :to="to"
    class="w-fit ml-4 bg-[#8324de] rounded-full p-1 hover:opacity-85 transition ease-in"
  >
    <img src="/arrow-back.png" class="w-7" />
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    require: true,
  },
});
</script>
