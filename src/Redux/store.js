import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootreducer from './reducer/Rootreducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const initialstate = {};

console.log("*** creating store!!");

const store = createStore(rootreducer, initialstate, composeEnhancers(applyMiddleware(...middleware)));

console.log("*** CreteD store!! : ", store.getState());

export default store;