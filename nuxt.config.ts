// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  css: ['~/assets/css/main.css'],


  devtools: { enabled: true },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui-pro'],

  nitro: {
    prerender: {
      routes: [
        '/'
      ]
    }
  },
})