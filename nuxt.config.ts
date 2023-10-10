// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-directus",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
  ],
  directus: {
    url: "https://directus.nibiru.live",
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    strategy: "no_prefix",
    locales: [
      {
        code: "en-US",
        name: "English (US)",
      },
      {
        code: "zh-CN",
        name: "简体中文",
      },
      {
        code: "nbr-NBR",
        name: "Nibiru",
      },
    ],
  },
});
