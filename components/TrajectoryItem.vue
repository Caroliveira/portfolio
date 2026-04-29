<script setup lang="ts">
interface Experience {
  year: string
  role: string
  company: string
  description: string
  highlights: string[]
}

defineProps<{
  exp: Experience
  index: number
}>()
</script>

<template>
  <section 
    class="relative flex flex-col md:flex-row" 
    :class="index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'"
  >
    <div 
      class="w-full md:w-3/4 lg:w-[55%] relative group animate-in fade-in slide-in-from-bottom-12 duration-1000"
      :style="{ transitionDelay: `${index * 200}ms` }"
    >
      <!-- Year Badge -->
      <div class="absolute -top-8 -left-2 md:-left-8 z-20 bg-watercolor-ochre/30 px-6 py-2 font-handwriting text-2xl border border-ink/5 rotate-[-8deg] group-hover:rotate-2 transition-transform shadow-sm ink-bleed">
        {{ exp.year }}
      </div>

      <PaperCard 
        class="relative transition-all duration-700"
        :class="index % 2 === 0 ? 'rotate-[0.5deg] hover:rotate-[-0.5deg]' : '-rotate-[0.5deg] hover:rotate-[0.5deg]'"
      >
        <header class="mb-8 flex justify-between items-start">
          <h2 class="text-xs font-black uppercase tracking-[0.4em] opacity-40 mix-blend-multiply">{{ exp.company }}</h2>
          <div class="w-8 h-8 opacity-10 rotate-12 group-hover:rotate-45 transition-transform duration-700" aria-hidden="true">
             <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19,3H5C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3M19,19H5V5H19V19Z"/></svg>
          </div>
        </header>
        
        <h3 class="text-3xl md:text-5xl font-black uppercase tracking-tight text-moss-dark mb-6 mix-blend-multiply leading-none">
          {{ exp.role }}
        </h3>
        
        <p class="text-xl font-medium opacity-90 text-ink mb-6 leading-relaxed border-l-4 border-terra-orange/20 pl-8">
          {{ exp.description }}
        </p>

        <div v-if="exp.highlights && exp.highlights.length > 0" class="space-y-6">
          <div v-for="highlight in exp.highlights" :key="highlight" 
               class="flex gap-4 items-start group/item">
            <span class="text-terra-orange font-bold text-xl leading-none transition-transform group-hover/item:scale-125 duration-300" aria-hidden="true">~</span>
            <p class="text-sm md:text-base font-medium text-ink/75 leading-snug">{{ highlight }}</p>
          </div>
        </div>

        <!-- Decorative Tape (Digital Washi Tape) -->
        <div class="absolute -top-4 right-1/4 w-16 h-8 bg-paper-highlight/40 backdrop-blur-[2px] -rotate-12 border border-white/30 shadow-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <!-- Watercolor stain -->
        <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-watercolor-ochre/10 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-terra-orange/20 transition-colors duration-1000"></div>
      </PaperCard>
    </div>
  </section>
</template>

<style scoped>
.animate-in {
  animation-fill-mode: both;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInFromBottom {
  from { transform: translateY(3rem); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.fade-in { animation: fadeIn 1s ease-out; }
.slide-in-from-bottom-12 { animation: slideInFromBottom 1.2s ease-out; }
</style>
