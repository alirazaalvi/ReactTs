import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { reducers } from './store';

export const rootReducer = combineReducers(reducers);

//export type AppState = ReturnType<typeof rootReducer>;

//import reduxThunk from 'redux-thunk';
const Store = createStore(
    rootReducer,
  //applyMiddleware(reduxThunk),
);

export default Store;