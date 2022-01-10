import React from 'react'
import './itemTripActive.css'

export default function ItemTripActive({ label,active}) {


    return (
        <div className='trip__item-now'>
            <div className='trip__item-aciv'>
                <p>{label}</p>
            </div>
            <div className={active ? 'trip__title active' : 'trip__title'}>
                <div className='trip__item-name'>Туса в Екб</div>
                <div className='trip__item-city'>Екатеринбург</div>
            </div>
        </div>
    )
}

