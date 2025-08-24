<script setup lang="ts">
const route = useRoute()
const category = route.name as string

const { data: products } = await useFetch(`/api/products/${category}`)

const handleClick = (id: number) => {
  navigateTo(`/details/${id}`)
}
</script>

<template>
  <UPageSection title="Tech Gadgets" description="Innovative gadgets designed to keep you connected, productive, and inspired">
    <UPageGrid>
      <UPageCard
        v-for="(product, index) in products"
        :key="index"
        v-bind="product"
        spotlight
        spotlight-color="primary"
        reverse
        @click="handleClick(product.id)"
      >
        <NuxtImg
          :src="product.image"
          :alt="product.name"
          class="w-full rounded-lg"
        />
        <template #title>
          <div class="text-lg font-bold text-primary">
            {{ product.name }}
          </div>
          <div class="text-sm text-neutral-500">
            {{ product.shortDescription }}
          </div>
        </template>

        <template #footer>
          <span class="font-semibold text-primary text-sm">{{ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price/100) }}</span>
        </template>
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>
