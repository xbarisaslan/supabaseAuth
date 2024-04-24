export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase"],
  supabase: {
    redirect: false,
  },
});
