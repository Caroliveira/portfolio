<script setup lang="ts">
import { ref, computed, watch, onUnmounted, nextTick } from 'vue'

const isOpen = ref(false)
const isHovered = ref(false)
const closeButtonRef = ref<HTMLButtonElement | null>(null)
const openButtonRef = ref<HTMLButtonElement | null>(null)

const layerClass = computed(() => {
  if (isOpen.value) return 'clip-path-open'
  return isHovered.value ? 'clip-path-closed-hover' : 'clip-path-closed'
})

watch(isOpen, async (newVal) => {
  if (typeof document !== 'undefined') {
    if (newVal) {
      document.body.style.overflow = 'hidden'
      await nextTick()
      closeButtonRef.value?.focus()
    } else {
      document.body.style.overflow = ''
      await nextTick()
      openButtonRef.value?.focus()
    }
  }
})

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <div class="relative">
    <!-- The Page Fold Trigger (Right Side) -->
    <PageCorner 
      v-show="!isOpen"
      ref="openButtonRef"
      text="Click to<br />peel me..."
      @click="isOpen = true"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      aria-label="Open About Me section"
      :aria-expanded="isOpen"
    />

    <!-- The Hidden Layer -->
    <div 
      class="absolute top-0 left-0 w-full h-screen bg-paper-highlight text-ink z-50 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] overflow-hidden"
      :class="layerClass"
      :aria-hidden="!isOpen"
    >
      <div class="absolute inset-0 bg-grain opacity-50 pointer-events-none mix-blend-overlay z-0"></div>
      
      <!-- Watercolor Wash (Full Canvas) -->
      <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div class="absolute top-[-20%] left-[-20%] w-[100vw] h-[100vw] bg-watercolor-ochre opacity-30 blur-[150px] ink-bleed will-change-transform"></div>
        <div class="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-terra-orange opacity-[0.15] blur-[150px] ink-bleed will-change-transform"></div>
        <div class="absolute top-[20%] right-[-20%] w-[80vw] h-[80vw] bg-moss-light opacity-20 blur-[150px] ink-bleed will-change-transform"></div>
      </div>
      
      <!-- Scrollable Viewport Wrapper -->
      <div class="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden flex flex-col px-6 md:px-24 pt-32 pb-24">
        
        <!-- The Page Fold Back Trigger (Left Side) -->
        <PageCorner 
          side="left"
          ref="closeButtonRef"
          text="Click to<br />fold back..."
          @click="isOpen = false"
          aria-label="Close About Me section"
        />


        <div class="max-w-5xl relative w-full m-auto transition-opacity duration-1000 ease-out z-10" :class="isOpen ? 'opacity-100 delay-300' : 'opacity-0'">
          
          <h2 class="text-5xl md:text-7xl font-handwriting tracking-tighter mb-12 relative z-10 text-moss-dark mix-blend-multiply">
            Nice to meet you.
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 relative z-10">
            
            <div class="relative">
              <div class="absolute -left-6 top-0 bottom-0 w-px bg-ink/10"></div>
              
              <h3 class="text-[10px] font-black uppercase tracking-[0.3em] text-ink/70 mb-6">The Journey</h3>
              <p class="font-serif text-xl md:text-2xl leading-relaxed text-ink/90 mb-10 mix-blend-multiply">
                I fell into the world of code almost by accident, but I have always been driven by the need to create. Whether it's painting, drawing, or software—for me, building things, physical or digital, is what makes sense.
              </p>

              <h3 class="text-[10px] font-black uppercase tracking-[0.3em] text-ink/70 mb-6">The Core</h3>
              <p class="font-serif text-lg leading-relaxed text-ink/90 mix-blend-multiply">
                In my work and my life, transparency is the foundation of everything. I am an entirely open person and I value absolute honesty, both from myself to others and vice versa. What you see is exactly what you get.
              </p>
            </div>
            
            <div class="relative flex flex-col justify-between">
              <div>
                <div class="absolute -left-6 top-0 bottom-0 w-px bg-ink/10 hidden md:block"></div>
                <h3 class="text-[10px] font-black uppercase tracking-[0.3em] text-ink/70 mb-6">The Stack</h3>
                <p class="font-handwriting text-3xl md:text-4xl text-ink leading-relaxed -rotate-1 mix-blend-multiply">
                  React, TypeScript, Python, Kotlin, and whatever the challenge requires.
                </p>
              </div>
              
              <div class="mt-12 md:mt-0">
                <h3 class="text-[10px] font-black uppercase tracking-[0.3em] text-ink/70 mb-6">Beyond the Screen</h3>
                <p class="font-serif text-lg leading-relaxed text-ink/90 mix-blend-multiply">
                  Away from the keyboard, I seek a simple and calm life. I share my days with my 5 pets, surrounding myself with nature and consuming art in all its forms, without exceptions.
                </p>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
.clip-path-closed {
  --fold-size: 4rem;
  clip-path: polygon(100% 0, 100% 0, 100% var(--fold-size), calc(100% - var(--fold-size)) 0);
  pointer-events: none;
}

@media (min-width: 768px) {
  .clip-path-closed {
    --fold-size: 6rem;
  }
}

.clip-path-closed-hover {
  --fold-size-hover: 5rem;
  clip-path: polygon(100% 0, 100% 0, 100% var(--fold-size-hover), calc(100% - var(--fold-size-hover)) 0);
  pointer-events: none;
}

@media (min-width: 768px) {
  .clip-path-closed-hover {
    --fold-size-hover: 8rem;
  }
}

.clip-path-open {
  clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0);
  pointer-events: auto;
}

.will-change-transform {
  will-change: transform, opacity;
}
</style>
