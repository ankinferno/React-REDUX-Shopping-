import { Add_Type, Subtract_Type } from '../actions/type';

const intitialstate = {

    itemsid: 0,
    itemCount: 0
}


const CartReducer = (state, action) => {
    console.log("Reducer called ");
    switch (action.type) {

        case Add_Type:
            console.log("current vaklue of state : ", state)
            return {
                ...state,
                itemCount: state.itemCount + 1,
                itemsid: state.itemsid + 1


            }
        case Subtract_Type:
            return {
                ...state,
                itemsid: state.itemsid - 1,
                itemCount: state.itemCount - 1,
            }
        default:
            return intitialstate;


    }



}

export default CartReducer;