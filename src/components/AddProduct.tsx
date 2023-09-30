import { useTypedDispatch } from "../hook/useTypedDispatch";
import { addProduct } from "../reducer/Product/productThunk";
import '../CSS/MyForm.css'
import MyButton from '../components/UPI/button/MyButton'
import { useState } from "react";

const MyForm = ({setVisible }: any) => {
    const dispatch = useTypedDispatch()
    const [newProduct, setNewProduct] = useState({name: '', img: '', about: '', price: '', type: ''})
    async function change() {
        setVisible(false)
        // @ts-ignore
        dispatch(addProduct(newProduct))
    }

    return (
        <div className="form">
            <h1>Добавление продукта</h1>
            <p />Имя:<input className='form__input' onChange={e => setNewProduct({...newProduct, name: e.target.value})} type={"text"} />
            <p />Ссылка на фото:<input className='form__input' onChange={e => setNewProduct({...newProduct, img: e.target.value})} type={"text"} />
            <p />Цена:<input className='form__input' onChange={e => setNewProduct({...newProduct, price: e.target.value})} type={"text"} />
            <p />Описание товара:<input className='form__input' onChange={e => setNewProduct({...newProduct, about: e.target.value})} type={"text"} />
            <p />Тип товара:
            <select className='form__input' onChange={e => setNewProduct({...newProduct, type: e.target.value})}>
                <option value={"Новые картинки"}>Новые мемы</option>
                <option value={"Картинки на все случаи жизни"}>Базовые мемы</option>
                <option value={"Картинки с котенком"}>Мемы с котенком</option>
            </select>
            <div className='form__buttons'>
                <MyButton onClick={change}>Добавить продукт</MyButton>
            </div>
        </div>
    );
};

export default MyForm;