<script setup lang="ts">
interface Project {
  id: string
  title: string
  logo: string
  tagline: string
  description: string
  tech: string[]
  metrics: {
    label: string
    value: string
  }
  features: string[]
  links: {
    demo: string
    github: string
  }
  status?: string
}

const props = defineProps<{
  project: Project
  index: number
}>()
</script>

<template>
  <div 
    class="relative w-full group animate-in fade-in slide-in-from-bottom-12"
    :style="{ transitionDelay: `${index * 150}ms` }"
  >
    <PaperCard 
      class="relative transition-all duration-700 overflow-hidden p-0 min-h-[500px]"
      :class="index % 2 === 0 ? 'rotate-[-0.5deg] hover:rotate-[0.2deg]' : 'rotate-[0.5deg] hover:rotate-[-0.2deg]'"
    >
      <!-- Postcard Layout Container -->
      <div class="flex flex-col md:flex-row h-full min-h-[500px]">
        
        <!-- Left Side: The "Message" -->
        <div class="w-full md:w-3/5 p-6 md:p-14 md:pr-20 flex flex-col relative">
          <header class="mb-8 md:mb-10">
            <h3 class="text-5xl md:text-7xl font-black uppercase tracking-tighter text-ink mb-2 mix-blend-multiply group-hover:text-terra-orange transition-colors duration-500 leading-none">
              {{ project.title }}
            </h3>
            <p class="font-handwriting text-xl md:text-3xl text-ink/40 italic">
              {{ project.tagline }}
            </p>
          </header>

          <div class="space-y-8 md:space-y-12 flex-grow">
            <div class="relative">
              <p class="font-handwriting text-xl md:text-2xl text-ink/80 leading-relaxed max-w-xl">
                "{{ project.description }}"
              </p>
            </div>

            <!-- Links as "Signed" area -->
            <div class="pt-6 md:pt-8 mt-auto flex flex-wrap gap-8 items-center relative z-10">
              <div v-if="project.links.demo !== '#'" class="flex flex-col gap-2">
                <a 
                  :href="project.links.demo" 
                  target="_blank"
                  class="group/link flex items-center gap-3 font-black uppercase tracking-[0.2em] text-xs md:text-sm hover:text-terra-orange transition-colors"
                >
                  <span class="w-10 h-[1px] bg-ink/30 group-hover/link:bg-terra-orange transition-colors"></span>
                  Launch Platform
                </a>
                <span v-if="project.status" class="font-handwriting text-lg md:text-xl text-terra-rust opacity-70 ml-12">
                  ({{ project.status }})
                </span>
              </div>
              
              <a 
                v-if="project.links.github !== '#'" 
                :href="project.links.github" 
                target="_blank"
                class="group/link flex items-center gap-3 font-black uppercase tracking-[0.2em] text-xs md:text-sm hover:text-terra-orange transition-colors"
              >
                <span class="w-10 h-[1px] bg-ink/30 group-hover/link:bg-terra-orange transition-colors"></span>
                Technical Details
              </a>
            </div>
          </div>

          <!-- Subtle Postmark decoration -->
          <div class="absolute bottom-12 left-12 w-24 h-24 border-2 border-ink/5 rounded-full flex items-center justify-center -rotate-12 pointer-events-none opacity-40">
             <div class="text-[8px] font-black uppercase tracking-tighter text-ink/20 text-center">
               ORIGINAL CRAFT<br/>LINA © 2025
             </div>
          </div>

          <!-- Ink Stain -->
          <div class="absolute top-1/3 right-10 w-24 h-24 bg-watercolor-rose/5 rounded-full blur-2xl pointer-events-none"></div>

          <!-- Vertical Divider (Postcard Style) -->
          <div class="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[70%] w-[1px] bg-ink/10 border-r border-dashed border-ink/20"></div>
        </div>

        <!-- Right Side: The "Address" -->
        <div class="w-full md:w-2/5 p-6 md:p-14 flex flex-col relative bg-ink/[0.01]">
          
          <!-- STAMP: The Project Logo -->
          <div class="hidden md:flex absolute top-8 right-8 w-24 h-24 md:w-28 md:h-28 bg-white p-3 shadow-md rotate-[3deg] group-hover:rotate-[-2deg] transition-transform duration-700 z-20 items-center justify-center stamp-edge">
             <img :src="project.logo" :alt="project.title" class="w-full h-full object-contain mix-blend-multiply" />
             
             <!-- Cancellation Mark (Postmark) -->
             <div class="absolute -top-4 -left-4 w-16 h-16 pointer-events-none opacity-20">
                <svg viewBox="0 0 100 100" class="w-full h-full text-ink">
                  <path d="M10,50 Q30,10 50,50 T90,50" fill="none" stroke="currentColor" stroke-width="2" />
                  <path d="M10,60 Q30,20 50,60 T90,60" fill="none" stroke="currentColor" stroke-width="2" />
                  <path d="M10,40 Q30,0 50,40 T90,40" fill="none" stroke="currentColor" stroke-width="2" />
                </svg>
             </div>
          </div>

          <!-- Address Lines (Tech & Features) -->
          <div class="mt-12 md:mt-32 space-y-12">
            <div>
              <h4 class="text-xs font-black uppercase tracking-[0.4em] text-ink/30 mb-6 border-b border-ink/10 pb-2">Technical Core</h4>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in project.tech" :key="tag" class="text-xs font-black uppercase tracking-widest border border-ink/10 px-2 py-0.5 bg-white/50">
                  {{ tag }}
                </span>
              </div>
            </div>

            <div>
              <h4 class="text-xs font-black uppercase tracking-[0.4em] text-ink/30 mb-6 border-b border-ink/10 pb-2">Capabilities</h4>
              <ul class="space-y-3">
                <li v-for="feature in project.features" :key="feature" class="text-sm font-medium text-ink/70 flex items-start gap-3">
                  <span class="w-1.5 h-1.5 rounded-full bg-terra-orange/30 mt-1 flex-shrink-0"></span>
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Watercolor stain -->
      <div 
        class="absolute -top-20 -left-20 w-64 h-64 bg-watercolor-rose/5 group-hover:bg-watercolor-rose/15 rounded-full blur-[100px] pointer-events-none -z-10 transition-all duration-1000"
      ></div>
    </PaperCard>
  </div>
</template>

<style scoped>
.ink-bleed {
  filter: url(#bleed);
}
</style>
