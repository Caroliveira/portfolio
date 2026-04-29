<script setup lang="ts">
const showBackToTop = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Transition name="ink-drop">
    <button 
      v-if="showBackToTop"
      @click="scrollToTop" 
      class="fixed bottom-12 right-12 z-50 group flex flex-col items-center gap-1"
      aria-label="Back to Top"
    >
      <div class="relative w-14 h-14 md:w-20 md:h-20 flex items-center justify-center">
        <!-- Main Ink Stain (Irregular organic shape) -->
        <div class="absolute inset-0 bg-ink opacity-90 rounded-[45%_55%_65%_35%/55%_45%_55%_45%] rotate-12 transition-all duration-700 group-hover:scale-110 group-hover:rotate-45 group-hover:rounded-[35%_65%_45%_55%/65%_35%_55%_45%] ink-spread shadow-lg"></div>
        
        <!-- Splatter drops -->
        <div class="absolute -top-1 -left-1 md:-top-2 md:-left-2 w-3 h-3 md:w-4 md:h-4 bg-ink opacity-40 rounded-full ink-bleed scale-75 group-hover:scale-100 transition-transform duration-1000 delay-100"></div>
        <div class="absolute -bottom-1 right-1 md:right-2 w-2 h-2 md:w-3 md:h-3 bg-ink opacity-60 rounded-full ink-bleed scale-50 group-hover:scale-125 transition-transform duration-700 delay-200"></div>
        
        <!-- Hand-drawn Arrow -->
        <svg viewBox="0 0 100 100" class="relative z-10 w-7 h-7 md:w-10 md:h-10 text-paper-base transition-transform duration-500 group-hover:-translate-y-1">
          <path 
            d="M50,80 L50,20 M30,40 L50,20 L70,40" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="12" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            class="ink-bleed-text"
          />
        </svg>
      </div>
      <p class="hidden md:block font-handwriting text-xl text-ink/30 group-hover:text-terra-orange group-hover:opacity-100 transition-all duration-300 -rotate-3 group-hover:rotate-0">
        to top
      </p>
    </button>
  </Transition>
</template>

<style scoped>
.ink-drop-enter-active,
.ink-drop-leave-active {
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.ink-drop-enter-from,
.ink-drop-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.5) rotate(15deg);
}
</style>
