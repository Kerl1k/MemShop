import { Link } from "react-router-dom";
import '../CSS/Header.css'
import { useTypedSelector } from "../hook/useTypedSelector";
import pepe from "../img/pngegg.png"
import user from "../img/user.png"
import { useTypedDispatch } from "../hook/useTypedDispatch";
import { logoutAction } from '../reducer/login/loginReducer';

const Header = () => {
    const users = useTypedSelector(state => state.login)
    const cart = useTypedSelector(state => Object.values(state.cart))
    const dispatch = useTypedDispatch()
    let sum = 0
    cart.forEach((p) => {
        sum = sum + p.count
    })
    function exit() {
        dispatch(logoutAction())
    }

    return (
        <header className="header_button_list">
            <div className="header">
            <Link className="headers__photo" to="/"><img className='headers__photo' src={pepe} /></Link>
                <Link className="header_button" to="/">На главную</Link>
                {
                    users.isLoggedIn ?
                        <>
                        <Link className="header_button" to="/Cart">Корзина: {sum}</Link>
                            <div className="dropdown">
                                <img src={user} className="dropbtn" />
                                <div className="dropdown-content">
                                <Link className="header_button" to="/User">Личный кабинет</Link>
                                    <Link onClick={exit} className="header_button" to="/">Выйти</Link>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="dropdown">
                                <img src={user} className="dropbtn" />
                                <div className="dropdown-content">
                                    <Link className="header_button" to="/Registration">Регистрация</Link>
                                    <Link className="header_button" to="/Login">Авторизация</Link>
                                </div>
                            </div>
                        </>
                }
            </div>
        </header >
    );
};

export default Header;