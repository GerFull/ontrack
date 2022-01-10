import React, { useEffect, useState } from 'react'
import './showplaceItem.css'
import emptyheart from '../../img/emptyHeart.png'
import heart from '../../img/heart.png'
import map from '../../img/greymap.png'
import { Link } from 'react-router-dom'
import OnTrackService from '../../service/service'
import Cookies from 'js-cookie'

export default function ShowplaceItem({ title, place, idCard, deleteItem, isF,urlimg,array1}) {

    const ontrack = new OnTrackService();

    const [favorite, setFavorite] = useState(false);
    const userToken = Cookies.get('auth-token')

    useEffect(() => {
        setFavorite(isF);
    }, [isF])

    const changeheart = (e) => {
        if (favorite) {
            e.target.src = `${emptyheart}`
            setFavorite(false)
            deleteItem && deleteItem(idCard)
            ontrack.PostFavoritePalce(idCard, userToken).catch(e => console.log('ошибка отправики в избранное', e))
        } else {
            e.target.src = `${heart}`
            ontrack.PostFavoritePalce(idCard, userToken).catch(e => console.log('ошибка отправики в избранное', e))
            setFavorite(true)
        }
    }

    //style={{backgroundImage: `url(${urlimg})`,}}

    return (
        <div className='showplace__item'>
            <div className='showplace__item-img'  >
                <img key={this} id='heart' src={favorite ? heart : emptyheart} alt='emptyheart' onClick={changeheart} />
            </div>
            <div className='showplace__item-content'>
                <div className='showplace__item-title'>
                    <p>{title}</p>
                </div>
                <div className='showplace__item-place'>
                    <img src={map} alt='map' />
                    <p>{place}</p>
                </div>
                <div className='showplace__item-details'>
                    <Link style={{ textDecoration: 'none'}} className='showplace__item-details' to={{ pathname: `/place/`, state: { idCard ,favorite,array1} }}><p>Подробнее&gt;&gt;</p></Link>
                </div>
            </div>
        </div>
    )
}
