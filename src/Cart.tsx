import React from 'react';
import Header from './components/Header'
import "./CSS/Cart.css"
import {useTypedSelector} from "./hook/useTypedSelector";
import {getCartAction, addCartAction} from "./reducer/cartReducer";
import {useDispatch} from "react-redux";

const Cart = () => {
        const cart = useTypedSelector(state => state.cart)
        const cartArray = Object.values(cart)
        const dispatch = useDispatch()
        const getCart = (p: any) => {
            const qwe: any = {
                id: p.id,
                name: p.name,
                img: p.img,
                price: p.price,
                about: p.about,
                count: p.count,
            }
            dispatch(getCartAction(qwe))
        }
    const addCart = (p: any) => {
        const qwe: any = {
            id: p.id,
            name: p.name,
            img: p.img,
            price: p.price,
            about: p.about,
            count: p.count,
        }
        dispatch(addCartAction(qwe))
    }
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
                                        <img src={p.img} className="product_img"/>
                                        <div className="product_name">{p.name}</div>
                                        <div className="product_right">
                                            <div className="product_price">{p.price}</div>
                                            <div className="product_count">
                                                <button className="button_count" onClick={()=>getCart(p)}>-</button>
                                                <div className="product_count_number">{p.count}</div>
                                                <button className="button_count" onClick={()=>addCart(p)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        );
    }
;

export default Cart;