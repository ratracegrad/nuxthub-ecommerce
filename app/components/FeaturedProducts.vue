<template>
  <UPageSection
    title="Featured Products"
    description="Explore our curated collection of luxury fashion. From classic pieces to modern trends, we have something for everyone."
    icon="i-heroicons-shield-check"
  >
    <UPageGrid>
      <UPageCard
        v-for="(product, index) in products"
        :key="index"
        v-bind="product"
        @click="handleClick(product.id)"
      >
        <NuxtImg
          :src="product.image"
          :alt="product.name"
          class="w-full rounded-lg"
        />
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>

<script setup lang="ts">
const { data: products } = await useFetch('/api/featured')

const handleClick = (id: number) => {
  navigateTo(`/details/${id}`)
}
</script>

<style scoped>

</style>
