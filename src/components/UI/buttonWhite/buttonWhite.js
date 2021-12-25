import React from 'react';
import './buttonWhite.css';

export default function ButtonWhite({label,...props}) {
    return (
        <button {...props} className='button__white'>{label}</button>
    )
}
