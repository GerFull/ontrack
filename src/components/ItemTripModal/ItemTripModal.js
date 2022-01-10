import React, { useState, useEffect } from 'react'
import './ItemTripModal.css'
import calendar from '../../img/blackcalendar.png'
import crossBl from '../../img/crossBlack.png'
import Bl from '../../img/blackCross.png'
import trash from '../../img/trash.png'
import ButtonBlue from '../UI/buttonBlue/buttonBlue'
import DoneQiuz from '../DoneQiuz/DoneQiuz'


export default function ItemTripModal({ active, 
    timeValue, 
    channgeValue, 
    value1, 
    setActive, 
    setQuizModalActive, 
    setTimeModal, 
    showQuiz,
    doneQuiz,
    comment,
    quiz
}) {

    const [value2, setValue] = useState('')
    const [time, setTime] = useState('')




    const tripvalue = () => {
        channgeValue(value2)
        setTimeModal(time)
    }

    useEffect(() => {
        setValue(value1)
        setTime(timeValue)
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
                <div className='item-trip-modal__inputs'>
                    <input type='time' value={time} onChange={(e) => setTime(e.target.value)} />
                    <input className='input__event' value={value2} onChange={(e) => setValue(e.target.value)} />
                </div>
                <div className='item-trip-modal__discr'>
                    <p>Коментарии</p>
                    <textarea value={comment} placeholder='Добавьте заметку о событии, чтобы ничего не упустить' className='text-area' />
                </div>
                {
                    !showQuiz && <div className='item-trip-modal__quiz' onClick={() => setQuizModalActive(true)}>
                        <img src={Bl} alt='asda' />
                        <p>Добавить опрос</p>
                    </div>
                }
                <div>
                    <input type='file' />
                </div>
                {
                    showQuiz && <DoneQiuz QuizArr={doneQuiz}/>
                }
                <div className='item-trip-modal__submit'>
                    <div className='item-trip-modal__btn'>
                        <ButtonBlue styleclass='button__bluemain' onClick={tripvalue} label='Сохрнаить изменения' />
                    </div>
                    <div className='item-trip-modal__delete'>
                        <img src={trash} alt='trash' />
                        <p>Удалить событие</p>
                    </div>
                </div>
            </div>
            <img className='absolute-cross' src={crossBl} alt='crossbl' onClick={() => setActive(false)} />
        </div>
    )
}
