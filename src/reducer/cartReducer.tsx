type CartState = Record<number, Item>
interface Item {
    count: number,
    id:number;
    name: string;
    img:string;
    price:string;
    about: string;

}

const defaultState: CartState = {}
type ActionType = "ADD_CART" | "GET_CART"
export const CartReducer = ((state: CartState = defaultState, action: {type:ActionType, payload:any}):CartState => {
    switch (action.type) {
        case "ADD_CART":
            if(state[action.payload.id]){
                return {...state, [action.payload.id]: {...action.payload, count: state[action.payload.id].count + 1}}
            }else{
                return {...state, [action.payload.id]:{...action.payload}}
            }
        case "GET_CART":
            console.log(state)
            if(action.payload.count === 1){
                // @ts-ignore
               delete state[action.payload.id]
                return{...state}
            }else{
                return {...state, [action.payload.id]: {...action.payload, count: state[action.payload.id].count - 1}}
            }
        default:
            return state
    }
})

export const addCartAction = (payload: any) => ({type: "ADD_CART", payload})
export const getCartAction = (payload: any) => ({type: "GET_CART", payload})
