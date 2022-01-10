import React, { useState } from 'react'
import check from '../../img/blueCheck.png'
import './OptionAnswer.css'

export default function OptionAnswer({ text }) {

    const [clickAnswer, setClickAnwer] = useState(false)

    return (
        <>
        {
            clickAnswer ? 
            <div className='option-cheked'>
                <p>{text}</p>
                <img src={check} alt='check'/>
                <p className='option-cheked__procent'>50%</p>
            </div> :
            <div className='option-answer' onClick={() => setClickAnwer(true)} >
                <p>{text}</p>
            </div>
        }
        </>
    )
}
