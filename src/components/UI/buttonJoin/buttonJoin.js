import React from 'react';
import './buttonJoin.css'

export default function ButtonJoin({label,style,...props}) {
    return (
        <button {...props} style={style} className='button__join'>{label}</button>
    )
}
