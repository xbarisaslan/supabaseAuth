<template>
  <Transition
    enter-active-class="transform transition duration-200 ease-in-out"
    enter-from-class="translate-x-1/2 scale-x-0"
    enter-to-class="translate-x-0 scale-x-100"
    leave-active-class="transform transition duration-200 ease-in-out"
    leave-from-class="translate-x-0 scale-x-100"
    leave-to-class="translate-x-1/2 scale-x-0"
  >
    <div
      class="bg-white absolute top-0 right-4 px-8 py-3 rounded-md font-medium overflow-hidden flex items-center gap-2"
      v-if="active"
    >
      <img src="/success.png" class="w-6" />
      <div class="bg-green-500 absolute left-0 top-0 bottom-0 w-2"></div>
      <slot></slot>
    </div>
  </Transition>
</template>
<script setup>
const props = defineProps({
  active: {
    type: Boolean,
  },
});
</script>
