import './CSS/App.css';
import Header from './components/Header'
import React from "react";
import {useDispatch} from "react-redux";
import {addCartAction} from "./reducer/cartReducer";
import {useTypedSelector} from "./hook/useTypedSelector";
function App() {

    const dispatch = useDispatch()
    const cart = useTypedSelector(state =>  state.cart)
    const product = useTypedSelector(state => state.info)

    const addCart = (id:number) => {
        const qwe:any = {
            id: id,
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
                    product.map( (p)=>
                        <div key={p.id} className="product">
                            <div className="product_img">{p.img}</div>
                            <div className="product_price">{p.price}</div>
                            <div className="product_name">{p.name}</div>
                            <button onClick={() => addCart(p.id)}
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
