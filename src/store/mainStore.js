import { createStore, compose, applyMiddleware,combineReducers } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import allReducers from './reducers/rootReducers'
import thunk from 'redux-thunk'
// const persistconfig = {
//     key: 'root',
//     storage
// }
const middleware = [thunk];
// const persistedReducer = persistReducer(persistconfig, allReducers);

export const store = createStore(allReducers, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
// window.store = createStore(persistedReducer);
// export const persistor = persistStore(store);

// import {createStore,compose,applyMiddleware} from 'redux';
// import {persistStore,persistReducer} from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// const persistConfig = {
//     key : 'root',
//     storage
// }
// const persistedReducer = persistReducer(persistConfig,null);

// export const store = createStore(persistedReducer,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
// window.store = createStore(persistedReducer)
// export const persistor = persistStore(store);
