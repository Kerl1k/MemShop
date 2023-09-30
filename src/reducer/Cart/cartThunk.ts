import { ICart, ILogin, IUsers } from "../../typeScript/typescript";
import { addCartAction, getCartAction } from "./cartReducer";
import { AppDispatch } from "../index";

export const addCart = (item: ICart, login: any) => {
    return async function (dispatch: AppDispatch, getState: any) {
        const state = getState()
        const url = "http://localhost:3001/cart" + `/${state.login[0].id}`
        const oldCart = state.cart ?? {}
        let newCart
        if (Object.keys(oldCart).length == 0) {
            newCart = { "id": login[0].id, "value": { ...oldCart, [item.id]: { ...item, count: 1 } } }
        } else {
            if (!oldCart[item.id]) {
                newCart = { "id": state.cart.id, "value": { ...oldCart, [item.id]: { ...item, count: 1 } } }
            } else {
                newCart = { "id": state.cart.id, "value": { ...oldCart, [item.id]: { ...item, count: oldCart[item.id].count + 1 } } }
            }
        }
        await fetch(url, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(newCart)
        })
        dispatch(addCartAction(newCart.value))
    }
}
export const deleteCart = (item: ICart) => {
    return async function (dispatch: AppDispatch, getState: any) {
        const state = getState()
        const url = "http://localhost:3001/cart" + `/${state.login[0].id}`
        let newCart
        if (state.cart[item.id].count === 1) {
            delete state.cart[item.id]
            newCart = { "id": state.cart.id, "value": { ...state.cart}}
        } else {
            newCart = { "id": state.cart.id, "value": { ...state.cart, [item.id]: { ...item, count: state.cart[item.id].count - 1 } } }
        }
        console.log(url)
        await fetch(url, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(newCart)
        })
        dispatch(getCartAction(newCart.value))
    }
}

