import { createStore, applyMiddleware, compose } from 'redux';
import Logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middlewares = [Logger, ReduxThunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;
