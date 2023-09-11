import {IUsers} from "../../typeScript/typescript";
import {addManyUsersAction, addUsersAction} from "./usersReducer";

const url = "http://localhost:3001/users"
export const addManyUsers = (item: any) => {
    return async function (dispatch: any, getState: any) {
        let newCart: any
        item.forEach((item: IUsers) => {
                newCart = {...newCart, [item.login]: {...item}}
            }
        )
        dispatch(addManyUsersAction(newCart))
    }
}

export const addUsers = (item: any) => {
    return async function (dispatch: any, getState: any) {
        const state = getState()
        let newUser: any = {...state.users, [item.login]: {...item}}
        const response = await fetch(url,
            {method: "POST",
                headers: {'Content-Type': 'application/json;charset=utf-8'},
                body: JSON.stringify(newUser)})
        dispatch(addUsersAction(response))
    }
}