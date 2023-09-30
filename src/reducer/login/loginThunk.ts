import {AppDispatch} from "../index";
import {IUsers} from "../../typeScript/typescript";
import {loginAction} from "./loginReducer";

const url = "http://localhost:3001/users"

export const login = (login: string, password: string) => {
    return async function (dispatch: AppDispatch, getState: any) {
        const response = await fetch(url+`?login=${login}&password=${password}`, {method: "GET", headers: {'Content-Type': 'application/json;charset=utf-8'}})
        const data: IUsers[] = await response.json()
        console.log(Object.keys(data))
        if(data.length === 1){
            dispatch(loginAction(data))
        }else{
            return "ERROR"
        }
    }
}

export const logout = (item: any) => {
    return async function (dispatch: AppDispatch, getState: any) {  
    }
}
