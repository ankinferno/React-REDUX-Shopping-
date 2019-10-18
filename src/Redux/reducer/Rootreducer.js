import { combineReducers } from 'redux';
import CartReducer from './Addreducer';


const rootreducer = combineReducers({

    cartItem: CartReducer

});

export default rootreducer;