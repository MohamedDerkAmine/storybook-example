import nextConfig from '@mohamedd/eslint-config/nextjs'

export default [
  ...nextConfig,
  {
    ignores: ['.next/**', 'node_modules/**'],
  },
]
