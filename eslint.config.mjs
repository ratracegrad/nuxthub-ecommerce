// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  // Your custom configs here
  rules: {
    'vue/max-attributes-per-line': ['error', { singleline: 3 }]
  }
})
