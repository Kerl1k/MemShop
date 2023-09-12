interface LoginState {isLoggedIn: boolean}

const defaultState: LoginState = {isLoggedIn: false}
type ActionType = "LOGIN" | "LOGOUT"
export const loginReducer = ((state: LoginState = defaultState, action: {type:ActionType, payload?:any}):LoginState => {
    switch (action.type) {
        case "LOGIN":
            return {isLoggedIn: true}
        case "LOGOUT":
            return {isLoggedIn: false}
        default:
            return state
    }
})

export const loginAction = ():{type: ActionType} => ({type: "LOGIN"})
export const logoutAction = ():{type: ActionType} => ({type: "LOGOUT"})

