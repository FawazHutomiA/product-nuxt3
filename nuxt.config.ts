// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/styles/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },
  modules: [
    // ...
    "@pinia/nuxt",
    "nuxt-swiper",
  ],
  app: {
    head: {
      title: 'Evermos Product',
      meta: [
        { name: 'evermos', content: 'product terbaik evermos' }
      ],
    },
  },
});
