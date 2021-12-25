import React from 'react'
import './showplacePls.css'

export default function ShowplacePls({...props}) {
    return (
        <div className='showplacepls' {...props}>
            <div className='showplacepls__text'>
                <p>Смотреть еще</p>
                <p>&gt;&gt;</p>
            </div>
        </div>
    )
}
