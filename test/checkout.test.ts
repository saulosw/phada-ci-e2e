import { describe, expect, it } from 'vitest'
import { checkout } from '../src/checkout.js'

describe('checkout', () => {
  it('reports the subtotal, the discount and the total', () => {
    expect(checkout([{ sku: 'a', priceCents: 2000, quantity: 1 }], 25)).toEqual({
      subtotalCents: 2000,
      discountCents: 500,
      totalCents: 1500,
    })
  })
})
