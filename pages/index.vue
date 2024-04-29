<template>
  <div>
    <div class="flex flex-col items-center justify-center h-screen">
      <Card>
        <h1 class="text-center font-bold text-[1.5rem] pb-4">
          Welcome to my Supabase Auth app!
        </h1>
        <NuxtLink
          class="w-[50%] mx-auto my-2 text-center text-lg text-white font-semibold bg-[#8324de] rounded-2xl hover:opacity-80 transition ease-in py-0.5"
          to="/login"
        >
          Login
        </NuxtLink>
        <NuxtLink
          class="w-[50%] mx-auto my-2 text-center text-lg text-white font-semibold bg-[#8324de] rounded-2xl hover:opacity-80 transition ease-in py-0.5"
          to="/register"
        >
          Register
        </NuxtLink>
      </Card>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main",
});
</script>
