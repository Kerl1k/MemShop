import React from 'react';
import { useTypedDispatch } from "../hook/useTypedDispatch";
import { changeProduct, deleteProduct } from "../reducer/Product/productThunk";
import { useTypedSelector } from "../hook/useTypedSelector";
import '../CSS/MyForm.css'
import MyButton from '../components/UPI/button/MyButton'

const MyForm = ({ product, setVisible }: any) => {
    const dispatch = useTypedDispatch()
    const productList = useTypedSelector(state => Object.values(state.info))
    let newProduct = {
        name: product.name,
        img: product.img,
        price: product.price,
        about: product.about,
        type: product.type
    }
    async function change() {
        setVisible(false)
        // @ts-ignore
        dispatch(changeProduct(productList, newProduct))
    }

    return (
        <div className="form">
            <h1>Добавление продукта</h1>
            <p />Имя:<input className='form__input' onChange={event => newProduct.name = event.target.value} type={"text"} />
            <p />Ссылка на фото:<input className='form__input' onChange={event => newProduct.img = event.target.value} type={"text"} />
            <p />Цена:<input className='form__input' onChange={event => newProduct.price = event.target.value} type={"text"} />
            <p />Описание товара:<input className='form__input' onChange={event => newProduct.about = event.target.value} type={"text"} />
            <p />Тип товара:
            <select className='form__input' onChange={event => newProduct.type = event.target.value}>
                <option value={"Новые мемы"}>Новые мемы</option>
                <option value={"Базовые мемы"}>Базовые мемы</option>
                <option value={"Мемы с котенком"}>Мемы с котенком</option>
                <option value={"18+"}>18+</option>
            </select>
            <div className='form__buttons'>
                <MyButton onClick={change}>Добавить продукт</MyButton>
            </div>
        </div>
    );
};

export default MyForm;