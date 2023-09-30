import {ICart, IProduct} from "../../typeScript/typescript";
import {addManyAction, addProductAction, changeAction, deleteAction} from "./productReducer";

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

export const addProduct = (newProduct: ICart) => {
    return async function (dispatch: any, getState: any) { 
        const response = await fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(newProduct)
        })
        dispatch(addProductAction(await response.json()))
    }
}


export const changeProduct = (newProduct: ICart) => {
    return async function (dispatch: any, getState: any) { 
        await fetch(url + `/${newProduct.id}`, {
            method: "DELETE"
        })
            .catch(err => console.log(err))
        const response = await fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(newProduct)
        })
        dispatch(changeAction(await response.json()))
    }
}


export const deleteProduct = (id: ICart) => {
    return async function (dispatch: any, getState: any) { 
        await fetch(url + `/${id}`, {
            method: "DELETE"
        })
            .catch(err => console.log(err))

            const newList = await fetch(url)
        dispatch(deleteAction(await newList.json()))
    }
}