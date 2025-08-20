<script setup lang="ts">
const cards = ref([
  {
    title: 'Industrial Accent Headphones',
    description: 'Over-ear headphones with brushed metal design and bold orange details',
    price: '$375.00',
    image: '/tech/industrialHeadphones.png',
  },
  {
    title: 'Silver Over-Ear Headphones',
    description: 'Over-ear headphones in silver with cushioned pads for comfort',
    price: '$325.00',
    image: '/tech/silverHeadphones.png',
  },
  {
    title: 'Brown Leather Strap Watch',
    description: 'A stainless steel wristwatch with a brown stitched leather strap',
    price: '$497.00',
    image: '/tech/brownWatch.png',
  },
  {
    title: 'Stainless Steel Chronograph Watch',
    description: 'A chronograph wristwatch with stainless steel bracelet and black dial.',
    price: '$750.00',
    image: '/tech/stainlessSteelWatch.png',
  },
  {
    title: 'Aluminum Laptop Stand',
    description: 'A minimalist silver aluminum laptop stand with a fixed angled design',
    price: '$99.00',
    image: '/tech/laptopStand.png',
  },
  {
    title: 'Adjustable Cellphone Stand',
    description: 'Modern aluminum cellphone stand with a hinge for adjustable positioning',
    price: '$37.00',
    image: '/tech/cellphoneStand.png',
  },
])
</script>

<template>
  <UPageSection title="Tech Gadgets" description="Innovative gadgets designed to keep you connected, productive, and inspired">
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

