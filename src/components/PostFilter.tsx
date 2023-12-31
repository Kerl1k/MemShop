import React from 'react';
import MySelect from "./UPI/MySelect/MySelect"
import '../CSS/PostFilter.css'

const PostFilter = ({filter, setFilter}:any) => {
    return (
        <div className='filter'>
            <input
                className='input'
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            />
            <MySelect
                value={filter.sort}
                onChange={(selectedSort:any) => setFilter({...filter, sort: selectedSort})}
                defaultValue="Фильтр"
                options={[{ type: "18+" }, { type: "Мемы с котенком" }, { type: " " }]} 
            />
        </div>
    );
};

export default PostFilter;