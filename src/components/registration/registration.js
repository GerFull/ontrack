import React, { useState } from 'react'
import crossBl from '../../img/crossBlack.png'
import OnTrackService from '../../service/service'
import ButtonBlue from '../UI/buttonBlue/buttonBlue'
import InputChange from '../UI/inputChange/inputChange'
import InputPassword from '../UI/inputPassword/inputPassword'
import vk from '../../img/vk.png'
import gog from '../../img/google.png'
import './registration.css'
import Checkbox from '../UI/Chexbox/Checkbox'
import Cookies from 'js-cookie'

export default function Registration({ setActive , setLog, loguser}) {

    const ontrack = new OnTrackService();

    const Signin = async (email, password) => {
        try{
            await ontrack.Sign(email,password).then( res => loguser(res))
            setPassword('')
            setEmail('')
            setLog(true)
            setActive(false)
            console.log(Cookies.get('auth-token'))
        }catch (e) {
            console.log(e.message)
        }
    }




    const Registration = ( email, password,username) =>{
        ontrack.Registration(email, password, username)
        setRegEmail('')
        setRegPassword('')
        setUserName('')
        console.log(email, password, username)
    }


    const [email, setEmail] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [password, setPassword] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [activetab, SetActivetab] = useState(1)

    const apchi = (index) => {
        SetActivetab(index)
    }

    return (
        <div  className='authorization'>
            <div className='authorization__title'>
                <div className='authorization__tabs'>
                    <div onClick={() => apchi(1)} className={activetab === 1 ? 'tab active__tab' : 'tab'}>Регистрация</div>
                    <div onClick={() => apchi(2)} className={activetab === 2 ? 'tab active__tab' : 'tab'}>Войти</div>
                </div>
                <img src={crossBl} alt='crossbr' onClick={() => setActive(false)} />
            </div>
            <div className='authorization__contents'>
                <div className={activetab === 1 ? 'authorization__content authorization__content-active' : 'authorization__content'}>
                    <div className='registration'>
                        <p>Войдите в систему, чтобы открыть<br /> все возможности OnTrack</p>
                        <InputChange  value={userName} setValue={setUserName} label='Имя' />
                        <InputChange value={regEmail} setValue={setRegEmail} label='Электронная почта' />
                        <InputPassword value={regPassword} setValue={setRegPassword} label='Пароль' />
                        <ButtonBlue onClick={()=>Registration(regEmail,regPassword,userName)} styleclass='button__bluemain' label='Зарегистрироваться' />
                        <div className='registration__text'>
                            <div className='authorization__text'>Уже есть аккаунт?</div>
                            <p onClick={() => apchi(2)}>Войти</p>
                        </div>
                        <div className='help__sign'>
                            <div className='authorization__text'>Или войдите с помощью</div>
                            <div className='img-sign'>
                                <img src={vk} alt='' />
                                <img src={gog} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activetab === 2 ? 'authorization__content authorization__content-active' : 'authorization__content'}>
                    <div className='signin'>
                        <p>Войдите в систему, чтобы открыть<br /> все возможности OnTrack</p>
                        <InputChange value={email} setValue={setEmail} label='Электронная почта' />
                        <InputPassword value={password} setValue={setPassword} label='Пароль' />
                        <Checkbox />
                        <div className='btn__sign'>
                            <ButtonBlue onClick={()=>Signin(email,password)} styleclass='button__bluemain' label='Войти' />
                        </div>
                        <div className='registration__text'>
                            <div className='authorization__text'>Уже есть аккаунт?</div>
                            <p onClick={() => apchi(1)}>Зарегистрироваться</p>
                        </div>
                        <div className='help__sign'>
                            <div className='authorization__text'>Или войдите с помощью</div>
                            <div className='img-sign'>
                                <img src={vk} alt='' />
                                <img src={gog} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}