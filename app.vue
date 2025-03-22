<template>
  <main class="flex flex-col items-center py-8">
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
import type { SectionItem } from '~/types/homepage';
useHead({
  title: "Matthew Samuel",
  bodyAttrs: { class: "bg-background text-primary" },
});
</script>
