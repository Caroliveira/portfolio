// Prerendered at build time (see nitro.prerender.routes), so <lastmod> is the deploy date.
const pages = [
  { path: '/', priority: '1.0' },
  { path: '/projects', priority: '0.8' },
  { path: '/experience', priority: '0.8' }
]

export default defineEventHandler((event) => {
  const { public: { siteUrl } } = useRuntimeConfig(event)
  const lastmod = new Date().toISOString().slice(0, 10)

  const urls = pages.map(({ path, priority }) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
})
