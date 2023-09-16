import React from 'react';
import {useTypedDispatch} from "../hook/useTypedDispatch";
import {changeProduct} from "../reducer/Product/productThunk";
import {useTypedSelector} from "../hook/useTypedSelector";
import '../CSS/MyForm.css'

const MyForm = ({product}:any) => {
    const dispatch = useTypedDispatch()
    const productList = useTypedSelector(state => Object.values(state.info))
    let newProduct = {
        id: product.id,
        name: product.name,
        img: product.img,
        price: product.price,
        about: product.about
    }
    async function change() {
        // @ts-ignore
        await dispatch(changeProduct(productList, newProduct))
    }
    return (
        <div className="Form">
            <input onChange={event => newProduct.name = event.target.value} defaultValue={product.name} type={"text"}/>
            <input onChange={event => newProduct.img = event.target.value} defaultValue={product.img} type={"text"}/>
            <input onChange={event => newProduct.price = event.target.value} defaultValue={product.price} type={"text"}/>
            <input onChange={event => newProduct.about = event.target.value} defaultValue={product.about} type={"text"}/>
            <button onClick={change}>Сохранить изменения</button>
        </div>
    );
};

export default MyForm;