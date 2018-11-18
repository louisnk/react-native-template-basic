import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import middleware from './Middleware';
import Reducers from './Reducers';


const ConfigureStore = (initialState) => {
  const store = createStore(Reducers, initialState, middleware);
  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};

export default ConfigureStore;
