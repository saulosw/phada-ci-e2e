import { applyDiscount, cartSubtotal } from './cart.js'
import type { CartItem } from './cart.js'

export interface Checkout {
  subtotalCents: number
  discountCents: number
  totalCents: number
}

export function checkout(items: readonly CartItem[], discountPercent = 0): Checkout {
  const subtotalCents = cartSubtotal(items)
  const totalCents = applyDiscount(subtotalCents, discountPercent)
  return { subtotalCents, discountCents: subtotalCents - totalCents, totalCents }
}
