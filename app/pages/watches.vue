<script setup lang="ts">
const cards = ref([
  {
    title: 'Classic Timepiece',
    description: 'A refined wristwatch featuring a classic analog face with clear numerals and slender hands, elegantly framed within a polished, minimalist case.',
  },
  {
    title: 'Classic Timepiece',
    description: 'A refined wristwatch featuring a classic analog face with clear numerals and slender hands, elegantly framed within a polished, minimalist case.',
  },
  {
    title: 'Classic Timepiece',
    description: 'A refined wristwatch featuring a classic analog face with clear numerals and slender hands, elegantly framed within a polished, minimalist case.',
  },
  {
    title: 'Classic Timepiece',
    description: 'A refined wristwatch featuring a classic analog face with clear numerals and slender hands, elegantly framed within a polished, minimalist case.',
  },
  {
    title: 'Classic Timepiece',
    description: 'A refined wristwatch featuring a classic analog face with clear numerals and slender hands, elegantly framed within a polished, minimalist case.',
  },
  {
    title: 'Classic Timepiece',
    description: 'A refined wristwatch featuring a classic analog face with clear numerals and slender hands, elegantly framed within a polished, minimalist case.',
  },
  {
    title: 'Classic Timepiece',
    description: 'A refined wristwatch featuring a classic analog face with clear numerals and slender hands, elegantly framed within a polished, minimalist case.',
  },
  {
    title: 'Classic Timepiece',
    description: 'A refined wristwatch featuring a classic analog face with clear numerals and slender hands, elegantly framed within a polished, minimalist case.',
  },
  {
    title: 'Classic Timepiece',
    description: 'A refined wristwatch featuring a classic analog face with clear numerals and slender hands, elegantly framed within a polished, minimalist case.',
  }
])
</script>

<template>
  <UPageSection title="Watches">
    <UPageGrid>
      <UPageCard
        v-for="(card, index) in cards"
        :key="index"
        v-bind="card"
        reverse
      >
        <template #footer>
          <span class="font-light text-neutral-500 text-sm">$1,500.00</span>
        </template>

        <img src="/watch.jpg" alt="Demo Image" class="w-full rounded-lg" >
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>

