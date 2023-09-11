import React from 'react';
import {Link} from "react-router-dom";
import '../CSS/Header.css'
import {useTypedSelector} from "../hook/useTypedSelector";

const Header = () => {
    const cart = useTypedSelector(state => Object.values(state.cart))
    let sum = 0
    cart.forEach((p) =>{
        sum = sum + p.count
    })
    return (
        <header>
            <div className="header">
                <div className="header_button_list">
                    <Link className="header_button" to="/">На главную</Link>
                    <Link className="header_button" to="/Cart">Корзина {sum}</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;