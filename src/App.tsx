import './CSS/App.css';
import Header from './components/Header'
import React, {useEffect} from "react";
import {useTypedSelector} from "./hook/useTypedSelector";
import {fetchProduct} from "./reducer/Product/customer";
import {useTypedDispatch} from "./hook/useTypedDispatch";
import Product from "./components/Product";

function App() {
    const dispatch = useTypedDispatch()
    const product = useTypedSelector(state => Object.values(state.info))
    // useEffect(() => {
    //     dispatch(fetchProduct())
    // }, [])


    return (
        <div className="App">
            <Header/>
            <h1>Shop</h1>
            <div className="list">

                {product.length > 0 ?
                    product.map((p:any) =>
                        <Product key={p.id} product={p}></Product>
                    )
                    :
                    <h1>Все закончилось</h1>}

            </div>
        </div>
    )
};

export default App;
