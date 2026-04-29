<template>
  <div class="relative p-8 md:p-12 min-h-[500px] flex flex-col">
    <div class="absolute inset-0 bg-black/[0.12] blur-[40px] translate-y-4 scale-[0.92] -z-10 transition-all duration-1000 group-hover:bg-terra-orange/15 group-hover:translate-y-8 group-hover:blur-[60px] group-hover:scale-[0.95]"></div>
    <div class="absolute inset-0 handmade-paper deckled z-0 transition-colors duration-500 bg-paper-card group-hover:bg-paper-highlight"></div>
    
    <div class="relative z-10 flex flex-col flex-grow">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.deckled {
  filter: url(#deckled-edge);
  transform: scale(0.98);
}

.handmade-paper {
  box-shadow: inset 0 0 40px rgba(0,0,0,0.06);
  background-image: 
    url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E");
}
</style>
