import React from 'react';
import { useTypedDispatch } from "../hook/useTypedDispatch";
import { changeProduct, deleteProduct } from "../reducer/Product/productThunk";
import { useTypedSelector } from "../hook/useTypedSelector";
import '../CSS/MyForm.css'
import MyButton from './button/MyButton';

const MyForm = ({ product, setVisible }: any) => {
    const dispatch = useTypedDispatch()
    const productList = useTypedSelector(state => Object.values(state.info))
    let newProduct = {
        name: product.name,
        img: product.img,
        price: product.price,
        about: product.about
    }
    async function change() {
        setVisible(false)
        // @ts-ignore
        dispatch(changeProduct(productList, newProduct))
    }

    return (
        <div className="form">
            <h1>Добавление продукта</h1>
            <p />Имя:<input className='form__input' onChange={event => newProduct.name = event.target.value} defaultValue={product.name} type={"text"} />
            <p />Ссылка на фото:<input className='form__input' onChange={event => newProduct.img = event.target.value} defaultValue={product.img} type={"text"} />
            <p />Цена:<input className='form__input' onChange={event => newProduct.price = event.target.value} defaultValue={product.price} type={"text"} />
            <p />Описание товара:<input className='form__input' onChange={event => newProduct.about = event.target.value} defaultValue={product.about} type={"text"} />
            <div className='form__buttons'>
                <MyButton onClick={change}>Добавить продукт</MyButton>
            </div>
        </div>
    );
};

export default MyForm;