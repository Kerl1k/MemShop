import React from 'react';
import {Link} from "react-router-dom";
import '../CSS/Header.css'
import {useTypedSelector} from "../hook/useTypedSelector";

const Header = () => {
    const cart = useTypedSelector(state => Object.values(state.cart))
    const login = useTypedSelector(state =>  state.login.isLoggedIn)
    let sum = 0
    cart.forEach((p) =>{
        sum = sum + p.count
    })
    function exit() {

    }
    return (
        <header>
            {login ?
                <div className="header">
                    <div className="header_button_list">
                        <Link className="header_button" to="/">На главную</Link>
                        <Link className="header_button" to="/Cart">Корзина {sum}</Link>
                        <Link onClick={exit} className="header_button" to="/">Выйти</Link>
                    </div>
                </div>
                :
                <div className="header">
                    <div className="header_button_list">
                        <Link className="header_button" to="/">На главную</Link>
                        <Link className="header_button" to="/Registration">Регистрация</Link>
                        <Link className="header_button" to="/Login">Авторизация</Link>
                    </div>
                </div>
            }
        </header>
    );
};

export default Header;