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
        { property: 'og:image', content: `${siteUrl}/og-image.jpg` },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Carolina Ribeiro Oliveira, Software Engineer, Frontend & AI' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: `${siteUrl}/og-image.jpg` }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
      ]
    }
  },
  fonts: {
    defaults: {
      styles: ['normal'],
      subsets: ['latin', 'latin-ext']
    },
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 700, 900] },
      { name: 'Playfair Display', provider: 'google', weights: [400, 700, 900] },
      { name: 'Caveat', provider: 'google', weights: [400, 700] }
    ]
  },
  nitro: {
    prerender: {
      // Emit /projects.html instead of /projects/index.html so the host serves
      // /projects directly, matching the canonical URLs (no trailing-slash redirect).
      autoSubfolderIndex: false,
      routes: ['/sitemap.xml']
    }
  },
  runtimeConfig: {
    public: { siteUrl }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
