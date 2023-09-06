import './CSS/App.css';
import Header from './components/Header'
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {addCartAction} from "./reducer/cartReducer";
import {useTypedSelector} from "./hook/useTypedSelector";
import {fetchProduct} from "./reducer/customer";

function App() {
    const dispatch = useDispatch()
    const product = useTypedSelector(state => state.info)
    useEffect(() => {dispatch(fetchProduct())}, [])
    const addCart = (p: any) => {
        const qwe: any = {
            id: p.id,
            name: p.name,
            img: p.img,
            price: p.price,
            about: p.about,
            count: 1,
        }
        dispatch(addCartAction(qwe))
    }

    return (
        <div className="App">
            <Header/>
            <h1>Shop</h1>
            <div className="list">
                {product.length > 0 ?
                    product.map((p: any) =>
                        <div key={p.id} className="product">
                            <img src={p.img} className="product_img"/>
                            <div className="product_price">{p.price}</div>
                            <div className="product_name">{p.name}</div>
                            <button onClick={() => addCart(p)}
                                    className="product_button">В корзину
                            </button>
                        </div>)
                    :
                    <h1>Все закончилось</h1>}
            </div>
        </div>
    );
}

export default App;
