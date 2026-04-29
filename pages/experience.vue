<script setup lang="ts">
const { experience } = usePortfolio()
</script>

<template>
  <div class="min-h-screen bg-paper-base text-ink relative font-serif overflow-x-hidden bg-grain p-4 md:p-20">
    <VisualFilters />
    
    <!-- Back Navigation - Now Absolute (Scrolls away) -->
    <button 
      @click="navigateTo('/')" 
      class="absolute top-8 left-8 z-50 group flex items-center gap-2 font-handwriting text-2xl text-ink/40 hover:text-terra-orange transition-colors duration-300"
      aria-label="Back to Desk"
    >
      <span class="text-3xl group-hover:-translate-x-1 transition-transform duration-300" aria-hidden="true">&larr;</span>
      <span>Back to Desk</span>
    </button>

    <BackToTop />

    <div class="max-w-6xl mx-auto relative">
      <header class="mb-32 text-center relative z-20 pt-16 md:pt-0">
        <h1 class="text-6xl md:text-9xl font-black uppercase tracking-tighter mix-blend-multiply mb-4 animate-in fade-in slide-in-from-top-12 duration-1000">
          Trajec<span class="text-terra-orange">tory</span>
        </h1>
        <p class="font-handwriting text-2xl md:text-3xl text-ink/60 -rotate-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          A living record of professional growth
        </p>
      </header>

      <!-- The Red Thread (Connecting Path) -->
      <div class="absolute inset-0 pointer-events-none z-0 hidden lg:block overflow-visible">
        <svg class="w-full h-full opacity-20" preserveAspectRatio="none" viewBox="0 0 1000 4000">
          <path d="M500,100 C700,300 100,500 200,800 S900,1200 500,1600 S100,2000 400,2400 S800,2800 500,3200 S200,3600 500,4000" 
                fill="none" 
                class="stroke-terra-rust"
                stroke-width="3" 
                stroke-dasharray="10 10" 
                filter="url(#bleed)" />
        </svg>
      </div>

      <div class="relative z-10 space-y-24 md:space-y-48">
        <TrajectoryItem 
          v-for="(exp, index) in experience" 
          :key="exp.company"
          :exp="exp"
          :index="index"
        />
      </div>
      
      <footer class="mt-60 text-center pb-40">
        <div class="relative inline-block">
          <p class="font-handwriting text-4xl text-terra-rust opacity-80 rotate-2 animate-bounce">
            To be continued...
          </p>
          <div class="absolute -bottom-4 left-0 w-full h-1 bg-terra-rust/20 rotate-[-1deg] ink-bleed"></div>
        </div>
      </footer>
    </div>
  </div>
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

@keyframes slideInFromTop {
  from { transform: translateY(-3rem); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.fade-in { animation: fadeIn 1s ease-out; }
.slide-in-from-top-12 { animation: slideInFromTop 1.2s ease-out; }
.slide-in-from-bottom-8 { animation: slideInFromBottom 0.8s ease-out; }

.delay-300 { animation-delay: 300ms; }
</style>
