import produce from 'immer';
import {CounterActionTypes,  INCREMENT} from './../actions/counter';
import { Counter } from './../types';

export interface DefaultState {
  counter: Counter;
}

export const defaultState: DefaultState = {
  counter: { count: 0 },
};

const reducer = (
  state: DefaultState = defaultState,
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

// const reducer = (
//   state = defaultState,
//   action,
// ) => produce(state, (draft) => {
//   let currentDraft = draft;
//   const actionType = action && action.type ? action.type : '';
//   switch (actionType) {
//     case Constants.FETCHED_TICKER: {
//       currentDraft.markets = action.data.ticker.markets;
//       return;
//     }
//     case Constants.REFRESHING:
//     {
//       currentDraft.refreshing = action.data;
//       return;
//     }
//     case Constants.ERROR_MESSAGE:
//     {
//       currentDraft.errorMessage = action.data;
//       return;
//     }
//     default: {
//       currentDraft = draft;
//     }
//   }
// });

// export default reducer;