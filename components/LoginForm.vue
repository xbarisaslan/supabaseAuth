<template>
  <form class="w-[60%] mx-auto space-y-3" @submit.prevent="signIn">
    <FormInput label="E-Mail" placeholder="Enter your email" v-model="email" />
    <FormInput
      label="Password"
      type="password"
      placeholder="Enter your password"
      v-model="password"
    />
    <h6 class="text-red-500 font-medium">{{ errorMsg }}</h6>
    <PrimaryButton> Login </PrimaryButton>
  </form>
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
