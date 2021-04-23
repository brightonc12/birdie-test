import {createStore, compose, applyMiddleware,  } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from "./saga";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: () => undefined;
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (a: any) => undefined
    }
}

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store