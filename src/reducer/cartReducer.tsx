type CartState = Record<number, Item>
interface Item {
    count: number,
    id: number
}
const defaultState: CartState = {}
type ActionType = "ADD_CART" | "GET_CART"
export const CartReducer = ((state: CartState = defaultState, action: {type:ActionType, payload:any}):CartState => {
    switch (action.type) {
        case "ADD_CART":
            if(state[action.payload.id]){
                const current = state[action.payload.id]
                return {...state, [action.payload.id]: {...current, count: current.count + 1}}
            }else{
                return {...state, [action.payload.id]:{...action.payload}}
            }
        case "GET_CART":
            return {}
        default:
            return state
    }
})

export const addCartAction = (payload: any) => ({type: "ADD_CART", payload})
// export const getCartAction = (payload: any) => ({type: GET_CART, payload})
