import React from 'react';
import cross from '../../img/cross.png'
import './createItemPr.css';


export default function CreateItemPr({ title, datast, dataend, city, ...props}) {

    return (
        <div {...props} className='create__profile-item'>
            <div className='create__profile-trip'>
                <p>Создать поездку</p>
                <img src={cross} alt='##'/>
            </div>
        </div>
    )
}
