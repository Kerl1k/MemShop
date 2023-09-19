import React, { useState } from 'react';
import Header from "./components/Header";
import { useTypedDispatch } from "./hook/useTypedDispatch";
import { login } from "./reducer/login/loginThunk";

const Login = () => {
    const dispatch = useTypedDispatch()
    const [name, setName] = useState<any>('')
    const [password, setPassword] = useState<any>('')

    async function addUser(e: any) {
        e.preventDefault()
        // @ts-ignore
        dispatch(login(name, password))
    }
    return (
        <div>
            <Header />
            <h1 style={{display: "flex", justifyContent: "center"}}>Авторизация</h1>
            <form className="login">
                <input onChange={e => setName(e.target.value)}
                    value={name}
                    className="input"
                    placeholder="Введите логин"
                    type={"text"} />
                <input onChange={e => setPassword(e.target.value)}
                    value={password}
                    className="input"
                    placeholder="Введите пароль"
                    type={"password"} />
                <button className="login_password" onClick={(e) => addUser(e)}>Log in</button>
            </form>

        </div>
    );
};

export default Login;