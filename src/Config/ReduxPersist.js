import { AsyncStorage } from 'react-native';
import { seamlessImmutableReconciler } from 'redux-persist-seamless-immutable';
import C from './Constants';

// Only add reducers with non-immutable state to the blacklist and whitelist
const REDUX_PERSIST = {
  blacklist: [
    // Import blacklisted reducers
  ],
  key: C.PERSIST.KEY,
  stateReconciler: seamlessImmutableReconciler,
  storage: AsyncStorage,
};

export default REDUX_PERSIST;
