import React from 'react';
import './itemProfile.css';
import calendar from '../../img/calendar.png';
import cityimg from '../../img/map.png';
import place from '../../img/place.png';
import { Link } from 'react-router-dom';

export default function ItemProfile({id,item, title, datastart, dataend, city, }) {

    console.log(item)

    return (
            <Link style={{textDecoration:'none'}} to={{ pathname: `/trip/`, state: { id} }}>
                <div className='profile__item'>
                    <div className='trippr__tittle'>
                        {title}
                    </div>
                    <div className='trippr__discr'>
                        <div className='trippr__text'>
                            <img src={calendar} alt='calendar' />{datastart}-{dataend}
                        </div>
                        <div className='trippr__text'>
                            <img src={cityimg} alt='calendar' /> {city}
                        </div>
                        <div className='trippr__text'>
                            <img src={place} alt='calendar' /> {item.ActionsCount} событий
                        </div>
                    </div>
                </div>
            </Link>
    )
}
