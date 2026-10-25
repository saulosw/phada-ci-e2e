export const FREE_SHIPPING_CENTS = 5000

export function shippingCents(subtotalCents: number, flatRateCents: number): number {
  return subtotalCents >= FREE_SHIPPING_CENTS ? 0 : flatRateCents
}
