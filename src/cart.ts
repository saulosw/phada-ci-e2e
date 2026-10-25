export interface CartItem {
  sku: string
  priceCents: number
  quantity: number
}

export function cartSubtotal(items: readonly CartItem[]): number {
  return items.reduce((sum, item) => sum + item.priceCents * item.quantity, 0)
}

export function applyDiscount(totalCents: number, percent: number): number {
  if (percent < 0 || percent > 100) throw new RangeError('percent must be between 0 and 100')
  return Math.round((totalCents * (100 - percent)) / 100)
}
