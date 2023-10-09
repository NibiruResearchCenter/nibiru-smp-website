// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-directus", "@vueuse/nuxt", "@nuxtjs/tailwindcss"],
  directus: {
    url: "https://directus.nibiru.live",
  },
});
