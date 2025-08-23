<script setup>
import { z } from 'zod'

const toast = useToast()
const loading = ref(false)
const schema = z.object({
  email: z.string().email('Invalid email')
})

const state = reactive({
  email: undefined
})

async function onSubmit(event) {
  try {
    loading.value = true
    await $fetch('/api/newsletter', {
      method: 'POST',
      body: { email: event.data.email }
    })
    toast.add({
      title: 'You have been added to our email list!',
      color: 'success'
    })
  } catch (error) {
    console.error(error)
    toast.add({
      title: error.data?.statusMessage ?? 'An error occurred',
      color: 'failure'
    })
  } finally {
    state.email = ''
    loading.value = false
  }
}
</script>

<template>
  <UPageSection title="Subscribe to our newsletter" description="Be the first to know about new products, sales, and more.">
    <UForm
      :schema="schema"
      :state="state"
      class="space-y-4 w-96 mx-auto"
      @submit="onSubmit"
    >
      <UFormField name="email" size="lg" label="Email">
        <UInput
          v-model="state.email"
          placeholder="Enter your email address..."
          type="email"
          class="w-full"
        />
      </UFormField>
      <UButton
        :loading="loading"
        label="Subscribe to Newsletter"
        color="neutral"
        type="submit"
        :disabled="loading"
        size="xl"
        block
      />
    </UForm>
  </UPageSection>
</template>
