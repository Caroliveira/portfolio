<script setup lang="ts">
interface Props {
  bleedHeavyFrequency?: string
  bleedSoftFrequency?: string
  deckledFrequency?: string
}

const props = withDefaults(defineProps<Props>(), {
  bleedHeavyFrequency: '0.02',
  bleedSoftFrequency: '0.015',
  deckledFrequency: '0.04'
})
</script>

<template>
  <svg id="visual-filters-svg" xmlns="http://www.w3.org/2000/svg" width="0" height="0" class="absolute pointer-events-none opacity-0 overflow-hidden" aria-hidden="true">
    <defs>
      <filter id="bleed">
        <feTurbulence type="fractalNoise" :baseFrequency="props.bleedHeavyFrequency" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
      </filter>

      <filter id="bleed-text">
        <feTurbulence type="fractalNoise" :baseFrequency="props.bleedSoftFrequency" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
      </filter>

      <filter id="ink-spread">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
      </filter>

      <filter id="deckled-edge">
        <feTurbulence type="fractalNoise" :baseFrequency="props.deckledFrequency" numOctaves="4" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
  </svg>
</template>

<style>
.ink-bleed {
  filter: url(#bleed);
}

.ink-bleed-text {
  filter: url(#bleed-text);
}

.ink-spread {
  filter: url(#ink-spread);
}

.paper-edge {
  filter: url(#deckled-edge);
}
</style>
