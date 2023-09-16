import React, {useState} from 'react';
import {ICart} from "../typeScript/typescript";
import {useTypedSelector} from "../hook/useTypedSelector";
import {addCart} from "../reducer/Cart/cartThunk";
import MyModal from "./MyModal";
import MyForm from "./MyForm";
import {useTypedDispatch} from "../hook/useTypedDispatch";

const Product = ({product}: any, ) => {
    const dispatch = useTypedDispatch()
    const login = useTypedSelector(state => state.login.isLoggedIn)
    const [modal, setModal] = useState(false)
    async function addServer(p: ICart) {
        // @ts-ignore
        await dispatch(addCart(p))
    }
    return (
        <div key={product.id} className="product">
            <button className="button_change" onClick={() => setModal(true)}>Q</button>
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
                <MyForm product={product}></MyForm>
            </MyModal>
        </div>
    );
};

export default Product;