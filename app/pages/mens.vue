<script setup lang="ts">
const route = useRoute()
const category = computed(() => route.name)

const {data: products} = await useFetch(`/api/products/${category.value}`)
</script>

<template>
  <UPageSection title="Men's Clothing" description="From tailored shirts to casual wear, explore clothing designed for comfort and confidence">
    <UPageGrid>
      <UPageCard
        v-for="(product, index) in products"
        :key="index"
        v-bind="product"
        reverse
      >
        <template #footer>
          <span class="font-light text-neutral-500 text-sm">{{ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price/100) }}</span>
        </template>

        <NuxtImg
          :src="product.image"
          :alt="product.name"
          class="w-full rounded-lg"
        />
        <template #title>
          <div class="text-lg font-bold"  >{{ product.name }}</div>
          <div class="text-sm text-neutral-500">{{ product.shortDescription }}</div>
        </template>
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>
