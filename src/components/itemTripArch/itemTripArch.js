import React from 'react'
import './itemTripArch.css'

export default function ItemTripArch({label,active}) {
    return (
        <div className='trip__item-now'>
            <div className='trip__item-arch'>
                <p>{label}</p>
            </div>
            <div className={active ? 'trip__title active' : 'trip__title'}>
                <div className='trip__item-name'>ТУса в Москве</div>
                <div className='trip__item-city'> Москва</div>
            </div>
        </div>
    )
}


