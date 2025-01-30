// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: true,
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      //TODO: THIS ABSOLUTELY SHOULD NOT BE PUBLIC!!!!! YOU IDIOT!!!!
      rawgApiKey: process.env.NUXT_RAWG_API_KEY
    }
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