import {ICart, IProduct} from "../../typeScript/typescript";
import {addManyAction, changeAction} from "./productReducer";

const url = "http://localhost:3001/product"


export const addManyProduct = (item: any) => {
    return async function (dispatch: any, getState: any) {
        let newProduct: any
        item.forEach((e: IProduct) => {
                newProduct = {...newProduct, [e.id]: {...e}}
            }
        )
        dispatch(addManyAction(newProduct))
    }
}

export const changeProduct = (productList: IProduct[], newProduct: ICart) => {
    return async function (dispatch: any, getState: any) {
        return  fetch(url + `?id=${newProduct.id}`, {
            method: "GET"
        })
            .then(user => user.json())
            .then(user=> console.log(user))
            .catch(err => console.log(err))
        // const response = await fetch(url, {
        //     method: "POST",
        //     headers: {'Content-Type': 'application/json;charset=utf-8'},
        //     body: JSON.stringify(newProduct)
        // })
        // dispatch(changeAction(await response.json()))
    }
}
