import './CSS/App.css';
import Header from './components/Header'
import { useEffect, useState } from "react";
import { useTypedSelector } from "./hook/useTypedSelector";
import {fetchSerchProduct } from "./reducer/Product/customer";
import { useTypedDispatch } from "./hook/useTypedDispatch";
import MyButton from './components/UPI/button/MyButton'
import MyModal from './components/UPI/Modal/MyModal';
import AddProduct from './components/AddProduct';
import Footer from './components/Footer';
import PostFilter from './components/PostFilter';
import ProductList from './components/ProductList';
import { IProduct } from './typeScript/typescript';
import { useDebounce } from './hook/useDebounce';
import ReactGA from 'react-ga'

function App() {
    const dispatch = useTypedDispatch()
    const product: IProduct[] = useTypedSelector(state => Object.values(state.info))
    const user = useTypedSelector(state => Object.values(state.login))
    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const debouncedSearch = useDebounce(filter);
    useEffect(() => {
        const loadUsers = async () => {
            await dispatch(fetchSerchProduct(filter))
        };
        loadUsers();
    }, [debouncedSearch]);

    return (
        <div className="App">
            <Header />
            <h1 style={{ display: "flex", justifyContent: "center", color: "pink" }}>MemShop</h1>
            {user[0].type === "admin" ?
                <MyButton onClick={() => setModal(true)}>Добавить продукт</MyButton>
                :
                <div />
            }
            <MyModal visible={modal} setVisible={setModal}>
                <AddProduct setVisible={setModal} product={product} />
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter} />
            <ProductList list={product} />
            <Footer />
        </div>
    )
};

export default App;
