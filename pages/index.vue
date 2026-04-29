<script setup lang="ts">
const { bio, projects, experience } = usePortfolio()

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/Caroliveira', target: '_blank', classes: 'rotate-[-3deg] hover:rotate-[2deg] hover:text-terra-orange hover:border-terra-orange/30' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/carolina-ribeiro-oliveira', target: '_blank', classes: 'rotate-[2deg] hover:rotate-[-2deg] hover:text-watercolor-ochre hover:border-watercolor-ochre/50' },
  { name: 'Email', url: 'mailto:linaribeirooliveira@gmail.com', target: '_self', classes: 'rotate-[-1deg] hover:rotate-[3deg] hover:text-terra-rust hover:border-terra-rust/30' }
]
</script>

<template>
  <div class="aquarela-vibrant min-h-screen bg-paper-base text-ink relative font-serif overflow-hidden bg-grain">
    
    <AboutHiddenLayer />

    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="absolute top-[-10%] right-[10%] w-[60vw] h-[60vw] bg-terra-orange opacity-20 blur-[120px] ink-bleed"></div>
      <div class="absolute bottom-[-5%] left-[-5%] w-[70vw] h-[50vw] bg-terra-rust opacity-[0.15] blur-[150px] ink-bleed"></div>
      <div class="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] bg-watercolor-ochre opacity-20 blur-[100px] ink-bleed"></div>
      
      <svg class="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
        <path d="M-100,200 Q300,50 600,250 T1200,150" fill="none" stroke="#D2691E" stroke-width="120" filter="url(#bleed)" stroke-linecap="round" />
        <path d="M1200,800 Q800,950 400,750 T-100,850" fill="none" stroke="#E3B448" stroke-width="150" filter="url(#bleed)" stroke-linecap="round" />
      </svg>
    </div>

    <div class="max-w-5xl mx-auto relative z-10 px-6 py-20">
      <header class="mb-24 flex flex-col items-start border-b border-ink/10 pb-12">
        <div class="inline-block p-2 px-4 bg-terra-orange text-white font-black text-sm tracking-widest uppercase mb-6 rotate-[-2deg] shadow-lg ink-bleed-text">
          LINA.ENGINEER
        </div>
        <h1 class="text-5xl md:text-8xl font-black leading-none tracking-tighter uppercase mb-6 mix-blend-multiply">
          Craft<br/>
          <span class="text-terra-orange">&</span> Code
        </h1>
        <p class="text-xl md:text-2xl font-handwriting max-w-2xl leading-snug text-ink/70 -rotate-1 mb-8">
          {{ bio.philosophy }}
        </p>

          <div class="flex flex-wrap items-center gap-4 mt-8 relative">
            <span class="font-handwriting text-2xl text-terra-orange/80 -rotate-3 mr-2">Say hello! &rarr;</span>
            
            <a v-for="link in socialLinks" :key="link.name" 
               :href="link.url" :target="link.target" 
               :rel="link.target === '_blank' ? 'noopener noreferrer' : undefined"
               class="inline-block px-4 py-2 bg-paper-highlight border border-ink/10 shadow-sm text-[10px] font-black uppercase tracking-[0.2em] text-moss-dark hover:-translate-y-1 hover:shadow-md transition-all duration-300 mix-blend-multiply ink-bleed-text"
               :class="link.classes">
              {{ link.name }}
            </a>
          </div>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <NuxtLink to="/projects" class="block relative group transition-all duration-500 hover:-translate-y-2 hover:rotate-[1deg] cursor-pointer">
          <PaperCard>
            <h2 class="text-sm font-black uppercase tracking-[0.3em] mb-12 opacity-40 mix-blend-multiply">Featured Projects</h2>
            <div class="space-y-8 mb-12">
              <div v-for="project in projects?.slice(0, 3)" :key="project.id" class="border-b border-ink/10 pb-6 mix-blend-multiply">
                <h3 class="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-moss-dark">{{ project.title }}</h3>
                <p class="text-base font-medium opacity-80 mt-2 text-ink-light">{{ project.description }}</p>
              </div>
              <p class="text-sm font-handwriting text-moss-light pt-2 mix-blend-multiply font-bold">...and more in the archive</p>
            </div>
            
            <span class="text-xs uppercase font-black tracking-[0.3em] text-moss-light group-hover:underline underline-offset-8 decoration-wavy mix-blend-multiply mt-auto">Explore Work &rarr;</span>
          </PaperCard>
        </NuxtLink>

        <NuxtLink to="/experience" class="block relative group transition-all duration-500 hover:-translate-y-2 hover:-rotate-[1deg] cursor-pointer mt-12 lg:mt-0">
          <PaperCard>
            <h2 class="text-sm font-black uppercase tracking-[0.3em] mb-12 opacity-40 mix-blend-multiply">Trajectory</h2>
            <div class="space-y-8 mb-12">
              <div v-for="exp in experience?.slice(0, 3)" :key="exp.year" class="border-b border-ink/10 pb-6 mix-blend-multiply">
                <span class="text-sm font-handwriting text-moss-light block mb-1 font-bold">{{ exp.year }}</span>
                <h3 class="text-xl font-black uppercase text-moss-dark">{{ exp.role }}</h3>
                <p class="text-[10px] uppercase tracking-widest text-ink-light opacity-80">{{ exp.company }}</p>
              </div>
              <p class="text-sm font-handwriting text-moss-light pt-2 mix-blend-multiply font-bold">...see complete timeline</p>
            </div>
            
            <span class="text-xs uppercase font-black tracking-[0.3em] text-moss-light group-hover:underline underline-offset-8 decoration-wavy mix-blend-multiply mt-auto">Unfold Timeline &rarr;</span>
          </PaperCard>
        </NuxtLink>

      </div>
    </div>
  </div>
</template>

<style scoped>
.aquarela-vibrant {
  scroll-behavior: smooth;
}
</style>
