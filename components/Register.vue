<template>
  <Card>
    <h1 class="text-center font-semibold text-3xl pb-5">Register</h1>
    <form class="w-[60%] mx-auto space-y-3" @submit.prevent="signUp">
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
      <FormInput
        label="Password Confirmation"
        type="password"
        placeholder="Re-enter your password"
        v-model="passwordConfirmation"
      />
      <button
        class="w-full mx-auto mt-8 text-center text-lg text-white font-semibold bg-[#8324de] rounded-2xl hover:opacity-80 transition ease-in py-0.5"
        type="submit"
      >
        Register
      </button>
    </form>
  </Card>
</template>

<script setup>
const supabase = useSupabaseClient();

const email = ref("");
const password = ref(null);
const passwordConfirmation = ref(null);

const signUp = async () => {
  try {
    let { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    console.log("Successfully signed up!");
    navigateTo("/");
  } catch (error) {
    console.log(error);
  }
};
</script>
