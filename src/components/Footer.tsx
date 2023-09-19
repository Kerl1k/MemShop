import React from 'react';
import '../CSS/footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='block_list'>
                <div className='block'>
                    <h3>О компании</h3>
                    <p/> Memeshop - современный интренет магазин смешных картинок,
                    единственный в своем экземпляре. Единственный и неповторимый
                </div>
                <div className='block2'>
                    <h3>Информация</h3>
                    <Link className="" to="/Cart">Корзина</Link>
                    <Link className="" to="/">О Компании</Link>
                    <Link className="" to="/">Новости</Link>
                </div>
                <div className='block'>
                <h3>Контакты</h3>
                <p/>Юридический адрес: г.Москва, ул.Шошкина, д8
                <p/>Доставка по всей галактике
                <div className='block3_1'>
                    <p/>Номер тех. помощи: 911
                    <p/>SmehKart@smeh.com
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;