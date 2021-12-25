import React from 'react'
import './tripWay.css'

export default function TripWay({label}) {
    return (
        <div className='trip__right-way'>
            <p>Мои поездки &gt; {label}</p>
        </div>
    )
}
