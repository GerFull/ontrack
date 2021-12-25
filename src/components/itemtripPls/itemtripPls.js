import React from 'react'
import whcross from '../../img/whiteCross.png'
import './itemtripPls.css'

export default function ItemtripPls({ active, ...props }) {
    return (
        <div {...props} className='trip__item-now pls'>
            <div className='trip__item-aciv'>
                <img src={whcross} alt='as' />
            </div>
            <div className={active ? 'trip__title active' : 'trip__title'}>
                <div className='trip__pls-text'>Добавить поездку</div>
            </div>
        </div>
    )
}
