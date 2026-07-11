import react from '@mohamedd/eslint-config/react'

export default [
  ...react,
  {
    ignores: ['dist/**', 'storybook-static/**', '.storybook/vitest.setup.ts'],
  },
]
