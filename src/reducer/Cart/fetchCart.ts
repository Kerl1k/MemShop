import {RootState} from "../index";
import { addManyCartAction } from "./cartReducer";
export const fetchCart:any = () => {
    return function (dispatch:any, getState:()=> RootState) {
        const user:any = getState().login
        if(user.isLoggedIn === true){
            fetch("http://localhost:3001/cart"+`?id=${user[0].id}`, {method: "GET", headers: {'Content-Type': 'application/json;charset=utf-8'}})
            .then(response => response.json())
            .then(cart => cart[0])
            .then(json => dispatch(addManyCartAction(json.value)))
            .catch(err => console.log(err))
        }
    }
}