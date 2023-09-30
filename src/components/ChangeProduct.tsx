import React from 'react';
import { useTypedDispatch } from "../hook/useTypedDispatch";
import { changeProduct, deleteProduct } from "../reducer/Product/productThunk";
import '../CSS/MyForm.css'
import MyButton from '../components/UPI/button/MyButton'

const MyForm = ({ product, setVisible }: any) => {
    const dispatch = useTypedDispatch()
    let newProduct = {
        id: product.id,
        name: product.name,
        img: product.img,
        price: product.price,
        about: product.about,
        type: product.type,
    }
    async function change() {
        setVisible(false)
        console.log(newProduct)
        // @ts-ignore
        dispatch(changeProduct(newProduct))
    }
    async function changeDelete() {
        setVisible(false)
        // @ts-ignore
        dispatch(deleteProduct(newProduct.id))
    }

    return (
        <div className="form">
            <h1>Редактирование продукта</h1>
            <p />Имя:<input className='form__input' onChange={event => newProduct.name = event.target.value} defaultValue={product.name} type={"text"} />
            <p />Ссылка на фото:<input className='form__input' onChange={event => newProduct.img = event.target.value} defaultValue={product.img} type={"text"} />
            <p />Цена:<input className='form__input' onChange={event => newProduct.price = event.target.value} defaultValue={product.price} type={"text"} />
            <p />Описание товара:<input className='form__input' onChange={event => newProduct.about = event.target.value} defaultValue={product.about} type={"text"}/>
            <p />Тип товара:
            <select className='form__input' onChange={event => newProduct.type = event.target.value} defaultValue={product.type}>
                <option value={"Новые картинки"}>Новые мемы</option>
                <option value={"Картинки на все случаи жизни"}>Базовые мемы</option>
                <option value={"Картинки с котенком"}>Мемы с котенком</option>
            </select>
            <div className='form__buttons'>
                <MyButton onClick={change}>Сохранить изменения</MyButton>
                <MyButton onClick={changeDelete}>Удалить продукт</MyButton>
            </div>
        </div>
    );
};

export default MyForm;