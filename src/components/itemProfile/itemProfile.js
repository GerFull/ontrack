import React from 'react';
import './itemProfile.css';
import calendar from '../../img/calendar.png';
import cityimg from '../../img/map.png';
import place from '../../img/place.png';

export default function ItemProfile({ title, datastart, dataend, city, }) {

    return (
        <div className='profile__item'>
            <div className='trippr__tittle'>
                {title}
            </div>
            <div className='trippr__discr'>
                <div className='trippr__text'>
                    <img src={calendar} alt='calendar'/>{datastart}-{dataend}
                </div>
                <div className='trippr__text'>
                    <img src={cityimg} alt='calendar'/> {city}
                </div>
                <div className='trippr__text'>
                    <img src={place} alt='calendar'/> 4 места
                </div>
            </div>
        </div>
    )
}
