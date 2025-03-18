// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-03-01',
  ssr: true,
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      rawgApiBaseURL: process.env.NUXT_RAWG_BASE_URL
    },
    rawgApiKey: process.env.NUXT_RAWG_API_KEY
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt'
  ],
  icon: {
    size: '1.5rem',
    clientBundle: {
      scan: true,
      sizeLimitKb: 256
    },
    customCollections: [{
      prefix: 'icons',
      dir: './assets/icons'
    }]
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})