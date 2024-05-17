<template>
  <Card>
    <NavigateBack to="/" />
    <h1 class="text-center font-semibold text-3xl pb-5">Profile</h1>
    <ProfileContent />
  </Card>
</template>

<script setup>
definePageMeta({
  layout: "main",
  middleware: "auth",
});
</script>
