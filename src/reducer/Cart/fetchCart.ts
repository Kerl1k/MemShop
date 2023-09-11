import {RootState} from "../index";
import {addManyCart} from "./cartThunk";

export const fetchCart:any = () => {
    return function (dispatch:any, getState:()=> RootState) {
        fetch("http://localhost:3001/cart")
            .then(response => response.json())
            .then(product => Object.values(product))
            .then(json => dispatch(addManyCart(json)))
            .catch(err => console.log(err))
    }
}