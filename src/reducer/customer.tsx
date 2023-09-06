import {addManyAction} from "./productReducer";

export const fetchProduct:any = () => {
    return function (dispatch:any){
        fetch("http://localhost:3001/product")
            .then(response=> response.json())
            .then(product=> Object.values(product))
            .then(json=>dispatch(addManyAction(json)))
            .catch(err=> console.log(err))
    }
}