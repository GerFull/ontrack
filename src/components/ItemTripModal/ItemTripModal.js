import React, { useState, useEffect } from 'react'
import './ItemTripModal.css'
import calendar from '../../img/blackcalendar.png'
import crossBl from '../../img/crossBlack.png'


export default function ItemTripModal({ active, channgeValue, value1, setActive, setQuizModalActive }) {

    let [value2, setValue] = useState('')

    const tripvalue = () => {
        channgeValue(value2)
    }
    useEffect(() => {
        setValue(value1)
    }, [active])

    return (
        <div className='item-trip-modal__size'>
            <div className='item-trip-modal__content'>
                <div className='item-trip-modal__data'>
                    <img src={calendar} alt='blackcalendar.png' />
                    <div className='item-trip-modal__day-year'>
                        Вт, 1.10.2021
                    </div>
                </div>
                <div className='item-trip-modal__inpits'>
                    <input type='time' />
                    <input value={value2} onChange={(e) => setValue(e.target.value)} />
                </div>
                <div className='item-trip-modal__discr'>
                    <p>Коментарии</p>
                    <textarea placeholder='Добавьте заметку о событии, чтобы ничего не упустить' className='text-area' />
                </div>
                <div className='item-trip-modal__quiz' onClick={() => setQuizModalActive(true)}>
                    Добавить опрос
                </div>
                <div>
                    <input type='file' />
                </div>
                <button onClick={() => tripvalue()}>Отправить</button>
            </div>
            <img className='absolute-cross' src={crossBl} alt='crossbl' onClick={() => setActive(false)} />
        </div>
    )
}
