<template>
  <main class="flex flex-col items-center pt-8">
    <div class="w-1/2 flex flex-col gap-8">
      <!-- Header -->
      <div class="flex gap-4">
        <div class="aspect-square h-80 bg-primary"></div>
        <div class="flex flex-col">
          <h1 class="text-3xl text-right font-bold grow">
            MATTHEW <br />
            SAMUEL
          </h1>
          <h2>developer based in melbourne automating all the things</h2>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: "Matthew Samuel",
  bodyAttrs: { class: "bg-background text-primary" },
});
</script>
