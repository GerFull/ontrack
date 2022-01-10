import Cookies from 'js-cookie'
import React from 'react'
import OnTrackService from '../../service/service'
import OptionAnswer from '../OptionAnswer/OptionAnswer'
import './DoneQiuz.css'

export default function DoneQiuz({QuizArr}) {

    console.log(QuizArr.Variants)

    const ontrack = new OnTrackService()
    const userToken = Cookies.get('auth-token')

    const Delete = () =>{
        ontrack.DeleteQuiz(userToken,QuizArr.Id).then(res=> console.log(res.data)).catch(e=> console.log(e))
    }

    return (
        <div className='done-quiz'>
            <div className='done-quiz__name'>
                <p>{QuizArr.Name}</p>
                <p>Петр Петрович</p>
            </div>
            <div className='done-quiz__answer'>
                {
                    QuizArr.Variants.map((item,index) => (
                        <OptionAnswer text={item.Name} key={index} id={index} idQuiz={QuizArr.Id} />
                    ))
                }
            </div>
            <div className='done-quiz__vote'>
            </div>
            <button onClick={Delete}>Delete Quiz</button>
        </div>
    )
}
