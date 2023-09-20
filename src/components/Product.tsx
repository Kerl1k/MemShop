import React, {useState} from 'react';
import {ICart} from "../typeScript/typescript";
import {useTypedSelector} from "../hook/useTypedSelector";
import {addCart} from "../reducer/Cart/cartThunk";
import MyModal from "./UPI/Modal/MyModal";
import MyForm from "./ChangeProduct";
import {useTypedDispatch} from "../hook/useTypedDispatch";


const Product = ({product}: any, ) => {
    const change = require('../img/change.png')
    const dispatch = useTypedDispatch()
    const login = useTypedSelector(state => state.login.isLoggedIn)
    const [modal, setModal] = useState(false)
    async function addServer(p: ICart) {
        // @ts-ignore
        dispatch(addCart(p))
    }
    return (
        <div key={product.id} className="product">
            <div className="product__change_container">
            <img src={change}
            className="button_change" 
            onClick={() => setModal(true)}/>
            </div>
            <img alt={product.name} src={product.img} className="product_img"/>
            <div className="product_price">{product.price}p</div>
            <div className="product_name">{product.name}</div>
            {login ?
                <button onClick={() => addServer(product)}
                        className="product_button">В корзину
                </button>
                :
                <></>
            }
            <MyModal visible={modal} setVisible={setModal}>
                <MyForm setVisible={setModal} product={product}></MyForm>
            </MyModal>
        </div>
    );
};

export default Product;