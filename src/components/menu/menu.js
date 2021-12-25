import React from 'react'
import './menu.css'

export default function Menu({active}) {
    return (
        <div className={active ? 'trip__menu-content activee' : 'trip__menu-content'}>
        </div>
    )
}
