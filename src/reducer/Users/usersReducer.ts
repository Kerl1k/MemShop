import {IUsers} from "../../typeScript/typescript";

const defaultState: UsersState = {}
type UsersState = Record<number, IUsers>

type ActionType = "ADD_USERS" | "GET_USERS" | "ADD_MANY_USERS"

export const UsersReducer =( (state: UsersState = defaultState, action: {type:ActionType, payload: any}):UsersState=> {
    switch (action.type){
        case "ADD_MANY_USERS":
            return {...action.payload}
        case "ADD_USERS":
            return {...state,...action.payload}
        case "GET_USERS":
            return {...state,}
        default:
            return state
    }
})

export const addManyUsersAction = (payload: any) => ({type: "ADD_MANY_USERS", payload})
export const addUsersAction = (payload: any) => ({type: "ADD_MANY_USERS", payload})
