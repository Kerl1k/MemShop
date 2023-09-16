import {RootState} from "../index";
import {addManyUsers} from "./usersThunk";

export const fetchUsers:any = () => {
    return function (dispatch:any, getState:()=> RootState) {
        fetch("http://localhost:3001/users")
            .then(response => response.json())
            .then(product => Object.values(product))
            .then(json => dispatch(addManyUsers(json)))
            .catch(err => console.log(err))
    }
}