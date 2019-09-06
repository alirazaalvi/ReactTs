import { Counter } from './../types';
// src/store/chat/types.ts
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

interface IncrementAction {
  type: typeof INCREMENT;
  payload: Counter;
}


export function increment(): IncrementAction {
  return {
    type: INCREMENT,
    payload: { count: 1 },
  }
}

// interface DeleteMessageAction {
//   type: typeof DELETE_MESSAGE
//   meta: {
//     timestamp: number
//   }
// }

//export type ChatActionTypes = SendMessageAction | DeleteMessageAction
export type CounterActionTypes = IncrementAction;