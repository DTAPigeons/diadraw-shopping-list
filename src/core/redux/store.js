import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { catalogReducer } from './reducers/catalog-reducer';
import { rootSaga } from './sagas/rootsaga';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({catalogReducer});

export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);