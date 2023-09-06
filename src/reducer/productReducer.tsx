interface IProduct {
    id:number;
    name: string;
    img:string;
    price:string;
    about: string;
}

const defaultState: any = []

type ActionType = "ADD_PRODUCT" | "GET_PRODUCT" | "ADD_MANY_PRODUCT"

export const ProductReducer =( (state = defaultState, action: {type:ActionType, payload: any}):any=> {
    switch (action.type){
        case "ADD_MANY_PRODUCT":
            return [...action.payload]
        case "ADD_PRODUCT":
            return {...state,}
        case "GET_PRODUCT":
            return {...state,}
        default:
            return state
    }
})

export const addManyAction = (payload: any) => ({type: "ADD_MANY_PRODUCT", payload})
