<script setup lang="ts">
const items = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'Womens',
    to: '/womens'
  },
  {
    label: 'Mens',
    to: '/mens'
  },
  {
    label: 'Tech',
    to: '/tech'
  }
]
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <LogoPro />
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
      highlight
      highlight-color="primary"
    />

    <template #right>
      <UColorModeButton class="hidden lg:block" />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        highlight
        highlight-color="primary"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>
