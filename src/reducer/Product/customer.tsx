import {RootState} from "../index";
import {addManyProduct} from "./productThunk";

export const fetchProduct:any = () => {
    return function (dispatch:any, getState:()=> RootState){
        fetch("http://localhost:3001/product")
            .then(response=> response.json())
            .then(product=> Object.values(product))
            .then(json=>dispatch(addManyProduct(json)))
            .catch(err=> console.log(err))
    }
}