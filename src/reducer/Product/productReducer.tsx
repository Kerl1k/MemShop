import {ICart, IProduct} from "../../typeScript/typescript";

const defaultState: ProductState = {}
type ProductState = Record<number, ICart>

type ActionType = "ADD_PRODUCT" | "GET_PRODUCT" | "ADD_MANY_PRODUCT" | "CHANGE_PRODUCT"

export const ProductReducer =( (state: ProductState = defaultState, action: {type:ActionType, payload: any})=> {
    switch (action.type){
        case "ADD_MANY_PRODUCT":
            return {...action.payload}
        case "ADD_PRODUCT":
            return {...state, [action.payload.id]: {...action.payload}}
        case "CHANGE_PRODUCT":
            return {...state, [action.payload.id]:{...action.payload}};
        case "GET_PRODUCT":
            return {...action.payload}
        default:
            return {...state}
    }
})

export const addManyAction = (payload: any) => ({type: "ADD_MANY_PRODUCT", payload})
export const addProductAction = (payload: any) => ({type: "ADD_PRODUCT", payload})
export const changeAction = (payload: any) => ({type: "CHANGE_PRODUCT", payload})
export const deleteAction = (payload: any) => ({type: "GET_PRODUCT", payload})
