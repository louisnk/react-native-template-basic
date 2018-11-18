import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { ReduxPersist } from '../Config';
import { DemoReducer } from './Reducer';

const rootReducer = combineReducers({
  // Add all reducers here
  demo: DemoReducer,
});

const persistedReducer = persistReducer(
  ReduxPersist,
  rootReducer,
);

export default persistedReducer;
