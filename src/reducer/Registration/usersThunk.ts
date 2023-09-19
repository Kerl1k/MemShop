import {addManyUsersAction, addUsersAction} from "./usersReducer";

const url = "http://localhost:3001/users"
export const addManyUsers = (item: any) => {
    return async function (dispatch: any, getState: any) {
        dispatch(addManyUsersAction(item))
    }
}

export const addUsers = ( item: any) => {
    return async function (dispatch: any, getState: any) {
        let userName = ""
        await fetch(url+`?login=${item.login}`,
            {method: "GET",
                headers: {'Content-Type': 'application/json;charset=utf-8'}
            })
            .then(user => user.json())
            .then(user=> userName=user)
        if (userName.length !== 1){
            alert("XUI")
        }else{
            const response = await fetch(url,
                {method: "POST",
                    headers: {'Content-Type': 'application/json;charset=utf-8'},
                    body: JSON.stringify(item)})
            dispatch(addUsersAction(await response.json()))
        }
    }
}