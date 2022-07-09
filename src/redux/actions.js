import { INCREMENT } from './types'
import { DECREMENT } from './types'
import { INPUT } from './types'

export function onIncrement() {
  return {
    type: INCREMENT,
  }
}

export function onDecrement() {
  return {
    type: DECREMENT,
  }
}

export function inp() {
  return {
    type: INPUT,
    input: INPUT
  }
}
