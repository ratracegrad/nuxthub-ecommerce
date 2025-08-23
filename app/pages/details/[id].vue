<template>
  <UContainer>
    <UPageColumns v-if="product" class="lg:columns-2 py-10">
      <div>
        <NuxtImg
          :src="product.image"
          :alt="product.name"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="flex flex-col gap-4">
        <h1 class="text-2xl font-bold">
          {{ product.name }}
        </h1>
        <p v-if="product.price" class="text-xl font-semibold">
          {{ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price / 100) }}
        </p>
        <USeparator />
        <p class="text-sm font-semibold mt-2">
          COLOR
        </p>
        <div class="flex gap-2">
          <UButton
            v-for="color in product.color"
            :key="color"
            color="neutral"
            variant="outline"
            :label="color"
          />
        </div>
        <p class="text-sm font-semibold mt-2">
          SIZE
        </p>
        <div class="flex gap-2">
          <UButton
            v-for="size in product.size"
            :key="size"
            color="neutral"
            variant="outline"
            :label="size"
          />
        </div>
        <p class="text-sm font-semibold mt-2">
          QUANTITY
        </p>
        <UButtonGroup>
          <UButton
            color="neutral"
            variant="outline"
            icon="i-heroicons-minus"
            @click="updateQuantity(-1, product.quantity ?? 1)"
          />
          <UButton color="neutral" variant="outline" disabled>
            {{ quantity }}
          </UButton>
          <UButton
            color="neutral"
            variant="outline"
            icon="i-heroicons-plus"
            @click="updateQuantity(1, product.quantity ?? 1)"
          />
        </UButtonGroup>

        <p>{{ product.longDescription }}</p>

        <UButton
          color="neutral"
          label="Add to Cart"
          size="xl"
          block
        />
      </div>
    </UPageColumns>
  </UContainer>
</template>

<script setup lang="ts">
const route = useRoute()
const id = Number(route.params.id)

const { data: product } = await useFetch(`/api/details/${id}`)

const quantity = ref(1)

const updateQuantity = (value: number, maxQuantity: number) => {
  const newQuantity = quantity.value + value
  quantity.value = newQuantity < 1 ? 1 : newQuantity > maxQuantity ? maxQuantity : newQuantity
}
</script>

<style scoped>

</style>
