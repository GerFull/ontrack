import React from 'react'
import Showplace from '../showplace/showplace'
import InputSearch from '../UI/inputSearch/inputSearch'
import './cityContent.css'

export default function CityContent({attcity,name,urlimg}) {

    return (
        <div className='container__city-cont' >
            <InputSearch styleClass='input-search'/>
            {
                attcity.map(item =>(
                    <Showplace label={item.category} name={name} urlimg={urlimg} itemplace={item.places} key={item.category}/>
                ))
            }
        </div>
    )
}

