import { Add_Type, Subtract_Type } from './type';


export function AddItem(data) {
    console.log("aciton ADD called");

    return {
        type: Add_Type,
        payload: "test"

    }
}


export function RemoveItem(data) {
    console.log("aciton REMOVE called");

    return {
        type: Subtract_Type,
        payload: "test"

    }
}