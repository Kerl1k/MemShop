import { RootState } from "../index";
import { addManyProduct } from "./productThunk";

export const fetchSerchProduct: any = (filter: any) => {
    if (filter.sort == '' && filter.query == '') {
        return function (dispatch: any, getState: () => RootState) {
            fetch("http://localhost:3001/product")
                .then(response => response.json())
                .then(product => Object.values(product))
                .then(json => dispatch(addManyProduct(json)))
                .catch(err => console.log(err))
        }
    } else if (filter.query == '') {
        return function (dispatch: any, getState: () => RootState) {
            fetch("http://localhost:3001/product" + `?type=${filter.sort}`)
                .then(response => response.json())
                .then(product => Object.values(product))
                .then(json => dispatch(addManyProduct(json)))
                .catch(err => console.log(err))
        }
    } else if (filter.sort == '') {
        return function (dispatch: any, getState: () => RootState) {
            fetch("http://localhost:3001/product" + `?name_like=${filter.query}`)
                .then(response => response.json())
                .then(product => Object.values(product))
                .then(json => dispatch(addManyProduct(json)))
                .catch(err => console.log(err))
        }
    } else {
        return function (dispatch: any, getState: () => RootState) {
            fetch("http://localhost:3001/product" + `?name_like=${filter.query}&type=${filter.sort}`)
                .then(response => response.json())
                .then(product => Object.values(product))
                .then(json => dispatch(addManyProduct(json)))
                .catch(err => console.log(err))
        }
    }
}