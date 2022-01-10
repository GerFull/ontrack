import React from 'react';
import './inputChange.css'

export default function InputChange({label,value,type,setValue,textstyle,text}) {
    return (
        <div className='inputchange'>
            <p className={textstyle}>{label}</p>
            <input placeholder={text} onChange={event => setValue(event.target.value)} value={value} type={type}/>
        </div>
    )
}
