import { useEffect } from 'react';
import Header from './components/Header'
import { ICart } from "./typeScript/typescript";
import MyButton from './components/UPI/button/MyButton';
import { Link } from 'react-router-dom';

import { addCart, deleteCart } from "./reducer/Cart/cartThunk";
import { fetchCart } from "./reducer/Cart/fetchCart";

import { useTypedDispatch } from "./hook/useTypedDispatch";
import { useTypedSelector } from "./hook/useTypedSelector";

import "./CSS/Cart.css"

const Cart = () => {
    // @ts-ignore
    const cart = useTypedSelector(state => Object.values(state.cart))
    const dispatch = useTypedDispatch()
    useEffect(() => { dispatch(fetchCart()) }, [])
    let sum: number = 0;
    let quantity: number = 0; 

    async function q(p: any) {
        // @ts-ignore
        dispatch(deleteCart(p))
    }

    async function w(p: any) {
        // @ts-ignore
        dispatch(addCart(p))
    }

    return (
        <div>
            <Header />
            <div className='main_block'>
                <div className="cart__block">
                    {
                        cart.length === 0 ?
                            <>
                                <h1>Вы ничего не добавили в корзину</h1>
                                <MyButton><Link to="/">Перейти в магазин</Link></MyButton>
                            </>
                            :
                            <>
                                <h1 style={{display:"flex", justifyContent:"center"}}>Корзина</h1>
                                <div className="cart_list">
                                    {cart.map((p:any) => {
                                        sum = p.price * p.count + sum;
                                        quantity = p.count + quantity
                                        return (
                                            <div key={p.id} className="cart_product">
                                                <img alt={p.name} src={p.img} className="cart_img" />
                                                <div className="product_name">{p.name}</div>
                                                <div className="product_right">
                                                    <div className="product_price">{p.price}p</div>
                                                    <div className="product_count">
                                                        <button className="button_count" onClick={() => q(p)}>-</button>
                                                        <div className="product_count_number">{p.count}</div>
                                                        <button className="button_count" onClick={() => w(p)}>+</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </>
                    }
                </div>
                <div className='info__block'>
                    <div className=''>
                        <h3>Доставка товара:</h3>
                        <div>"Тут будет почта пользователя"</div>
                        <h3>Доставка товара:</h3>
                        <div>"Тут будет карта пользователя"</div>
                        <h5>Колличество товаров: {quantity} шт.</h5>
                        <h2>Сумма товаров: {sum}р</h2>
                        <MyButton>Оплатить товары</MyButton>
                    </div>

                </div>
            </div>
            <div className='other__info'>
                <div className='block'>
                    <h3>Способ оплаты</h3>
                    <>Тут можно изменить карту</>
                </div>
                <div className='block'>
                    <h3>Мои данные</h3>
                    Перекидывает в профиль если хочешь изменить
                </div>
            </div>
        </div>
    );
}
    ;

export default Cart;