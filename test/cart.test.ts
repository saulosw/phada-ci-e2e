import { describe, expect, it } from 'vitest'
import { applyDiscount, cartSubtotal, itemCount } from '../src/cart.js'

describe('cartSubtotal', () => {
  it('adds price times quantity', () => {
    expect(
      cartSubtotal([
        { sku: 'a', priceCents: 250, quantity: 2 },
        { sku: 'b', priceCents: 99, quantity: 1 },
      ]),
    ).toBe(599)
  })

  it('is zero for an empty cart', () => {
    expect(cartSubtotal([])).toBe(0)
  })
})

describe('applyDiscount', () => {
  it('takes the percent off and rounds to the cent', () => {
    expect(applyDiscount(1000, 10)).toBe(900)
    expect(applyDiscount(999, 15)).toBe(849)
  })

  it('keeps the total without a discount', () => {
    expect(applyDiscount(1234, 0)).toBe(1234)
  })

  it('rejects a percent outside 0 to 100', () => {
    expect(() => applyDiscount(100, 120)).toThrow(RangeError)
  })
})

describe('itemCount', () => {
  it('adds the quantities', () => {
    expect(itemCount([{ sku: 'a', priceCents: 1, quantity: 2 }, { sku: 'b', priceCents: 1, quantity: 3 }])).toBe(5)
  })
})
