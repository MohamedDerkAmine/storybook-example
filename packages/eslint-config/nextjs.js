import reactConfig from './react.js'

export default [
  ...reactConfig,
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
]
