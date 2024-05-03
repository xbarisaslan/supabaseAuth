<template>
  <Card>
    <h1 class="text-center font-semibold text-3xl pb-5">Profile</h1>
    <div
      class="flex flex-col items-center justify-center text-md font-medium gap-1 w-[60%] mx-auto"
    >
      {{ user.email }}
      <p class="text-red-500">
        Last sign in:
        {{ new Date(user.last_sign_in_at).toUTCString() }}
      </p>
      <button
        type="submit"
        class="w-full mx-auto mt-4 text-center text-lg text-white font-semibold bg-[#8324de] rounded-2xl hover:opacity-80 transition ease-in py-0.5"
        @click="logOut"
      >
        Log Out
      </button>
    </div>
  </Card>
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
