import React, {useMemo} from 'react';
import Header from './components/Header'
import "./CSS/Cart.css"
import {useTypedSelector} from "./hook/useTypedSelector";

const Cart = () => {
    const cart = useTypedSelector(state =>  state.cart)
    const cartArray = Object.values(cart)
    return (
        <div>
            <Header/>
            <h1>CART</h1>
            <div className="cart_list">
                {
                    cartArray.length === 0 ?
                        <h1>НИХУЯ НЕТ</h1>
                        :
                        cartArray.map(p => {
                            return (
                                <div className="cart_product">
                                    <div className="product_img">{p.id}</div>
                                    <div className="product_name">{p.count}</div>
                                    {/*<div className="product_price">{p.price}</div>*/}
                                </div>
                            )
                        })
                }
            </div>
        </div>
    );
};

export default Cart;