import React, { useState } from 'react'
import './InputQuiz.css'
import crossBl from '../../../img/greyCross.png'

export default function InputQuiz({ id, remove, setAnswer }) {

    const [value,setValue]=useState('')

    const saveAnswer=()=>{
        setAnswer(arr=>{
            const newArr = arr.filter(item => item.id !== id);
            return [...newArr, {id:id,value:value}].sort((a, b) => a.id - b.id);
        })
    }

    return (
        <div className='input-quiz'>
            <input onBlur={saveAnswer} value={value} onChange={e=>setValue(e.target.value)}/>
            <img src={crossBl} alt='asd' onClick={() => remove(id)} />
        </div>
    )
}
