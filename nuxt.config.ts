// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = 'https://linaoliveira.dev'

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'theme-fade', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Carolina Oliveira | Software Engineer',
      meta: [
        { name: 'description', content: 'Software Engineer bridging Frontend precision with AI Engineering. Focused on user experience and product value.' },
        { name: 'author', content: 'Carolina Ribeiro Oliveira' },
        { name: 'theme-color', content: '#EBE7DE' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Lina Oliveira Portfolio' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:image', content: `${siteUrl}/logo.png` },
        { property: 'og:image:width', content: '500' },
        { property: 'og:image:height', content: '500' },
        { property: 'og:image:alt', content: 'Lina Oliveira logo' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:image', content: `${siteUrl}/logo.png` }
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/favicon.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Caveat:wght@400;700&display=swap' }
      ]
    }
  },
  runtimeConfig: {
    public: { siteUrl }
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
