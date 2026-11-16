<script setup lang="ts">
const { bio, projects, siteUrl, personId } = usePortfolio()

useSeoMeta({
  title: `Projects | ${bio.name}`,
  ogTitle: `Engineering Projects | ${bio.name}`,
  description: `Personal projects by ${bio.name}: Nudge, a mobile-first habit tracker, and Itinera, an AI-assisted trip planner built around real travel times.`,
  ogDescription: `Explore the workbench of ${bio.name}, featuring Frontend and AI Engineering projects.`,
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        url: `${siteUrl}/projects`,
        itemListElement: projects.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'SoftwareApplication',
            name: p.title,
            description: p.summary,
            alternateName: p.tagline,
            applicationCategory: p.category,
            operatingSystem: p.platforms,
            keywords: p.tech.join(', '),
            image: `${siteUrl}${p.logo}`,
            ...(p.links.demo !== '#' && { url: p.links.demo }),
            author: { '@id': personId }
          }
        }))
      })
    }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-paper-base text-ink relative font-serif overflow-x-hidden px-2 md:px-20 py-10 md:py-20">
    <!-- Back Navigation -->
    <NuxtLink 
      to="/" 
      class="absolute top-8 left-8 z-50 group flex items-center gap-2 font-handwriting text-2xl text-ink/40 hover:text-terra-orange transition-colors duration-300"
    >
      <span class="text-3xl group-hover:-translate-x-1 transition-transform duration-300" aria-hidden="true">&larr;</span>
      <span>Back to Desk</span>
    </NuxtLink>

    <BackToTop />

    <div class="max-w-7xl mx-auto relative">
      <header class="mb-16 md:mb-24 text-center relative z-20 pt-16 md:pt-0">
        <h1 class="text-5xl sm:text-6xl md:text-9xl font-black uppercase tracking-tighter mix-blend-multiply mb-4 animate-in fade-in slide-in-from-top-12">
          <span class="sr-only">Software Engineering Portfolio - </span>Work<span class="text-terra-orange">bench</span>
        </h1>
        <p class="font-handwriting text-2xl md:text-4xl text-ink/60 -rotate-1 animate-in fade-in slide-in-from-bottom-8 delay-300">
          Personal projects, built for my own everyday life
        </p>
      </header>

      <div class="relative z-10 space-y-16 md:space-y-48 pb-40">
        <ProjectItem 
          v-for="(project, index) in projects" 
          :key="project.id"
          :project="project"
          :index="index"
        />
      </div>

      <footer class="text-center pb-40 opacity-40">
        <p class="font-handwriting text-2xl italic">
          Everything here is a product of necessity and craft.
        </p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.delay-300 { animation-delay: 300ms; }
</style>
