import produce from 'immer';
import {CounterActionTypes,  INCREMENT} from './actions';
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

  switch(action.type) {
    case INCREMENT:  {
      currentDraft.counter.count = currentDraft.counter.count + 1;
      return;
    }
    default: {
      currentDraft = draft;
    }
  }
});


export default reducer;