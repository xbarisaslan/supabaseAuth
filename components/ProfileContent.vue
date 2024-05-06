<template>
  <div
    class="flex flex-col items-center justify-center text-md font-medium gap-1 w-[60%] mx-auto"
  >
    {{ user?.email }}
    <p class="text-red-500">
      Last sign in:
      {{ new Date(user?.last_sign_in_at).toUTCString() }}
    </p>
    <PrimaryButton @click="logOut"> Log Out </PrimaryButton>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const logOut = async () => {
  try {
    let { error } = await supabase.auth.signOut();
    if (error) throw error;
    console.log("You have successfully logged out!");
    navigateTo("/");
  } catch (error) {
    console.log("Couldn't log out");
  }
};
</script>
