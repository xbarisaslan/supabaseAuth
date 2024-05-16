<template>
  <Card>
    <h1 class="text-center font-bold text-[1.5rem] pb-4">
      Welcome to my Supabase Auth app!
    </h1>

    <LinkButton :to="user ? '/profile' : '/login'">
      {{ user ? "Profile" : "Login" }}
    </LinkButton>

    <LinkButton to="/register"> Create a new account </LinkButton>
  </Card>
</template>

<script setup>
definePageMeta({
  layout: "main",
});

const user = useSupabaseUser();
</script>
