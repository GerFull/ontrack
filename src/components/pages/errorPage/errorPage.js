import React from 'react'
import erorr from '../../../img/erorr.png'
import ButtonBlue from '../../UI/buttonBlue/buttonBlue'
import { useHistory } from 'react-router'
import './errorPage.css'

export default function ErrorPage() {

    const router = useHistory();
    
    return (
        <div className='error__container'>
            <div className='error__text'>
                <p>4</p>
                <img src={erorr} alt='erorr'/>
                <p>4</p>
            </div>
            <div className='error__title'>
                <p>Похоже, такая страница не существует<br/> Мы уже знаем об ошибке и исправляем ее</p>
            </div>
            <div className='erorr__btn'>
                <ButtonBlue onClick={() => router.goBack()} styleclass='button__bluemain'  label='Вернутсья назад'/>
            </div>
        </div>
    )
}
