import React from 'react'
import { Link } from 'react-router-dom'
import './itemTripActive.css'

export default function ItemTripActive({id, label, active, nameTrip, city,setmenutrip }) {


    return (
        <Link style={{textDecoration:'none'}} to={{ pathname: `/trip/`, state: { id} }}>
            <div className='trip__item-now'>
                <div className='trip__item-aciv'>
                    <p>{label}</p>
                </div>
                <div className={active ? 'trip__title active' : 'trip__title'}>
                    <div className='trip__item-name'>{nameTrip}</div>
                    <div className='trip__item-city'>{city}</div>
                </div>
            </div>
        </Link>

    )
}

