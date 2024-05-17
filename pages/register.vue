<template>
  <Card>
    <NavigateBack to="/" />
    <h1 class="text-center font-semibold text-3xl pb-5">Register</h1>
    <RegisterForm />
  </Card>
</template>

<script setup>
definePageMeta({
  layout: "main",
});
</script>
