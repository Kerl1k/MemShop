import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import {Link} from "react-router-dom";
import {useTypedDispatch} from "./hook/useTypedDispatch";
import {fetchUsers} from "./reducer/Users/fetchUsers";
import {useTypedSelector} from "./hook/useTypedSelector";

const Login = () => {
    const dispatch = useTypedDispatch()
    const [login, setLogin] = useState<any>('')
    const [password, setPassword] = useState<any>('')
    useEffect(() => {dispatch(fetchUsers())}, [])
    const users = useTypedSelector(state => state.users)
    async function addUser(e: any) {
        e.preventDefault()
        if(users[login].login === login && users[login].password === password){
            localStorage.setItem("login", "login")
            localStorage.setItem("id", String(users[login].id))
            return(<Link to="/"/>)
        }else{
            console.log("XUI")
        }
    }
    return (
        <div>
            <Header/>
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
                <button className="login_password" onClick={(e)=>addUser(e)}>Log in</button>
            </form>
            
        </div>
    );
};

export default Login;