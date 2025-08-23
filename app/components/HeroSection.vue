<template>
  <UPageHero
    description="Discover curated luxury fashion that transcends trends. Where avant-garde meets accessibility, and every piece tells a story of sophistication and style."
    :links="links"
  >
    <template #title>
      <p>HubCart</p>
      <p>Your Style, Your Way</p>
    </template>

    <NuxtImg src="/hero-background.png" alt="Hero Background" class="bg-cover bg-center bg-no-repeat w-full h-full rounded-lg shadow-lg" />
  </UPageHero>
</template>

<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const links = ref<ButtonProps[]>([
  {
    label: 'Shop Women',
    to: '/womens',
    color: 'neutral' as const,
    trailingIcon: 'i-heroicons-arrow-right'
  },
  {
    label: 'Shop Men',
    to: '/mens',
    color: 'neutral' as const,
    variant: 'subtle',
    trailingIcon: 'i-heroicons-arrow-right'
  }
])
</script>

<style scoped>

</style>
