import React from 'react'
import './buttonBlue.css'

export default function ButtonBlue({label, styleclass, ...props}) {
    return (
            <button {...props} className={styleclass}>{label}</button>
    )
}
