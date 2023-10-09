// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-directus", "@vueuse/nuxt"],
  runtimeConfig: {
    directus: {
      url: "https://directus.nibiru.live",
    },
  },
});
