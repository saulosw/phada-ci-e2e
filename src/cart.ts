export interface CartItem {
  sku: string
  priceCents: number
  quantity: number
}

export const MAX_QUANTITY = 99

export function cartSubtotal(items: readonly CartItem[]): number {
  for (const item of items) {
    if (!Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > MAX_QUANTITY) {
      throw new RangeError(`quantity of ${item.sku} must be a whole number from 1 to ${MAX_QUANTITY}`)
    }
  }
  return items.reduce((sum, item) => sum + item.priceCents * item.quantity, 0)
}

export function applyDiscount(totalCents: number, percent: number): number {
  if (percent < 0 || percent > 100) throw new RangeError('percent must be between 0 and 100')
  return Math.round((totalCents * (100 - percent)) / 100)
}
