import React, { useState} from 'react'
import crossBl from '../../img/crossBlack.png'
import ButtonBlue from '../UI/buttonBlue/buttonBlue'
import InputChange from '../UI/inputChange/inputChange'
import InputQuiz from '../UI/inputQuiz/InputQuiz'
import './opros.css'

let counterId = 2;

export default function Opros({setActive,setShowQuiz,setDoneQuiz}) {

    const [answer, setAnswer] = useState([
        { id: 0, value: '' },
        { id: 1, value: '' }
    ])
    const [nameQuiz, setNameQuiz] = useState('')
    const [x, setX] = useState(false);

    const AddItem = () => {
        setAnswer([...answer, { id: counterId++, value: '' }])
    }

    const DeleteItem = (id) => {
        setAnswer(answer.filter(p => p.id !== id))
    }

    const submitAnswer = () => {
        console.log(nameQuiz)
        console.log(answer)
        setActive(false)
        setShowQuiz(true)
        setDoneQuiz([nameQuiz,answer])
        const kirrilAnswer= answer.map(d => d.value)
        console.log(kirrilAnswer)
    }


    return (

        <div className='opros__size'>
            <div className='opros__header'>
                <p>Создание опроса</p>
                <img src={crossBl} alt='crest)' onClick={() => setActive(false)} />
            </div>
            <div className='opros__content'>
                <InputChange label='Название' textstyle='main' text='Добавить название' value={nameQuiz} setValue={setNameQuiz} />
                <p>Варианты ответа</p>
                {
                    answer?.map(item => (
                        <InputQuiz key={item.id} id={item.id} remove={DeleteItem} setAnswer={setAnswer} value={item.value} />
                    ))
                }
                <div className='opros__btn' onClick={AddItem}>
                    <p>Добавить Вариант</p>
                </div>
                <div className='opros__checkbox'>
                    <input type='checkbox' checked={x} onChange={() => setX(!x)} /> Выбор нескольких вариантов
                </div>
                <ButtonBlue label='Сохранить опрос' styleclass='button__bluemain' onClick={submitAnswer} />
            </div>
        </div>
    )
}
