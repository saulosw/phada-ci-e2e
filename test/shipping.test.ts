import { describe, expect, it } from 'vitest'
import { shippingCents } from '../src/shipping.js'

describe('shippingCents', () => {
  it('is free from 50 dollars on', () => {
    expect(shippingCents(5000, 700)).toBe(0)
    expect(shippingCents(4999, 700)).toBe(700)
  })
})
