import React from 'react'
import {Link} from 'react-router-dom'
import imgsearch from '../../img/search.png'
import './searchItem.css'

export default function SearchItem({idCard,name,cityName}) {
    return (
        <div className='search-item'>
            <img src={imgsearch} alt='imgss' className='search-img'/>
            <Link
                style={{ textDecoration: 'none' }}
                to={{ pathname: '/place/', state: { idCard } }}>
                <div className='search__item-text'>{name}{cityName ? `, ${cityName}` : null}</div>
            </Link>
        </div>
    )
}
