<script setup lang="ts">
defineProps<{
  side: 'left' | 'right'
}>()

const buttonRef = ref<HTMLButtonElement | null>(null)

defineExpose({
  focus: () => buttonRef.value?.focus(),
  button: buttonRef
})

defineEmits<{
  (e: 'click'): void
  (e: 'mouseenter'): void
  (e: 'mouseleave'): void
}>()
</script>

<template>
  <button 
    ref="buttonRef"
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
      <!-- The hole underneath (background reveal) -->
      <div 
        v-if="side === 'left'"
        class="absolute top-0 left-0 w-full h-full bg-paper-base z-0 pointer-events-none" 
        style="clip-path: polygon(0 0, 100% 0, 0 100%)"
      ></div>
      
      <!-- The folded flap -->
      <div 
        class="absolute top-0 w-full h-full z-10 transition-transform duration-500 group-hover:scale-105"
        :style="{
          filter: side === 'left' 
            ? 'drop-shadow(2px 2px 3px rgba(0,0,0,0.1)) drop-shadow(8px 8px 10px rgba(0,0,0,0.08))' 
            : 'drop-shadow(-2px 2px 3px rgba(0,0,0,0.1)) drop-shadow(-8px 8px 10px rgba(0,0,0,0.08))'
        }"
      >
        <div 
          class="w-full h-full border-ink/5 mix-blend-multiply"
          :class="side === 'left' ? 'left-0 border-r border-b' : 'right-0 border-l border-b'"
          :style="{
            clipPath: side === 'left' 
              ? 'polygon(100% 0, 100% 100%, 0 100%)' 
              : 'polygon(0 0, 0 100%, 100% 100%)',
            background: side === 'left'
              ? 'linear-gradient(135deg, #e5dec9 0%, #d8cdba 100%)'
              : 'linear-gradient(225deg, #e5dec9 0%, #d8cdba 100%)'
          }"
        ></div>
      </div>
    </div>
    
    <!-- Handwritten arrow and text -->
    <div 
      class="absolute top-8 md:top-24 pointer-events-none flex items-center gap-2 opacity-80"
      :class="side === 'left' ? 'left-20 rotate-12 flex-row-reverse' : 'right-20 -rotate-12'"
    >
      <span 
        class="font-handwriting text-xl md:text-2xl text-moss-dark whitespace-nowrap pt-2"
        :class="side === 'left' ? 'text-left' : 'text-right'"
      >
        <slot />
      </span>
      <span class="font-handwriting text-xl md:text-2xl text-terra-orange font-bold translate-y-1" aria-hidden="true">
        {{ side === 'left' ? '↖' : '↗' }}
      </span>
    </div>
  </button>
</template>
