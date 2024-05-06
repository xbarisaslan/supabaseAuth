<template>
  <NuxtLink
    class="w-[50%] mx-auto my-2 text-center text-lg text-white font-semibold bg-[#8324de] rounded-2xl hover:opacity-80 transition ease-in py-0.5"
    :to="to"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>
