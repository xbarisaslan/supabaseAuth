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
    <PrimaryButton> Create account </PrimaryButton>
  </form>
</template>

<script setup>
const supabase = useSupabaseClient();

const email = ref("");
const password = ref(null);
const passwordConfirmation = ref(null);
const username = ref("");
const first_name = ref("");
const last_name = ref("");

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

    navigateTo("/login");
  } catch (error) {
    console.error(error.message);
  }
};
</script>
