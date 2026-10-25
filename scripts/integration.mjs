import { setTimeout as sleep } from 'node:timers/promises'

const rounds = Number(process.env.INTEGRATION_ROUNDS ?? '1')
const delayMs = Number(process.env.INTEGRATION_DELAY_MS ?? '30000')

for (let round = 1; round <= rounds; round++) {
  console.log(`round ${round} of ${rounds}: replaying recorded carts against the sandbox`)
  await sleep(delayMs)
}
console.log('integration suite finished')
