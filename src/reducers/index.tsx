import { combineReducers } from 'redux';
import CounterReducer from './CounterReducer'

const rootReducer = combineReducers({
  counterReducer: CounterReducer,
})

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;