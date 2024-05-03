<template>
  <Card>
    <h1 class="text-center font-semibold text-3xl pb-5">Login</h1>
    <form class="w-[60%] mx-auto space-y-3" @submit.prevent="signIn">
      <FormInput
        label="E-Mail"
        placeholder="Enter your email"
        v-model="email"
      />
      <FormInput
        label="Password"
        type="password"
        placeholder="Enter your password"
        v-model="password"
      />
      <h6 class="text-red-500 font-medium">{{ errorMsg }}</h6>
      <button
        type="submit"
        class="w-full mx-auto mt-8 text-center text-lg text-white font-semibold bg-[#8324de] rounded-2xl hover:opacity-80 transition ease-in py-0.5"
      >
        Login
      </button>
    </form>
  </Card>
</template>

<script setup>
const supabase = useSupabaseClient();

const email = ref("");
const password = ref(null);
const errorMsg = ref("");

const signIn = async () => {
  try {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    console.log("User successfully logged in!");
    navigateTo("/profile");
  } catch (error) {
    errorMsg.value = error.message;
  }
};
</script>
