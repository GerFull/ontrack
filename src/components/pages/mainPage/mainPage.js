import React,{useState} from 'react';
import Modalpr from '../../modalpr/modalpr';
import ButtonJoin from '../../UI/buttonJoin/buttonJoin';
import ButtonWhite from '../../UI/buttonWhite/buttonWhite';
import InputCode from '../../UI/inputCode/inputCode';
import ModalCreateTrip from '../../modalCreateTrip/modalCreateTrip';
import './mainPage.css';
import Cookies from 'js-cookie';
import OnTrackService from '../../../service/service';

export default function MainPage() {

    const [createTrip, setCreateTrip]= useState(false);
    const [code,setCode]=useState('')
    const ontrack = new OnTrackService();
    const userToken = Cookies.get('auth-token')

    const JoinTrip = ()=>{
        console.log(code)
        ontrack.JoinCode(userToken,code).then(res => console.log(res)).catch(e=> console.log(e))
    }

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
                        <InputCode styleColor='myinput' label='Есть код поездки?' value={code} setValue={setCode} />
                        <ButtonJoin label='Присоединиться' onClick={JoinTrip}/>
                    </div>
                </div>
            </div>

            <Modalpr active={createTrip} setActive={setCreateTrip} >
                <ModalCreateTrip setActive={setCreateTrip}/>
            </Modalpr>
        </div>
    )
}