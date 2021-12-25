import React from 'react';
import './join.css';
import InputCode from '../../UI/inputCode/inputCode';
import ButtonJoin from '../../UI/buttonJoin/buttonJoin';

export default function Join() {
    return (
        <div className='container__join'>
            <div className='join'>
                <div className='join__tittle'>
                    Присоединиться к поездке
                </div>
                <div className='join__discription'>
                У каждой поездки есть свой уникальный код, которым может поделиться ее создатель.
                Чтобы присоединиться к поездке, введите его ниже.
                </div>
                <div className='join__code'>
                <InputCode styleColor='joininput' label='Введите код доступа'/>
                <ButtonJoin style={{background: "rgba(34,52,219,0.5)", width: '270px', height: '50px', color: 'white'}} label='Присоединиться'/>
                </div>
            </div>
        </div>
    )
}
