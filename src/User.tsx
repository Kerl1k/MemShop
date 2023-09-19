import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './CSS/User.css'
import { useTypedDispatch } from './hook/useTypedDispatch';
import { useTypedSelector } from './hook/useTypedSelector';

const User = () => {
    const dispatch = useTypedDispatch()
    const user = useTypedSelector(state => Object.values(state.login))

    return (
        <div>
            <Header />
            <div className='user'>
                <div className='user__photo'><div className='photo'></div></div>
                <br />
                <div className='user__block'>
                    <div className='user__left_block'>
                        <div className='user__info'>
                            Имя пользователя:<div>{user[0].login}</div>
                            Почта:
                            <div>{user[0].email}</div>
                            Дата рождения
                            <div>{user[0].date}</div>
                        </div>
                    </div>
                    <div className='user__right_block'>
                        <div className='user__order'></div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    );
};

export default User;