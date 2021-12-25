import React from 'react'
import './inputCode.css'

export default function InputCode({styleColor, label,type,value,setValue, ...props}) {
    return (
        <input {...props} 
        onChange={event => setValue(event.target.value)} 
        value={value} 
        type={type} 
        className={styleColor} 
        placeholder={label} />
    )
}
