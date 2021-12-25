import React from 'react';
import './footer.css';
import logo from '../../../img/logo.png';
import gp from '../../../img/gp.png';
import insta from '../../../img/inst.png';
import vk from '../../../img/vk.png';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='container__footer'>
                <div className='footer__body'>
                    <div className='footer__left'>
                        <div className='footer__logo'>
                            <img src={logo} alt='onTrack' />
                        </div>
                        <div className='footer__text'>
                            <p className='footer__tittle'>Мои поездки</p>
                            <p className='footer__tittle'>Запланировать поездку</p>
                            <p className='footer__tittle'>Избранное</p>
                        </div>
                    </div>
                    <div className='footer__right'>
                        <div className='footer__app'>
                            <p className='footer__tittle'>Скачать приложение:</p>
                            <a href='https://www.google.ru' target="_blank" rel="noreferrer"><img src={gp} alt='googlePLay' /></a>
                        </div>
                        <div className='footer__social'>
                            <div className='social__text'>
                                <p className='footer__tittle'>Наши соцсети:</p>
                            </div>
                            <div className='social__img'>
                                <a href='##'><img src={insta} alt='insta' /></a>
                                <a href='##'><img src={vk} alt='vk' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
