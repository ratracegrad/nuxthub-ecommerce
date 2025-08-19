<script setup lang="ts">
const cards = ref([
  {
    title: 'Vintage Focus',
    description: 'A classic film camera with a textured body and polished metal lens, showcasing timeless craftsmanship.',
  },
  {
    title: 'Vintage Focus',
    description: 'A classic film camera with a textured body and polished metal lens, showcasing timeless craftsmanship.',
  },
  {
    title: 'Vintage Focus',
    description: 'A classic film camera with a textured body and polished metal lens, showcasing timeless craftsmanship.',
  },
  {
    title: 'Vintage Focus',
    description: 'A classic film camera with a textured body and polished metal lens, showcasing timeless craftsmanship.',
  },
  {
    title: 'Vintage Focus',
    description: 'A classic film camera with a textured body and polished metal lens, showcasing timeless craftsmanship.',
  },
  {
    title: 'Vintage Focus',
    description: 'A classic film camera with a textured body and polished metal lens, showcasing timeless craftsmanship.',
  },
  {
    title: 'Vintage Focus',
    description: 'A classic film camera with a textured body and polished metal lens, showcasing timeless craftsmanship.',
  },
  {
    title: 'Vintage Focus',
    description: 'A classic film camera with a textured body and polished metal lens, showcasing timeless craftsmanship.',
  },
  {
    title: 'Vintage Focus',
    description: 'A classic film camera with a textured body and polished metal lens, showcasing timeless craftsmanship.',
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
          <span class="font-light text-neutral-500 text-sm">$899.00</span>
        </template>

        <img src="/camera.jpg" alt="Demo Image" class="w-full rounded-lg" >
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>

