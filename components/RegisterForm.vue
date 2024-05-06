<template>
  <form class="w-[60%] mx-auto space-y-3" @submit.prevent="signUp">
    <div class="flex gap-6">
      <FormInput label="First Name" placeholder="John" v-model="first_name" />
      <FormInput label="Last Name" placeholder="Doe" v-model="last_name" />
    </div>
    <FormInput label="E-Mail" placeholder="Enter your email" v-model="email" />
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
    <PrimaryButton> Create account </PrimaryButton>
  </form>
</template>

<script setup>
const supabase = useSupabaseClient();

const email = ref("");
const password = ref(null);
const passwordConfirmation = ref(null);
const first_name = ref("");
const last_name = ref("");

const signUp = async () => {
  try {
    let { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    console.log("Successfully signed up!");
    navigateTo("/login");
  } catch (error) {
    console.log(error);
  }
};
</script>
