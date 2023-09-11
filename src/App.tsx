import './CSS/App.css';
import Header from './components/Header'
import React, {useEffect} from "react";
import {useTypedSelector} from "./hook/useTypedSelector";
import {fetchProduct} from "./reducer/Product/customer";
import {ICart} from "./typeScript/typescript";
import {useTypedDispatch} from "./hook/useTypedDispatch";
import {addCart} from "./reducer/Cart/cartThunk"

function App() {
    const dispatch = useTypedDispatch()
    const product = useTypedSelector(state =>  Object.values(state.info))
    useEffect(() => {dispatch(fetchProduct())}, [])

    async function addServer(p: ICart) {
        // @ts-ignore
        await dispatch(addCart(p))
    }

    return (
        <div className="App">
            <Header/>
            <h1>Shop</h1>
            <div className="list">
                {product.length > 0 ?
                    product.map((p) =>
                        <div key={p.id} className="product">
                            <img src={p.img} className="product_img"/>
                            <div className="product_price">{p.price}p</div>
                            <div className="product_name">{p.name}</div>
                            <button onClick={() => addServer(p)}
                                    className="product_button">В корзину
                            </button>
                        </div>)
                    :
                    <h1>Все закончилось</h1>}

            </div>
        </div>
)};

export default App;
