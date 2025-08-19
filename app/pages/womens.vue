<script setup lang="ts">
const cards = ref([
  {
    title: 'Timeless Pumps',
    description: 'A pair of elegant white mid-heel pumps',
  },
  {
    title: 'Timeless Pumps',
    description: 'A pair of elegant white mid-heel pumps',
  },
  {
    title: 'Timeless Pumps',
    description: 'A pair of elegant white mid-heel pumps',
  },
  {
    title: 'Timeless Pumps',
    description: 'A pair of elegant white mid-heel pumps',
  },
  {
    title: 'Timeless Pumps',
    description: 'A pair of elegant white mid-heel pumps',
  },
  {
    title: 'Timeless Pumps',
    description: 'A pair of elegant white mid-heel pumps',
  },
  {
    title: 'Timeless Pumps',
    description: 'A pair of elegant white mid-heel pumps',
  },
  {
    title: 'Timeless Pumps',
    description: 'A pair of elegant white mid-heel pumps',
  },
  {
    title: 'Timeless Pumps',
    description: 'A pair of elegant white mid-heel pumps',
  }
])
</script>

<template>
  <UPageSection title="Women's Clothing">
    <UPageGrid>
      <UPageCard
        v-for="(card, index) in cards"
        :key="index"
        v-bind="card"
        reverse
      >
        <template #footer>
          <span class="font-light text-neutral-500 text-sm">$250.00</span>
        </template>

        <img
          src="/pumps.jpg"
          alt="Demo Image"
          class="w-full rounded-lg"
        >
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>

