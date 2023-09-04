import React from 'react';
import {Link} from "react-router-dom";
import './Header.css'

const Header = () => {

    return (
        <header>
            <div className="header">
                <div className="header_button_list">
                    <Link className="header_button" to="/">На главную</Link>
                    <Link className="header_button" to="/Cart">Корзина</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;