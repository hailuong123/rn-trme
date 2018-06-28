import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';
const loggerMiddleware = createLogger();

export default function configureStore(initialState?: any) {
  // Persist config 
  const persistConfig: any = {
    key: 'StoreTravelMe',
    storage
  }

  // COMPOSE 
  const enhancer = compose(
    applyMiddleware(
      thunk,
      loggerMiddleware as any,
    ),
  );

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    initialState,
    enhancer
  );

  return store;
}
