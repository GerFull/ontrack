import React from 'react'
import OptionAnswer from '../OptionAnswer/OptionAnswer'
import './DoneQiuz.css'

export default function DoneQiuz({QuizArr}) {

    return (
        <div className='done-quiz'>
            <div className='done-quiz__name'>
                <p>{QuizArr[0]}</p>
                <p>Петр Петрович</p>
            </div>
            <div className='done-quiz__answer'>
                {
                    QuizArr[1].map(item => (
                        <OptionAnswer text={item.value} key={item.id} />
                    ))
                }
            </div>
            <div className='done-quiz__vote'>
            </div>
        </div>
    )
}
