<script setup lang="ts">
defineProps<{
  side?: 'left' | 'right'
  text: string
}>()

defineEmits<{
  (e: 'click'): void
  (e: 'mouseenter'): void
  (e: 'mouseleave'): void
}>()

const isRight = (side: string | undefined) => side !== 'left'
</script>

<template>
  <button 
    type="button"
    @click="$emit('click')"
    @mouseenter="$emit('mouseenter')"
    @mouseleave="$emit('mouseleave')"
    class="absolute top-0 z-40 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss-dark/50"
    :class="side === 'left' ? 'left-0' : 'right-0'"
  >
    <div 
      class="w-16 h-16 md:w-24 md:h-24 transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-20 group-hover:h-20 md:group-hover:w-32 md:group-hover:h-32 relative z-20"
    >
      <!-- The hole underneath (only for left side/closing usually, but available for both) -->
      <div 
        v-if="side === 'left'"
        class="absolute top-0 left-0 w-full h-full bg-paper-base z-0 pointer-events-none" 
        style="clip-path: polygon(0 0, 100% 0, 0 100%)"
      ></div>
      
      <!-- The folded flap -->
      <div 
        class="absolute top-0 w-full h-full bg-[#d8cdba] shadow-lg z-10 border-ink/5 mix-blend-multiply"
        :class="side === 'left' ? 'left-0 border-r border-b' : 'right-0 border-l border-b'"
        :style="{
          clipPath: side === 'left' 
            ? 'polygon(100% 0, 100% 100%, 0 100%)' 
            : 'polygon(0 0, 0 100%, 100% 100%)',
          boxShadow: side === 'left'
            ? '8px 8px 16px rgba(0,0,0,0.15)'
            : '-8px 8px 16px rgba(0,0,0,0.15)'
        }"
      ></div>
    </div>
    
    <!-- Handwritten arrow and text -->
    <div 
      class="absolute top-8 md:top-24 pointer-events-none flex items-center gap-2 opacity-80"
      :class="side === 'left' ? 'left-20 rotate-12 flex-row-reverse' : 'right-20 -rotate-12'"
    >
      <span 
        class="font-handwriting text-xl md:text-2xl text-moss-dark whitespace-nowrap pt-2"
        :class="side === 'left' ? 'text-left' : 'text-right'"
        v-html="text"
      ></span>
      <span class="font-handwriting text-xl md:text-2xl text-terra-orange font-bold translate-y-1" aria-hidden="true">
        {{ side === 'left' ? '↖' : '↗' }}
      </span>
    </div>
  </button>
</template>
