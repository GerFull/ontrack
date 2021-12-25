import React from 'react';
import './inputSearch.css'
import imgsearch from '../../../img/search.png'

export default function InputSearch({ value, setValue, cleanArray, styleClass }) {


    return (
        <div className='search-block'>
            <img className='imgsearch' src={imgsearch} alt='imgsearch'/>
            <input
                onBlur={() => setTimeout(cleanArray,200)}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                className={styleClass}
                placeholder='Найти место для путешествия' />
        </div>

    )
}
