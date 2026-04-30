// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Carolina Oliveira | Software Engineer',
      meta: [
        { name: 'description', content: 'Software Engineer bridging Frontend precision with AI Engineering. Focused on user experience and product value.' },
        { name: 'author', content: 'Carolina Ribeiro Oliveira' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Lina Oliveira Portfolio' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Caveat:wght@400;700&family=Outfit:wght@400;700;900&display=swap' }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
