import React, { useState, useEffect } from 'react'
import ItemTripModal from '../../ItemTripModal/ItemTripModal'
import Modalpr from '../../modalpr/modalpr'
import Opros from '../../Opros/opros'
import './inputDrag.css'

export default function InputDrag({ ...props }) {

    const [value, setValue] = useState('')
    const [field, setfield] = useState(false)
    const [dayModalActtive, setDaylActive] = useState(false)
    const [quizModalActive, setQuizModalActive] = useState(false)
    const [time, setTime] = useState(String)
    const [showQuiz, setShowQuiz] = useState(false)
    const [doneQuiz, setDoneQuiz] = useState([])
    const [comment, setComment] = useState(String)

    const CheclQuiz = () => {
        if (props.quiz === null || props.quiz === undefined) {
            setShowQuiz(false)
        } else {
            setShowQuiz(true)
            setDoneQuiz(props.quiz)
        }
    }

    useEffect(() => {
        setValue(props.name)
        setTime(props.timeAction)
        setComment(props.comm)
        CheclQuiz()
    }, [])

    return (
        <>
            {
                props.role === 0 || props.role === 1
                    ?
                    <div onDoubleClick={(e) => {
                        e.target.blur()
                        setDaylActive(true)
                    }}>
                        {field &&
                            <input {...props}
                                onBlur={() => setfield(false)} onChange={event => setValue(event.target.value)} value={value} className='draginput' type='text' />
                        }
                        {!field &&
                            <div
                                className='dragdiv'
                                onClick={() => setfield(true)}
                                {...props}
                            >
                                {time ? <p>{time}</p> : null}
                                {value}
                            </div>
                        }
                        <Modalpr active={dayModalActtive} setActive={setDaylActive} >
                            <ItemTripModal
                                dayId={props.DayId}
                                quiz={props.quiz}
                                comment={comment}
                                showQuiz={showQuiz}
                                setActive={setDaylActive}
                                active={dayModalActtive}
                                value1={value}
                                channgeValue={setValue}
                                setQuizModalActive={setQuizModalActive}
                                setTimeModal={setTime}
                                timeValue={time}
                                doneQuiz={doneQuiz}
                                day={props.day}
                                dayWeek={props.dayWeek}
                                role={props.role}
                                idAction={props.id}
                            />
                        </Modalpr>
                        <Modalpr active={quizModalActive} setActive={setQuizModalActive}>
                            <Opros
                                id={props.id}
                                setDoneQuiz={setDoneQuiz}
                                setActive={setQuizModalActive}
                                setShowQuiz={setShowQuiz}
                            />
                        </Modalpr>
                    </div>
                    :
                    <div onDoubleClick={(e) => {
                        e.target.blur()
                        setDaylActive(true)
                    }}>
                            <div
                                className='dragdiv'
                                onClick={() => setfield(true)}
                                {...props}
                            >
                                {time ? <p>{time}</p> : null}
                                {value}
                            </div>
                        <Modalpr active={dayModalActtive} setActive={setDaylActive} >
                            <ItemTripModal
                                role={props.role}
                                comment={comment}
                                showQuiz={showQuiz}
                                setActive={setDaylActive}
                                active={dayModalActtive}
                                value1={value}
                                channgeValue={setValue}
                                setQuizModalActive={setQuizModalActive}
                                setTimeModal={setTime}
                                timeValue={time}
                                doneQuiz={doneQuiz}
                                day={props.day}
                                dayWeek={props.dayWeek}
                            />
                        </Modalpr>
                    </div>
            }
        </>
    )
}
