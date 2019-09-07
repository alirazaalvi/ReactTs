import produce from 'immer';
import {CounterActionTypes,  INCREMENT, DECREMENT} from './actions';
import { Counter } from './types';

export interface UserState {
  counter: Counter;
}

export const defaultState: UserState = {
  counter: { count: 0 },
};

export const reducer = (
  state: UserState = defaultState,
  action: CounterActionTypes
) => produce(state, (draft) => {
  let currentDraft = draft;
  const currentCount = currentDraft.counter.count;

  switch(action.type) {
    case INCREMENT:  {
      currentDraft.counter.count = currentCount + action.payload.count;
      return;
    }
    case DECREMENT: {
      currentDraft.counter.count = currentCount - action.payload.count;
      return;
    }
    default: {
      currentDraft = draft;
    }
  }
});

export default reducer;