import React from 'react'
import city from '../../img/Ekaterinburg.png'
import './citymain.css'

export default function Citymain({name, urlimg}) {

    return (
        <div className='city__main' style={{backgroundImage: `url(${city})`}}>
            <div className='city__container'>
                <div className='city__name'>
                    <h1>{name}</h1>
                </div>
            </div>
        </div>
    )
}
