import { IUsers } from "../../typeScript/typescript"

interface LoginState {isLoggedIn: boolean}

const defaultState: LoginState = {isLoggedIn: false}
type ActionType = "LOGIN" | "LOGOUT"
export const loginReducer = ((state: LoginState = defaultState, action: {type:ActionType, payload?:any}):LoginState => {
    switch (action.type) {
        case "LOGIN":
            return {...action.payload, isLoggedIn: true}
        case "LOGOUT":
            return {isLoggedIn: false}
        default:
            return state
    }
})

export const loginAction = (payload: IUsers[]):{type: ActionType, payload: any} => ({type: "LOGIN", payload})
export const logoutAction = ():{type: ActionType} => ({type: "LOGOUT"})

