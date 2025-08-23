<script setup lang="ts">
const items = [
  {
    label: 'Home',
    to: '/'
  }
]

const { data: categories } = await useFetch('/api/categories')

const uniqueCategories = categories.value?.map(category => category.category)

uniqueCategories?.forEach((category) => {
  items.push({
    label: category.charAt(0).toUpperCase()
      + category.slice(1),
    to: `/${category}`
  })
})
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
