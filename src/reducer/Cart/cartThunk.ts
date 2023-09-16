import {ICart} from "../../typeScript/typescript";
import {addCartAction, addManyCartAction, getCartAction} from "./cartReducer";
import {AppDispatch} from "../index";

const url = "http://localhost:3001/cart"
export const addManyCart = (item: any) => {
    return async function (dispatch: AppDispatch, getState: any) {
        let newCart: any
        item.forEach((e: ICart) => {
                newCart = {...newCart, [e.id]: {...e}}
            }
        )
        dispatch(addManyCartAction(newCart))
    }
}

export const addCart = (item: any) => {
    return async function (dispatch: AppDispatch, getState: any) {
        const state = getState()
        let newCart
        if (state.cart[item.id]) {
            newCart = {...state.cart, [item.id]: {...item, count: state.cart[item.id].count + 1}}
        } else {
            newCart = {...state.cart, [item.id]: {...item, count: 1}}
        }
        const response = await fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(newCart)
        })
        dispatch(addCartAction(await response.json()))
    }
}

export const deleteCart = (item: ICart) => {
    return async function (dispatch: AppDispatch, getState: any) {
        const state = getState()
        let newCart
        if (state.cart[item.id].count === 1) {
            delete state.cart[item.id]
            newCart = state.cart
        } else {
            newCart = {...state.cart, [item.id]: {...item, count: state.cart[item.id].count - 1}}
        }
        const response = await fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(newCart)
        })
        dispatch(getCartAction(await response.json()))
    }
}