import {ICart} from "../../typeScript/typescript";

type CartState = Record<number, ICart>

const defaultState: CartState = {}
type ActionType = "ADD_CART" | "GET_CART" | "ADD_MANY_CART"
export const CartReducer = ((state: CartState = defaultState, action: {type:ActionType, payload:any}):CartState => {
    switch (action.type) {
        case "ADD_MANY_CART":
            return {...action.payload}
        case "ADD_CART":
            return {...action.payload}
        case "GET_CART":
            return {...action.payload}
        default:
            return state
    }
})

export const addManyCartAction = (payload: ICart):{type: ActionType, payload: any} => ({type: "ADD_MANY_CART", payload})
export const addCartAction = (payload: ICart | undefined):{type: ActionType, payload: any} => ({type: "ADD_CART", payload})
export const getCartAction = (payload: ICart):{type: ActionType, payload: any} => ({type: "GET_CART", payload})
