import { Dispatch } from 'redux';
import { rootReducer } from './configureStore';
import * as User from './features/users/reducer';
import * as Todos from './features/todos/reducer';
import { CounterActionTypes } from './features/users/actions';
import { TodoActionTypes } from './features/todos/actions';

export type AppState = ReturnType<typeof rootReducer>;

export type ActionTypes = (CounterActionTypes | TodoActionTypes);

export type DispatchType = Dispatch<ActionTypes>;

export const reducers = {
  userReducer: User.reducer,
  todoReducer: Todos.reducer,
};


