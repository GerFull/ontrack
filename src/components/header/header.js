import React, { useEffect, useState } from 'react';
import './header.css';
import logo from '../../img/logo.png';
import ButtonBlue from '../UI/buttonBlue/buttonBlue';
import { Link } from 'react-router-dom';
import Modalpr from '../modalpr/modalpr';
import Registration from '../registration/registration';

function Header() {

    const [modalActtive, setModalActive] = useState(false);
    const [header, setHeader] = useState(false);
    const [Logined, setLogined] = useState(false);
    const [user,setUser] = useState('')
    
    const changeBackgrouund = () => {
        if (window.scrollY >= 40) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }


    const username=(name)=>{
        localStorage.setItem('userName',name)
    }

    const showBtn = () => {
        if (Logined) {
            return <Link style={{textDecoration: 'none'}} to='/profile'><p className='header__item-title'>{user}</p></Link>
        } else {
            return <ButtonBlue onClick={() => setModalActive(true)} styleclass='button__blue' label='Войти' />
        }
    }

    useEffect(() => {
        const userNAME=localStorage.getItem('userName')

        if( userNAME){
            setUser(userNAME)
            setLogined(true)
        } else{
            setLogined(false)
        }
    }, [Logined])


    window.addEventListener('scroll', changeBackgrouund);

    return (
        <header className={header ? "header active" : " header"}>
            <div className='container__header'>
                <div className='header__nav'>
                    <Link to='/'><div className='header__logo'>
                        <img src={logo} alt='onTrack' />
                    </div></Link>
                    <div className='header__item'>
                        <Link className='header__item-title' to={{pathname:'/trip' , state: {id:'0'}}}>Мои поездки</Link>
                        <Link className='header__item-title' to='/FavoritesPlace/'>Избранное</Link>
                        {showBtn()}
                    </div>
                </div>
            </div>
            <Modalpr active={modalActtive} setActive={setModalActive}>
                <Registration loguser={username} log={Logined} setLog={setLogined} setActive={setModalActive} />
            </Modalpr>
        </header>
    )
}

export default Header;