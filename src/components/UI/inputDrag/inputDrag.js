import React, { useState } from 'react'
import ItemTripModal from '../../ItemTripModal/ItemTripModal'
import Modalpr from '../../modalpr/modalpr'
import Opros from '../../Opros/opros'
import './inputDrag.css'

export default function InputDrag({ ...props }) {

    const [value, setValue] = useState('')
    const [field, setfield] = useState(false)
    const [dayModalActtive, setDaylActive] = useState(false)
    const [quizModalActive, setQuizModalActive] = useState(false)
    const [time, setTime] = useState(null)
    const [showQuiz, setShowQuiz] = useState(false)
    const [doneQuiz,setDoneQuiz]=useState([])


    return (
        <div onDoubleClick={() => setDaylActive(true)}>
            {!field &&
                <input {...props}
                    onBlur={() => setfield(true)} onChange={event => setValue(event.target.value)} value={value} className='draginput' type='text' />
            }
            {field &&
                <div
                    className='dragdiv'
                    onClick={() => setfield(false)}
                    {...props}
                >
                    {time ? <p>{time}</p> : null}
                    {value}
                </div>
            }
            <Modalpr active={dayModalActtive} setActive={setDaylActive} >
                <ItemTripModal
                    showQuiz={showQuiz}
                    setActive={setDaylActive}
                    active={dayModalActtive}
                    value1={value}
                    channgeValue={setValue}
                    setQuizModalActive={setQuizModalActive}
                    setTimeModal={setTime}
                    timeValue={time}
                    doneQuiz={doneQuiz}
                />
            </Modalpr>
            <Modalpr active={quizModalActive} setActive={setQuizModalActive}>
                <Opros
                setDoneQuiz={setDoneQuiz}
                setActive={setQuizModalActive} 
                setShowQuiz={setShowQuiz}
                />
            </Modalpr>
        </div>
    )
}
