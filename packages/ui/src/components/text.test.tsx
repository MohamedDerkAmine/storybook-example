import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Text } from './text'

describe('Text', () => {
  it('renders children', () => {
    render(<Text>Hello</Text>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('renders as the specified element', () => {
    render(<Text as="h1">Heading</Text>)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Heading')
  })
})
