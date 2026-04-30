<script setup lang="ts">
const { bio, projects } = usePortfolio()

useSeoMeta({
  title: `Projects | ${bio.name}`,
  ogTitle: `Engineering Projects | ${bio.name}`,
  description: 'A curated showcase of engineering precision, from instant payment systems to AI-powered micro-services.',
  ogDescription: 'Explore the workbench of Carolina Oliveira, featuring Frontend and AI Engineering projects.',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: projects.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'CreativeWork',
            name: p.title,
            description: p.summary,
            alternateName: p.tagline,
            keywords: p.tech.join(', ')
          }
        }))
      })
    }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-paper-base text-ink relative font-serif overflow-x-hidden bg-grain px-2 md:px-20 py-10 md:py-20">
    <VisualFilters />
    
    <!-- Back Navigation -->
    <button 
      @click="navigateTo('/')" 
      class="absolute top-8 left-8 z-50 group flex items-center gap-2 font-handwriting text-2xl text-ink/40 hover:text-terra-orange transition-colors duration-300"
      aria-label="Back to Desk"
    >
      <span class="text-3xl group-hover:-translate-x-1 transition-transform duration-300" aria-hidden="true">&larr;</span>
      <span>Back to Desk</span>
    </button>

    <BackToTop />

    <div class="max-w-7xl mx-auto relative">
      <header class="mb-32 text-center relative z-20 pt-16 md:pt-0">
        <h1 class="text-6xl md:text-9xl font-black uppercase tracking-tighter mix-blend-multiply mb-4 animate-in fade-in slide-in-from-top-12">
          <span class="sr-only">Software Engineering Portfolio - </span>Work<span class="text-terra-orange">bench</span>
        </h1>
        <p class="font-handwriting text-2xl md:text-4xl text-ink/60 -rotate-1 animate-in fade-in slide-in-from-bottom-8 delay-300">
          Where engineering precision meets the soul of personal creation
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
