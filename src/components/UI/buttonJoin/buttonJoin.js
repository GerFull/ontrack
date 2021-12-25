import React from 'react';
import './buttonJoin.css'

export default function ButtonJoin({label,style}) {
    return (
        <button style={style} className='button__join'>{label}</button>
    )
}
