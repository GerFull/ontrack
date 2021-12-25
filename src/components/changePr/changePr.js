import React from 'react'
import './changePr.css'
import crossBl from '../../img/crossBlack.png'
import InputChange from '../UI/inputChange/inputChange';
import InputPassword from '../UI/inputPassword/inputPassword';
import ButtonBlue from '../UI/buttonBlue/buttonBlue';

export default function ChangePr({setActive}) {

    const saveinfo = () => {
        setActive(false)
    }


    return (
        <div className='changepr__size'>
            <div className='changepr__tittle'>
                <p>Редактирование профиля</p>
                <img src={crossBl} alt='crossbr' onClick={() => setActive(false)} />
            </div>
            <div className='changepr__main'>
                <div className='changepr__profile'>
                    <div className='changepr__name'>
                        <InputChange label='Имя' />
                        <InputChange label='Почта' />
                    </div>
                    <div className='pr__photo'></div>
                </div>
                <div className='changepr__password'>
                    <p>Сменить пароль:</p>
                    <InputChange label='Старый пароль' type='password' />
                    <InputPassword label='Новый пароль'/>
                </div>
                <ButtonBlue styleclass='button__bluemain' label='Сохранить' onClick={saveinfo} />
            </div>
        </div>
    )
}
