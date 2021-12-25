import React, { useEffect, useState } from 'react'
import './place.css'
import Header from '../../header/header'
import Footer from '../footer/footer'
import Gallery from '../../gallery/gallery'
import heart from '../../../img/BlueHeart.png'
import emptyheart from '../../../img/EmptyBlueHeart.png'
import OnTrackService from '../../../service/service'
import Cookies from 'js-cookie'
import Loader from '../../Loader/Loader'
import ErrorPage from '../errorPage/errorPage'

export default function Place(props) {

    const ontrack = new OnTrackService();

    const userToken = Cookies.get('auth-token')
    const { idCard, favorite } = props.location.state
    const [array, setArray] = useState([])
    const [favoritePlace, setFavorite] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    // const [PhotosUrl, SetPhotosUrl] = useState([])


    useEffect(() => {
        setFavorite(favorite);
    }, [favorite])

    const changeheart = (e) => {
        if (favorite) {
            e.target.src = `${emptyheart}`
            setFavorite(false)
            ontrack.PostFavoritePalce(idCard, userToken).catch(e => console.log('ошибка отправики в Месте в избранное', e))
        } else {
            e.target.src = `${heart}`
            ontrack.PostFavoritePalce(idCard, userToken).catch(e => console.log('ошибка отправики в Месте в избранное', e))
            setFavorite(true)
        }
    }


    const getInfo = async () => {
        try {
            await ontrack.GetInfoIdPlace(idCard).then(res => {
                console.log('Страница места', res.data)
                setArray(res.data)
                //setLoad
            })

        } catch (e) {
            console.log('Ошибка в получения информации определенного места:' + e.message)
            //setError(true)
        }
    }


    const loadingInfo = async () => {
        await getInfo()
        setLoading(false)
    }

    useEffect(() => {
        loadingInfo()
    }, []);


    return (
        <div>
            {
                error ? (<ErrorPage />) : (
                    loading ? (<Loader />) : (<>
                        <div className='active'>
                            <Header />
                        </div>
                        <div className='container__place'>
                            <div className='place'>
                                <div className='place__way'>
                                    <p>{array.cityName} &gt; {array.name}</p>
                                </div>
                                <div className='place__tittle'>
                                    <p>{array.name}</p>
                                    <img src={favoritePlace ? heart : emptyheart} alt='haertBLue' onClick={changeheart} />
                                </div>
                                <div className='place__item'>
                                    <div className='place__gallery'>
                                        <Gallery />
                                    </div>
                                    <div className='place__discr'>
                                        <div className='place__address'>
                                            <p className='place__standart'>Адрес</p>
                                            {array.cityName}, {array.textLocation}
                                        </div>
                                        <div className='place__job'>
                                            <p className='place__standart'>Режим работы</p>
                                            <div className='place__worktiime'>
                                                <p>{array.workingHours}</p>
                                                <p>Вход {array.enterCost}</p>
                                            </div>
                                            {
                                                array.placeSite ? <a href={array.placeSite}>Сайт</a>
                                                    : null
                                            }
                                        </div>
                                        <div className='place__text'>
                                            <p>{array.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </>)
                )
            }
        </div>
    )
}
