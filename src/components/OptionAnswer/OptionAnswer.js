import Cookies from 'js-cookie'
import React, { useState } from 'react'
import check from '../../img/blueCheck.png'
import OnTrackService from '../../service/service'
import './OptionAnswer.css'

export default function OptionAnswer({ text,id,idQuiz }) {

    console.log(idQuiz)
    const ontrack = new OnTrackService();
    const userToken = Cookies.get('auth-token')
    const [clickAnswer, setClickAnwer] = useState(false)


    const submitAnswer=()=>{
        setClickAnwer(true)
        ontrack.ChoiseQuiz(userToken,idQuiz,id).then(res=> console.log(res.data)).catch(e=>console.log(e))
    }

    return (
        <>
        {
            clickAnswer ? 
            <div className='option-cheked'>
                <p>{text}</p>
                <img src={check} alt='check'/>
                <p className='option-cheked__procent'>50%</p>
            </div> :
            <div className='option-answer' onClick={submitAnswer} >
                <p>{text}</p>
            </div>
        }
        </>
    )
}
