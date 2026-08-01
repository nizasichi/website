// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    '@vueuse/nuxt'
  ],

  devtools: {
    enabled: true
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/cloudy_16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/cloudy_32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/cloudy_48x48.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/cloudy_180x180.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/cloudy_192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/cloudy_512x512.png' }
      ],
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          charset: 'utf-8'
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2026-06-30',
  vite: {
    optimizeDeps: {
      include: []
    }
  },
  debug: true,
  hooks: {
    'content:file:afterParse'(ctx) {
      const { file, content } = ctx
      const wordsPerMinute = 200
      const text = typeof file.body === 'string' ? file.body : ''
      const wordCount = text.split(/\s+/).length
      content.minRead = Math.ceil(wordCount / wordsPerMinute)
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
