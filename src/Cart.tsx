import React, {useMemo} from 'react';
import Header from './components/Header'
import "./Cart.css"

const Cart = () => {
    const [carts, setCarts] = React.useState<any>([])
    // useMemo(() => {
    //     setCarts(JSON.parse(localStorage.getItem('cart')))
    // }, [])

    function ClearCart() {
        localStorage.setItem('cart', '')
        setCarts([])
    }

    return (
        <div>
            <Header/>
            <h1>CART</h1>
            <button onClick={ClearCart}>Очистить корзину</button>
            <div className="cart_list">
                {/*{*/}
                {/*    carts.length === 0 ?*/}
                {/*        <h1>НИХУЯ НЕТ</h1>*/}
                {/*        :*/}
                {/*        carts.map(p => {*/}
                {/*            return (*/}
                {/*                <div className="cart_product">*/}
                {/*                    <div className="product_img">{p.img}</div>*/}
                {/*                    <div className="product_name">{p.name}</div>*/}
                {/*                    <div className="product_price">{p.price}</div>*/}
                {/*                </div>*/}
                {/*            )*/}
                {/*        })*/}
                {/*}*/}
            </div>
        </div>
    );
};

export default Cart;