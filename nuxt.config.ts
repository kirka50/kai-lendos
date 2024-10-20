// https://nuxt.com/docs/api/configuration/nuxt-config

import customConfig from "./custom-config";

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    baseURL: process.env.NUXT_PUBLIC_BASE_URL || '/',
    buildAssetsDir: 'assets',
  },
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@pinia/nuxt',
    "@nuxt/icon",
    'nuxt-viewport',
    '@nuxtjs/google-fonts'
  ],
  viewport: {
    breakpoints: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },

    defaultBreakpoints: {
      desktop: 'lg',
      mobile: 'xs',
      tablet: 'md',
    },

    fallbackBreakpoint: 'lg'
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: 'Ui',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  colorMode: {
    classSuffix: '',
  }
})