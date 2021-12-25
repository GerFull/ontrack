import React from 'react'

export default function CityImg({label , ...props}) {
    return (
        <div {...props} className='city__item'>
            <div className='item__text'>
                {label}
            </div>
        </div>
    )
}
