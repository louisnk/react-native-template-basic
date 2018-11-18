import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeWithEnhancer = composeWithDevTools;
const middleware = [];

// Add production middleware

/**
 * To ensure that the saga works, run the saga middleware
 * containing the root saga after creating the store.
 */
export const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

export default composeWithEnhancer(applyMiddleware(...middleware));
