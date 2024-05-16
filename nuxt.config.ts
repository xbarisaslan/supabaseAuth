export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase"],
  supabase: {
    redirect: false,
  },
});
