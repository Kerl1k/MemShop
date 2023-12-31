import React from 'react';
import '../MySelect/MySelect.css'

const MySelect = ({options, defaultValue, value, onChange}:any) => {
    return (
        <select
            className='select'
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option value="">{defaultValue}</option>
            {options.map((option:any) =>
                <option key={option.type} value={option.type}>
                    {option.type}
                </option>
            )}
        </select>
    );
};
export default MySelect;