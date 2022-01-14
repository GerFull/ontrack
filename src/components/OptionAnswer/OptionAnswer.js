import Cookies from 'js-cookie'
import React, { useState, useEffect } from 'react'
import check from '../../img/blueCheck.png'
import OnTrackService from '../../service/service'
import './OptionAnswer.css'

export default function OptionAnswer({ text, id, idQuiz, checkAnswer,clickable,setClickable }) {

    const ontrack = new OnTrackService();
    const userToken = Cookies.get('auth-token')
    
    const userName = localStorage.getItem('userName')
    const [replied, setReplied] = useState(false)


    const submitAnswer = () => {
        setClickable(false)
        setReplied(true)
        ontrack.ChoiseQuiz(userToken, idQuiz, id).then(res => console.log(res.data)).catch(e => console.log(e))
    }

    useEffect(() => {
        checkAnswer.forEach(item => {
            if (item === userName) {
                setReplied(true)
            }
        })
    }, [])

    if (clickable) {
        return (
            <>
                {
                    replied ?
                        <div className='option-cheked'>
                            <p>{text}</p>
                            <img src={check} alt='check' />
                        </div> :
                        <div className='option-answer' onClick={submitAnswer} >
                            <p>{text}</p>
                        </div>
                }
            </>
        )
    } else {
        return (
            <>
                {
                    replied ?
                        <div className='option-cheked'>
                            <p>{text}</p>
                            <img src={check} alt='check' />
                        </div> :
                        <div style={{cursor:'default'}} className='option-answer'>
                            <p>{text}</p>
                        </div>
                }
            </>
        )
    }
}
