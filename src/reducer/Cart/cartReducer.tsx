import {ICart} from "../../typeScript/typescript";

type CartState = Record<number, ICart>

const defaultState: CartState = []
type ActionType = "ADD_CART" | "GET_CART" | "ADD_MANY_CART"
export const CartReducer = ((state: CartState = defaultState, action: {type:ActionType, payload:any}):CartState => {
    switch (action.type) {
        case "ADD_MANY_CART":
            console.log(action.payload)
            return {...action.payload}
        case "ADD_CART":
            console.log(action.payload)
            return {...action.payload}
        case "GET_CART":
            return {...action.payload}
        default:
            return state
    }
})

export const addManyCartAction = (payload: any):{type: ActionType, payload: any} => ({type: "ADD_MANY_CART", payload})
export const addCartAction = (payload: any | undefined):{type: ActionType, payload: any} => ({type: "ADD_CART", payload})
export const getCartAction = (payload: any):{type: ActionType, payload: any} => ({type: "GET_CART", payload})
