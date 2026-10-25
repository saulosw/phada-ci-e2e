export function formatPrice(cents: number): string {
  const sign = cents < 0 ? '-' : ''
  const abs = Math.abs(cents)
  return `${sign}$${Math.floor(abs / 100)}.${String(abs % 100).padStart(2, '0')}`
}

export function formatPriceRange(lowCents: number, highCents: number): string {
  if (lowCents > highCents) throw new RangeError('the low price must not be above the high price')
  return lowCents === highCents ? formatPrice(lowCents) : `${formatPrice(lowCents)} – ${formatPrice(highCents)}`
}
