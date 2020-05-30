import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reducers from './duck';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

export default store;
