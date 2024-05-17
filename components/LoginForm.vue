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

    <p class="font-medium text-center">
      Don't have an account yet?
      <NuxtLink
        to="/register"
        class="text-[#8324de] underline underline-offset-2 hover:opacity-75 transition ease-in"
      >
        Register now.
      </NuxtLink>
    </p>

    <SuccessMsg :active="isActive">
      {{ successMsg }}
    </SuccessMsg>
  </form>
</template>

<script setup>
const supabase = useSupabaseClient();

const email = ref("");
const password = ref(null);
const errorMsg = ref("");
const successMsg = ref("");
const isActive = ref(false);

const signIn = async () => {
  try {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;

    successMsg.value = "You have successfully logged in! ";
    isActive.value = true;

    setTimeout(() => {
      navigateTo("/profile");
    }, 2000);
  } catch (error) {
    errorMsg.value = error.message;
  }
};
</script>
