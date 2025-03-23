<template>
  <section class="flex w-full flex-col gap-3">
    <h2 class="text-2xl font-bold">{{ title.toUpperCase() }}</h2>
    <div v-for="item in props.items" class="grid">
      <h4 class="text-secondary">{{ item.heading1 }}</h4>
      <div class="col-span-2">
        <h4>
          <a :href="item.url" target="_blank">{{ item.heading2 }} →</a>
        </h4>
        <!--
        <div class="flex gap-2">
          <span v-for="t in item.tags" class="rounded-full text-white bg-primary px-2">{{ t }}</span>
        </div>
        -->
        <p class="text-secondary">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { SectionItem } from "~/types/homepage";
const props = defineProps<{
  title: string;
  items: SectionItem[];
}>();
</script>
