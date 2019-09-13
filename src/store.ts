import { rootReducer } from './configureStore';
import * as User from './features/users/reducer';
import { CounterActionTypes } from './features/users/actions';

export type AppState = ReturnType<typeof rootReducer>;

export type ActionTypes = (CounterActionTypes);

export const reducers = {
  userReducer: User.reducer,
};