import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '../constants/counter'

export const decrement = () => ({
  type: DECREMENT_COUNTER
})

export const increment = () => ({
  type: INCREMENT_COUNTER
})
