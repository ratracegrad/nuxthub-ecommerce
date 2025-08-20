<script setup lang="ts">
const cards = ref([
  {
    title: 'Olive Jacket',
    description: 'A casual olive over shirt jacket with button front and chest pockets',
    price: '$300.00',
    image: '/mens/oliveJacket.png',
  },
  {
    title: 'Denim-Style Blue Shirt',
    description: 'A blue long-sleeve shirt with a denim-inspired texture and finish',
    price: '$97.00',
    image: '/mens/blueDenimShirt.png',
  },
  {
    title: 'Light Blue Pinstriped Shirt',
    description: 'A professional button-down shirt in light blue with thin white pinstripes',
    price: '$150.00',
    image: '/mens/bluePinstripe.png',
  },
  {
    title: 'Brown Cargo Shorts',
    description: 'Comfortable brown cargo shorts with multiple utility pockets',
    price: '$50.00',
    image: '/mens/brownCargoShorts.png',
  },
  {
    title: 'Classic Blue Jeans',
    description: 'Straight-leg blue jeans with a traditional five-pocket design',
    price: '$298.00',
    image: '/mens/bluejeans.png',
  },
])
</script>

<template>
  <UPageSection title="Men's Clothing" description="From tailored shirts to casual wear, explore clothing designed for comfort and confidence">
    <UPageGrid>
      <UPageCard
        v-for="(card, index) in cards"
        :key="index"
        v-bind="card"
        reverse
      >
        <template #footer>
          <span class="font-light text-neutral-500 text-sm">{{ card.price }}</span>
        </template>

        <NuxtImg
          :src="card.image"
          :alt="card.title"
          class="w-full rounded-lg"
        />
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>

