import React, { useState } from 'react'
import ItemTripModal from '../../ItemTripModal/ItemTripModal'
import Modalpr from '../../modalpr/modalpr'
import Opros from '../../Opros/opros'
import './inputDrag.css'

export default function InputDrag({...props}) {

    const [value, setValue] = useState('')
    const [field, setfield] = useState(false)
    const [dayModalActtive, setDaylActive] = useState(false);
    const [quizModalActive,setQuizModalActive]=useState(false);


    return (
        <div onDoubleClick={() => setDaylActive(true)}>
            {!field &&
                <input {...props}
                draggable='true' onBlur={() => setfield(true)} onChange={event => setValue(event.target.value)} value={value} className='draginput' type='text' />
            }
            {field &&
                <div
                    className='dragdiv'
                    onClick={() => setfield(false)}
                    {...props}
                    draggable='true'>
                    {value}
                </div>
            }
            <Modalpr active={dayModalActtive} setActive={setDaylActive} >
                <ItemTripModal setActive={setDaylActive} active={dayModalActtive} value1={value} channgeValue={setValue} setQuizModalActive={setQuizModalActive}/>
            </Modalpr>
            <Modalpr active={quizModalActive} setActive={setQuizModalActive}>
                <Opros/>
            </Modalpr>
        </div>
    )
}
