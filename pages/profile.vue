<template>
  <div class="h-screen flex items-center justify-center">
    <Profile />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main",
  middleware: "auth",
});
</script>
