<script setup lang="ts">
const items = computed(() => [{
  label: 'Womens',
  to: '/womens',
}, {
  label: 'Mens',
  to: '/mens'
}, {
  label: 'Tech',
  to: '/tech'
}
])
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <span class="text-2xl font-bold">NuxtHub eCommerce</span>
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
    />

    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>
