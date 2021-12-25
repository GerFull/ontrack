import React,{useState} from 'react';
import Modalpr from '../../modalpr/modalpr';
import ButtonJoin from '../../UI/buttonJoin/buttonJoin';
import ButtonWhite from '../../UI/buttonWhite/buttonWhite';
import InputCode from '../../UI/inputCode/inputCode';
import ModalCreateTrip from '../../modalCreateTrip/modalCreateTrip';
import './mainPage.css';

export default function MainPage() {

    const [createTrip, setCreateTrip]= useState(false);
    

    return (
        <div className='header__body'>
            <div className='container'>
                <div className='header__description'>
                    <div className='header__tittle'>
                        Начни путешествовать с нами
                    </div>
                    <div className='header__text'>
                        Здесь вы сможете спланировать поездку вашей мечты
                    </div>
                    <ButtonWhite label='Запланировать поездку' onClick={() => setCreateTrip(true)} />
                    <div className='header__code'>
                        <InputCode styleColor='myinput' label='Есть код поездки?'/>
                        <ButtonJoin label='Присоединиться'/>
                    </div>
                </div>
            </div>

            <Modalpr active={createTrip} setActive={setCreateTrip} >
                <ModalCreateTrip setActive={setCreateTrip}/>
            </Modalpr>
        </div>
    )
}