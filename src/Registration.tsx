import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import "../src/CSS/Registration.css"
import {addUsers} from "./reducer/Registration/usersThunk";
import {fetchUsers} from "./reducer/Registration/fetchUsers";
import {useTypedDispatch} from "./hook/useTypedDispatch";
import {Link} from "react-router-dom";
const Registration = () => {
    const dispatch = useTypedDispatch()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    useEffect(() => {dispatch(fetchUsers())}, [])

    async function addUser(e: any) {
        e.preventDefault()
            const user = {id:Date.now(), login: login, password: password, type: "user"}
        // @ts-ignore
      await dispatch(addUsers( user))
    }
    return (
        <div>
            <Header/>
            <div className="registration">
                <form className="login">
                    <input onChange={e => setLogin(e.target.value)}
                           value={login}
                           className="input"
                           placeholder="Введите логин"
                           type={"text"}/>
                    <input onChange={e => setPassword(e.target.value)}
                           value={password}
                           className="input"
                           placeholder="Введите пароль"
                           type={"password"}/>
                    <button className="login_password" onClick={(e)=>addUser(e)}><Link to="/">Registration</Link></button>
                </form>
            </div>

        </div>
    );
};

export default Registration;