<template>
  <div class="w-full md:w-1/2 flex flex-col gap-8 px-4 md:px-G">
    <!-- Header -->
    <div>
      <h1 class="text-3xl font-bold">MATTHEW SAMUEL</h1>
      <span>developer based in melbourne automating all the things</span>
      <div class="h-80 bg-primary mt-4"></div>
    </div>
    <!-- Sections -->
    <Section title="Projects" :items="projects" />
    <Section title="Contact" :items="contact" />
  </div>
</template>

<script setup lang="ts">
const projects: SectionItem[] = [
  {
    heading1: "2024",
    heading2: "showoff",
    url: "https://showoff.gg",
    description: "a web app",
    tags: ["vue"],
  },
  {
    heading1: "2022",
    heading2: "die-abolical",
    url: "https://itch.io/jam/gmtk-jam-2022/rate/1624361",
    description:
      "a puzzle game where the die with the highest face crushes the other made using pico-8 in under two days for the 2022 gmtk game jam.",
    tags: ["pico-8", "lua"],
  },
  {
    heading1: "2020",
    heading2: "adblockchain",
    url: "https://github.com/mjsamuel/adblockchain",
    description:
      "a proof of concept for an alterative payment model of the web.",
    tags: ["web3", "blockchain"],
  },
];

const contact: SectionItem[] = [
  {
    heading1: "github",
    heading2: "mjsamuel",
    url: "https://github.com/mjsamuel",
  },
  {
    heading1: "email",
    heading2: "hello@mjsamuel.com",
    url: "hello@mjsamuel.com",
  },
];
</script>
