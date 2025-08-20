<script setup lang="ts">
const router = useRouter()

console.log(router)
const cards = ref([
  {
    title: 'Cream Blouse',
    description: 'A versatile cream blouse with a soft V-neckline and long sleeves, perfect for pairing with jeans or skirts for an effortless everyday look',
    price: '$120.00',
    image: '/womens/creamBlouse.png',
  },
  {
    title: 'Lavender Blouse',
    description: 'A light lavender button-down blouse with a tailored feminine fit',
    price: '$97.00',
    image: '/womens/lavenderBlouse.jpg',
  },
  {
    title: 'Black T-Shirt',
    description: 'A simple black short-sleeve T-shirt made from soft cotton fabric',
    price: '$48.00',
    image: '/womens/blackTshirt.jpg',
  },
  {
    title: 'White Long-Sleeve Top',
    description: 'A fitted white long-sleeve top with a round neckline for a clean look',
    price: '$62.00',
    image: '/womens/whiteTop.jpg',
  },
  {
    title: 'Beige Skirt',
    description: 'A high-waisted beige skirt with a flowing A-line silhouette',
    price: '$240.00',
    image: '/womens/beigeSkirt.png',
  },
  {
    title: 'Rust Blouse',
    description: 'A stylish rust-colored blouse with subtle pleat and tie detailing',
    price: '$65.00',
    image: '/womens/rustBlouse.png',
  },
])
</script>

<template>
  <UPageSection title="Women's Clothing" description="From timeless basics to modern favorites, explore clothing made to fit your lifestyle">
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
