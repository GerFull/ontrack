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
            await ontrack.Sign(email,password).then( res =>console.log(res))
            setPassword('')
            setEmail('')
    
            console.log(Cookies.get('auth-token'))
            const userToken = Cookies.get('auth-token')
            ontrack.GetInfoUser(userToken).then(res=> {
                loguser(res.data.Username)
                setLog(true)
                setActive(false)
            }).catch(e=> console.log(e))
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
                    <div onClick={() => apchi(1)} className={activetab === 1 ? 'tab active__tab' : 'tab'}>??????????????????????</div>
                    <div onClick={() => apchi(2)} className={activetab === 2 ? 'tab active__tab' : 'tab'}>??????????</div>
                </div>
                <img src={crossBl} alt='crossbr' onClick={() => setActive(false)} />
            </div>
            <div className='authorization__contents'>
                <div className={activetab === 1 ? 'authorization__content authorization__content-active' : 'authorization__content'}>
                    <div className='registration'>
                        <p>?????????????? ??????????????????, ??????????????????????????<br /> ?????? ?????????????????????? OnTrack</p>
                        <InputChange  value={userName} setValue={setUserName} label='??????' />
                        <InputChange value={regEmail} setValue={setRegEmail} label='?????????????????????? ??????????' />
                        <InputPassword value={regPassword} setValue={setRegPassword} label='????????????' />
                        <ButtonBlue onClick={()=>Registration(regEmail,regPassword,userName)} styleclass='button__bluemain' label='????????????????????????????????????' />
                        <div className='registration__text'>
                            <div className='authorization__text'>?????? ???????? ???????????????</div>
                            <p onClick={() => apchi(2)}>??????????</p>
                        </div>
                        <div className='help__sign'>
                            <div className='authorization__text'>?????? ?????????????? ?? ??????????????</div>
                            <div className='img-sign'>
                                <img src={vk} alt='' />
                                <img src={gog} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={activetab === 2 ? 'authorization__content authorization__content-active' : 'authorization__content'}>
                    <div className='signin'>
                        <p>?????????????? ??????????????????, ??????????????????????????<br /> ?????????????????????????????? OnTrack</p>
                        <InputChange value={email} setValue={setEmail} label='?????????????????????? ??????????' />
                        <InputPassword value={password} setValue={setPassword} label='????????????' />
                        <Checkbox />
                        <div className='btn__sign'>
                            <ButtonBlue onClick={()=>Signin(email,password)} styleclass='button__bluemain' label='??????????' />
                        </div>
                        <div className='registration__text'>
                            <div className='authorization__text'>?????? ???????? ???????????????</div>
                            <p onClick={() => apchi(1)}>????????????????????????????????????</p>
                        </div>
                        <div className='help__sign'>
                            <div className='authorization__text'>?????? ?????????????? ?? ??????????????</div>
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