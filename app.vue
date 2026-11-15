<script setup lang="ts">
const route = useRoute()
const { public: { siteUrl } } = useRuntimeConfig()
const canonicalUrl = computed(() => `${siteUrl}${route.path === '/' ? '/' : route.path.replace(/\/$/, '')}`)

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }]
})
useSeoMeta({
  ogUrl: canonicalUrl
})
</script>

<template>
  <NuxtLayout>
    <main class="relative">
      <NuxtPage />
    </main>
  </NuxtLayout>
</template>

<style>
@media (prefers-reduced-motion: no-preference) {
  .theme-fade-enter-active,
  .theme-fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .theme-fade-enter-from {
    opacity: 0;
    transform: translateY(10px);
  }

  .theme-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .theme-fade-enter-active,
  .theme-fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .theme-fade-enter-from,
  .theme-fade-leave-to {
    opacity: 0;
  }
}

body {
  margin: 0;
  overflow-x: hidden;
}
</style>
