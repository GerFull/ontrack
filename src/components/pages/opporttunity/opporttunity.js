import React from 'react';
import './opporttunity.css'

export default function Opporttunity() {
    return (
        <div className='opporttunity'>
            <div className='container'>
                <div className='opporttunity__title'>
                    <p>Возможности Ontrack</p>
                </div>
                <div className='opporttunity__block'>
                    <div className='opporttunity__item'>
                        <div className='opporttunity__text'>
                            <div className='opp__title'>01.</div>
                            <div className='opp__discription'>Документы для поездки<br/> в одном месте</div>
                        </div>
                    </div>
                    <div className='opporttunity__item'>
                        <div className='opporttunity__text'>
                            <div className='opp__title'>02.</div>
                            <div className='opp__discription'>Мобильное приложение для Android</div>
                        </div>
                    </div>
                    <div className='opporttunity__item'>
                        <div className='opporttunity__text'>
                            <div className='opp__title'>03.</div>
                            <div className='opp__discription'>Совместное <br/> редактирование поездки</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
