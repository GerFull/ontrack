import React, { useEffect, useState } from 'react'
import './place.css'
import Header from '../../header/header'
import Footer from '../footer/footer'
import Gallery from '../../gallery/gallery'
import heart from '../../../img/BlueHeart.png'
import emptyheart from '../../../img/EmptyBlueHeart.png'
import OnTrackService from '../../../service/service'
import Cookies from 'js-cookie'

export default function Place(props) {

    const ontrack = new OnTrackService();

    const userToken = Cookies.get('auth-token')
    const { idCard, favorite, array1 } = props.location.state
    const [favoritePlace, setFavorite] = useState(false)

    useEffect(() => {
        setFavorite(favorite);
    }, [favorite])

    const changeheart = (e) => {
        if (favoritePlace) {
            e.target.src = `${emptyheart}`
            setFavorite(false)
            ontrack.PostFavoritePalce(idCard, userToken).catch(e => console.log('ошибка отправики в Месте в избранное', e))
        } else {
            e.target.src = `${heart}`
            ontrack.PostFavoritePalce(idCard, userToken).catch(e => console.log('ошибка отправики в Месте в избранное', e))
            setFavorite(true)
        }
    }


    return (
        <div>
            <div className='active'>
                <Header />
            </div>
            <div className='container__place'>
                <div className='place'>
                    <div className='place__way'>
                        <p>{array1.cityName} &gt; {array1.name}</p>
                    </div>
                    <div className='place__tittle'>
                        <p>{array1.name}</p>
                        <img src={favoritePlace ? heart : emptyheart} alt='haertBLue' onClick={changeheart} />
                    </div>
                    <div className='place__item'>
                        <div className='place__gallery'>
                            <Gallery Photos={array1.photosUrl} />
                        </div>
                        <div className='place__discr'>
                            <div className='place__address'>
                                <p className='place__standart'>Адрес</p>
                                {array1.cityName}, {array1.textLocation}
                            </div>
                            <div className='place__job'>
                                <p className='place__standart'>Режим работы</p>
                                <div className='place__worktiime'>
                                    <p>{array1.workingHours}</p>
                                    <p>Вход {array1.enterCost}</p>
                                </div>
                                {
                                    array1.placeSite ? <a href={array1.placeSite}>Сайт</a>
                                        : null
                                }
                            </div>
                            <div className='place__text'>
                                <p>{array1.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
