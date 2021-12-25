import React,{useState} from 'react'
import crossBl from '../../img/crossBlack.png'
import Calendar from '../Calendar/calendar';
import InputChange from '../UI/inputChange/inputChange';
import SelectCity from '../UI/SelectCity/SelectCity';
import ButtonBlue from '../UI/buttonBlue/buttonBlue';
import './modalCreateTrip.css'
import OnTrackService from '../../service/service';
import Cookies from 'js-cookie';

export default function ModalCreateTrip({setActive}) {

    const ontrack = new OnTrackService();
    const userToken= Cookies.get('auth-token')

    const PostInfoTrip=()=>{
        //ontrack.CreateTrip(userToken,datastart,dataend,cityName,nametrip).catch(e=> console.log(e))
        //console.log(nametrip)
        //console.log(cityName)
        //console.log(datastart)
        //console.log(dataend)
        setActive(false)
    }


    const [datastart,setDatastart]=useState('')
    const [dataend,setDataend]=useState('')
    const [cityName,setCItyName]=useState('')
    const [nametrip,setNameTrip]=useState('')

    return (
        <div className='cr-trip__size'>
            <div className='changepr__tittle'>
                <p>Создание поездки</p>
                <img src={crossBl} alt='crossbr' onClick={() => setActive(false)} />
            </div>
            <div className='cr-trip__main'>
                <InputChange textstyle='main' label='Название' value={nametrip} setValue={setNameTrip}/>
                <SelectCity setValue={setCItyName}/>  
                <Calendar setDateStart={setDatastart} setDateEnd={setDataend}/>
                <ButtonBlue onClick={PostInfoTrip} styleclass='button__bluemain' label='Создать поездку'/>
                <div className='cr-trip__join'>
                    <p>Хотите присоединиться к поездке?</p>
                    <InputChange textstyle='join-text' label='Введите код доступа'/>
                </div>
                <ButtonBlue styleclass='button__bluemain' label='Присоединиться'/>
            </div>
        </div>
    )
}