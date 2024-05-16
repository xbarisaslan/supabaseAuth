<template>
  <div
    class="flex flex-col items-center justify-center gap-4 text-md font-medium w-[60%] mx-auto"
  >
    <h6>Username: {{ user?.user_metadata.username }}</h6>
    <h6>Full Name: {{ user?.user_metadata.full_name }}</h6>
    <h6>Email: {{ user?.email }}</h6>
    <p class="text-red-500">
      Last sign in:
      {{ new Date(user?.last_sign_in_at).toUTCString() }}
    </p>
    <h6 class="text-red-500 font-medium">{{ errorMsg }}</h6>
    <PrimaryButton @click="logOut"> Log Out </PrimaryButton>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const errorMsg = ref("");

const logOut = async () => {
  try {
    let { error } = await supabase.auth.signOut();
    if (error) throw error;
    navigateTo("/");
  } catch (error) {
    errorMsg.value = error.message;
  }
};
</script>
