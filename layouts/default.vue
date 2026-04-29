<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-paper relative">
    <div class="fixed inset-0 paper-texture pointer-events-none"></div>
    
    <VisualFilters />
    <slot />

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
