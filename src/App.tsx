import './CSS/App.css';
import Header from './components/Header'
import React, {useEffect, useState} from "react";
import {useTypedSelector} from "./hook/useTypedSelector";
import {fetchProduct} from "./reducer/Product/customer";
import {useTypedDispatch} from "./hook/useTypedDispatch";
import Product from "./components/Product";
import MyButton from './components/button/MyButton';
import MyModal from './components/MyModal';
import AddProduct from './components/AddProduct';
import Footer from './components/Footer';

function App() {
    const dispatch = useTypedDispatch()
    const product = useTypedSelector(state => Object.values(state.info))
    useEffect(() => {
        dispatch(fetchProduct())
    }, [])
    const [modal, setModal] = useState(false)

    return (
        <div className="App">
            <Header/>
            <h1>Shop</h1>
                <MyButton onClick={()=> setModal(true)}>Добавить продукт</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <AddProduct setVisible={setModal} product={product}/>
            </MyModal>
            <div className="list">
                {product.length > 0 ?
                    product.map((p:any) =>
                        <Product key={p.id} product={p}></Product>
                    )
                    :
                    <h1>Все закончилось</h1>}

            </div>
            <Footer/>
        </div>
    )
};

export default App;
