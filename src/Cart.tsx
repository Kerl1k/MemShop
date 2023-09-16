import React, {useEffect} from 'react';
import Header from './components/Header'
import "./CSS/Cart.css"
import {useTypedSelector} from "./hook/useTypedSelector";
import {addCart, deleteCart} from "./reducer/Cart/cartThunk";
import {useTypedDispatch} from "./hook/useTypedDispatch";
import {ICart} from "./typeScript/typescript";
import {fetchCart} from "./reducer/Cart/fetchCart";

const Cart = () => {
        const cart = useTypedSelector(state => Object.values(state.cart))
        const dispatch = useTypedDispatch()
        useEffect(() => {dispatch(fetchCart())}, [])
        let sum: number = 0;

        async function q(p: ICart) {
            // @ts-ignore
            await dispatch(deleteCart(p))
        }

        async function w(p: ICart) {
            // @ts-ignore
            await dispatch(addCart(p))
        }

        return (
            <div>
                <Header/>
                <h1>CART</h1>
                <div className="cart_list">
                    {
                        cart.length === 0 ?
                            <h1>НИХУЯ НЕТ</h1>
                            :
                            cart.map(p => {
                                sum = p.price * p.count + sum;
                                return (
                                    <div key={p.id} className="cart_product">
                                        <img alt={p.name} src={p.img} className="cart_img"/>
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
                            })
                    }
                    {sum}
                </div>
            </div>
        );
    }
;

export default Cart;