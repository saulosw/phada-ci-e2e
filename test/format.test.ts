import { describe, expect, it } from 'vitest'
import { formatPrice, formatPriceRange } from '../src/format.js'

describe('formatPrice', () => {
  it('formats cents as dollars', () => {
    expect(formatPrice(1250)).toBe('$12.50')
    expect(formatPrice(5)).toBe('$0.05')
  })

  it('keeps the sign of a refund', () => {
    expect(formatPrice(-300)).toBe('-$3.00')
  })
})

describe('formatPriceRange', () => {
  it('shows one price when both ends are equal', () => {
    expect(formatPriceRange(500, 500)).toBe('$5.00')
  })
})
