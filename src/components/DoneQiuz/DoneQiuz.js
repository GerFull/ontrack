import {useEffect,useState}from 'react'
import OptionAnswer from '../OptionAnswer/OptionAnswer'
import './DoneQiuz.css'

export default function DoneQiuz({QuizArr}) {

    const [clickable, setClickable] = useState(true)
    const userName = localStorage.getItem('userName')

    const answered= QuizArr.Variants

    // const Delete = () =>{
    //     ontrack.DeleteQuiz(userToken,QuizArr.Id).then(res=> console.log(res.data)).catch(e=> console.log(e))
    // }


    useEffect(() => {
        answered.forEach(item=>{
            item.VotersUsernames.forEach(name=>{
                if(name === userName){
                    setClickable(false)
                }
            })
        })
    }, [])


    return (
        <div className='done-quiz'>
            <div className='done-quiz__name'>
                <p>{QuizArr.Name}</p>
            </div>
            <div className='done-quiz__answer'>
                {
                    QuizArr.Variants.map((item,index) => (
                        <OptionAnswer setClickable={setClickable} clickable={clickable} text={item.Name} key={index} id={index} idQuiz={QuizArr.Id} checkAnswer={item.VotersUsernames} />
                    ))
                }
            </div>
            <div className='done-quiz__vote'>
            </div>
        </div>
    )
}
