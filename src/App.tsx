import './CSS/App.css';
import Header from './components/Header'
import React, { useEffect, useMemo, useState } from "react";
import { useTypedSelector } from "./hook/useTypedSelector";
import { fetchProduct } from "./reducer/Product/customer";
import { useTypedDispatch } from "./hook/useTypedDispatch";
import MyButton from './components/UPI/button/MyButton'
import MyModal from './components/UPI/Modal/MyModal';
import AddProduct from './components/AddProduct';
import Footer from './components/Footer';
import PostFilter from './components/PostFilter';
import ProductList from './components/ProductList';

function App() {
    const dispatch = useTypedDispatch()
    const product = useTypedSelector(state => Object.values(state.info))
    useEffect(() => {
        dispatch(fetchProduct())
    }, [])
    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState({ sort: '', query: '' })

    const sortedProduct = useMemo(() => {
        if (filter.sort) {
            return product.filter((prod:any)=> prod.type === filter.sort)
        }
        return product
    }, [filter.sort, product])

    const sortedAndSerchedProduct: any = useMemo(() => {
        return sortedProduct.filter((product:any) => product.name?.includes(filter.query))
    }, [filter.query, sortedProduct])

    return (
        <div className="App">
            <Header />
            <h1>Shop</h1>
            <MyButton onClick={() => setModal(true)}>Добавить продукт</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <AddProduct setVisible={setModal} product={product} />
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter} />
            <ProductList list={sortedAndSerchedProduct}/>
            <Footer />
        </div>
    )
};

export default App;
