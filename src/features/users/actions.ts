import { Counter } from './types';
// src/store/chat/types.ts
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

interface IncrementAction {
  type: typeof INCREMENT;
  payload: Counter;
}

interface DecrementAction {
  type: typeof DECREMENT,
  payload: Counter;
}


export function increment(step: number): IncrementAction {
  return {
    type: INCREMENT,
    payload: { count: step },
  }
}

export function decrement(step: number): DecrementAction {
  return {
    type: DECREMENT,
    payload: { count: step },
  }
}

export type CounterActionTypes = IncrementAction | DecrementAction;