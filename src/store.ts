import { rootReducer } from './configureStore';
import * as User from './features/users/reducer';


export type AppState = ReturnType<typeof rootReducer>;

export const reducers = {
  userReducer: User.reducer,
};