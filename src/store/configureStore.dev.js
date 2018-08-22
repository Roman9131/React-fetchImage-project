import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';

export default props => {
  const sagaMiddleware = createSagaMiddleware();

  const composedStore = composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  );

  const storeCreator = composedStore(createStore);
  return { ...storeCreator(rootReducer, props), runSaga: sagaMiddleware.run };
};
