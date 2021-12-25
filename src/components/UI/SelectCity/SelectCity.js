import React from 'react'
import './SelectCity.css'

export default function SelectCIty({setValue}) {


    return (
        <>
            <p className='select-city__tittle'>Город</p>
            <select className='select-city' onChange={e => setValue(e.target.value)}>
                <option selected disabled>Выбор города</option>
                <option value='1'>Москва</option>
                <option value='2'>Санкт-Петрбург</option>
                <option value='3'>Екатеринбург</option>
                <option value='4'>Казань</option>
                <option value='5'>Сочи</option>
                <option value='6'>Калининград</option>
            </select>
        </>
    )
}
