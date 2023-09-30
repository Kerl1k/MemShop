import React, { FormEvent, useEffect, useState } from 'react';
import Header from "./components/Header";
import "../src/CSS/Registration.css"
import { addUsers } from "./reducer/Registration/usersThunk";
import { fetchUsers } from "./reducer/Registration/fetchUsers";
import { useTypedDispatch } from "./hook/useTypedDispatch";
import { Link, redirect, useNavigate } from "react-router-dom";
const Registration = () => {
    const dispatch = useTypedDispatch()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const nav = useNavigate()
    useEffect(() => { dispatch(fetchUsers()) }, [])

    async function addUser(e:FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const user = { id: Date.now(), login: login, password: password, type: "user", email: email, date: date }
        // @ts-ignore
        const result = await dispatch(addUsers(user))
        console.log(result)
        if(result){
            nav("/")
        }
    }
    return (
        <div>
            <Header />
            <h1 style={{ display: "flex", justifyContent: "center" }}>Регистрация</h1>
            <div className="registration">
                <form onSubmit={addUser} className="login">
                    <label htmlFor="email"><b>Почта</b></label>
                    <input required onChange={e => setEmail(e.target.value)}
                        value={email}
                        className="input"
                        placeholder="Введите почту"
                        type={"text"} />
                    <label htmlFor="login"><b>Логин</b></label>
                    <input onChange={e => setLogin(e.target.value)}
                        required
                        value={login}
                        className="input"
                        placeholder="Введите логин"
                        type={"text"} />
                    <label htmlFor="psd"><b>Пароль</b></label>
                    <input onChange={e => setPassword(e.target.value)}
                        required
                        value={password}
                        className="input"
                        placeholder="Введите пароль"
                        type={"password"} />
                    <label htmlFor="date"><b>Дата рождения</b></label>
                    <input onChange={e => setDate(e.target.value)}
                        required
                        value={date}
                        className="input"
                        placeholder="Введите пароль"
                        type={"date"} />
                    <button type='submit' className="login_password">Registration</button>
                </form>
            </div>

        </div>
    );
};

export default Registration;