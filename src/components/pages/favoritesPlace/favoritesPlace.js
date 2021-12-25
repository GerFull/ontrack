import React, { useEffect,useState } from 'react'
import './favoritesPlace.css'
import Header from '../../header/header'
import Footer from '../footer/footer'
import ShowplaceItem from '../../showplaceItem/showplaceItem'
import OnTrackService from '../../../service/service'
import Cookies from 'js-cookie'

export default function FavoritesPlace() {

    const userToken= Cookies.get('auth-token')
    const ontrack = new OnTrackService();
    const [favoritepalce,setFavoritePalce]=useState([])
    
    const getinfoPlaceFavorite =()=>{
        ontrack.GetInfoFavoritePlaceUser(userToken).then(res => setFavoritePalce(res.data))
    }

    const removeItem=(id)=>{
        setFavoritePalce(favoritepalce.filter(p=> p.id !== id))
    }
    
    useEffect(() => {
        getinfoPlaceFavorite()
    }, [])

    return (
        <div>
            <div className='active'>
                <Header />
            </div>
            <div className='favorites__container'>
                <div className='favorites__title'>
                    <p>Избранное места</p>
                    <select>
                        <option>Все</option>
                        <option>По категориям</option>
                        <option>Сначала старые</option>
                        <option>Сначала новые</option>
                    </select>
                </div>
                <div className='favorites__card'>
                    {favoritepalce.length > 0 ?favoritepalce.map(item =>(
                        <ShowplaceItem isF={true} title={item.name} urlimg={item.mainPhotoUrl} key={item.id} idCard={item.id} place={item.textLocation} deleteItem={removeItem}/>
                    )):<p>Нет избранных</p>}
                </div>
            </div>
            <Footer/>
        </div>
    )
}
