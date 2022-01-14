import React, { useState, useEffect } from 'react'
import './ItemTripModal.css'
import calendar from '../../img/blackcalendar.png'
import crossBl from '../../img/crossBlack.png'
import Bl from '../../img/blackCross.png'
import trash from '../../img/trash.png'
import ButtonBlue from '../UI/buttonBlue/buttonBlue'
import DoneQiuz from '../DoneQiuz/DoneQiuz'
import OnTrackService from '../../service/service'
import Cookies from 'js-cookie'


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
    role,
    day,
    dayWeek,
    idAction,
    dayId,
}) {

    const [value2, setValue] = useState('')
    const [time, setTime] = useState('')
    const [description, setDescription] = useState()
    const DayOfWeek = dayWeek[0].toUpperCase() + dayWeek.slice(1);
    const ontrack = new OnTrackService()
    const userToken = Cookies.get('auth-token')



    const tripvalue = () => {
        channgeValue(value2)
        setTimeModal(time)
        ontrack.EditAction(userToken, idAction, value2, time, description).then(res => console.log(res)).catch(e => console.log(e))
        setActive(false)
    }

    const AddAction = () => {
        channgeValue(value2)
        setTimeModal(time)
        ontrack.AddAction(userToken, dayId, value2, time, description)
        setActive(false)
    }

    const DeleteAction = () => {
        ontrack.DeleteAction(userToken, idAction)
        setActive(false)
    }

    useEffect(() => {
        setValue(value1)
        setTime(timeValue)
        setDescription(comment)
    }, [active])

    return (
        <div className='item-trip-modal__size'>
            <div className='item-trip-modal__content'>
                <div className='item-trip-modal__data'>
                    <img src={calendar} alt='blackcalendar.png' />
                    <div className='item-trip-modal__day-year'>
                        {DayOfWeek}, {day}
                    </div>
                </div>
                {
                    role === 0 || role === 1 ?
                        <div className='item-trip-modal__inputs'>
                            <input type='time' value={time} onChange={(e) => setTime(e.target.value)} />
                            <input className='input__event' value={value2} onChange={(e) => setValue(e.target.value)} />
                        </div>
                        :
                        <div className='item-trip-modal__inputs'>
                            <input type='time' value={time} />
                            <input className='input__event' value={value2} />
                        </div>
                }
                <div className='item-trip-modal__discr'>
                    <p>Коментарии</p>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Добавьте заметку о событии, чтобы ничего не упустить' className='text-area' />
                </div>
                {
                    role === 1 || role === 0 ?
                        !showQuiz &&
                        <div className='item-trip-modal__quiz' onClick={() => setQuizModalActive(true)}>
                            <img src={Bl} alt='asda' />
                            <p>Добавить опрос</p>
                        </div>
                        : null
                }
                {
                    showQuiz && <DoneQiuz QuizArr={doneQuiz} />
                }

                {
                    role === 0 || role === 1 ? <div className='item-trip-modal__submit'>

                        <div className='item-trip-modal__btn'>
                            {
                                idAction === 0 ?
                                    <ButtonBlue styleclass='button__bluemain' onClick={AddAction} label='Создать событие' />
                                    :
                                    <ButtonBlue styleclass='button__bluemain' onClick={tripvalue} label='Сохранить изменения' />
                            }

                        </div>
                        {
                            idAction === 0 ? null :
                                <div onClick={DeleteAction} style={{ cursor: 'pointer' }} className='item-trip-modal__delete'>
                                    <img src={trash} alt='trash' />
                                    <p>Удалить событие</p>
                                </div>
                        }

                    </div> : null
                }
            </div>
            <img className='absolute-cross' src={crossBl} alt='crossbl' onClick={() => setActive(false)} />
        </div>
    )
}
