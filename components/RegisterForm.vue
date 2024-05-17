<template>
  <form class="w-[60%] mx-auto space-y-3" @submit.prevent="signUp">
    <div class="flex gap-6">
      <FormInput label="First Name" placeholder="John" v-model="first_name" />
      <FormInput label="Last Name" placeholder="Doe" v-model="last_name" />
    </div>
    <FormInput
      label="Username"
      placeholder="Enter your username"
      v-model="username"
    />

    <FormInput
      label="E-Mail"
      placeholder="Enter your email address"
      v-model="email"
    />
    <FormInput
      label="Password"
      type="password"
      placeholder="Enter a strong password"
      v-model="password"
    />
    <FormInput
      label="Confirm Password"
      type="password"
      placeholder="Re-enter your password"
      v-model="passwordConfirmation"
    />
    <h6 class="text-red-500 font-medium">{{ errorMsg }}</h6>

    <PrimaryButton> Create account</PrimaryButton>

    <p class="font-medium text-center">
      Already have an account?
      <NuxtLink
        to="/register"
        class="text-[#8324de] underline underline-offset-2 hover:opacity-75 transition ease-in"
      >
        Login now.
      </NuxtLink>
    </p>

    <SuccessMsg :active="isActive">
      {{ successMsg }}
    </SuccessMsg>
  </form>
</template>

<script setup>
const supabase = useSupabaseClient();

const username = ref("");
const first_name = ref("");
const last_name = ref("");
const email = ref("");
const password = ref(null);
const passwordConfirmation = ref(null);

const errorMsg = ref("");
const successMsg = ref("");
const isActive = ref(false);

const signUp = async () => {
  try {
    const { user, session, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          username: username.value,
          full_name: `${first_name.value} ${last_name.value}`,
        },
      },
    });

    if (error) {
      throw error;
    }
    successMsg.value = "You have successfully registered!";
    isActive.value = true;
    setTimeout(() => {
      navigateTo("/login");
    }, 3000);
  } catch (error) {
    errorMsg.value = error.message;
  }
};
</script>
