<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-paper relative">
    <div class="fixed inset-0 paper-texture pointer-events-none"></div>
    
    <slot />

    <svg id="svg-filters" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="bleed">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="bleed-text">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="ink-spread">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<style>
.theme-nanquim {
  @apply text-ink;
}

.theme-aquarela {
  @apply text-ink;
}

.theme-atelie {
  @apply text-ink;
}
</style>
