import { produce } from 'immer';
import { Todo } from './types';
import { ADD_TODO, TodoActionTypes } from './actions';

export interface TodoState {
  todos: Todo[];
}

export const defaultState: TodoState = {
  todos: []
}

export const reducer = (
  state: TodoState = defaultState,
  action: TodoActionTypes
) => produce(state, (draft) => {
  let currentDraft = draft;

  switch(action.type) {
    case ADD_TODO: {
      currentDraft.todos.push(action.payload);
      return;
    }
    default: {
      currentDraft = draft;
      return;
    }
  }
});

export default reducer;
