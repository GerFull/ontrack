import React, { useState,useEffect } from 'react'
import Citymain from '../../citymain/citymain'
import Header from '../../header/header'
import ButtonBlue from '../../UI/buttonBlue/buttonBlue'
import ShowplaceItem from '../../showplaceItem/showplaceItem'
import InputSearch from '../../UI/inputSearch/inputSearch'
import './cityAttraction.css'
import OnTrackService from '../../../service/service'
import Cookies from 'js-cookie'



const rendercards = (itemplace, showAll,favourites) => {
    return itemplace.slice(0, showAll ? itemplace.length : 12).map((item) =>
        <ShowplaceItem array1={item} title={item.name} key={item.id} idCard={item.id} urlimg={item.mainPhotoUrl} place={item.textLocation} isF={favourites.some((e) => e.id === item.id)} />
    )
}


export default function CityAttraction(props) {

    const ontrack = new OnTrackService();
    const [show, setShow] = useState(false);
    const {name,urlimg,itemplace,label} = props.location.state;
    const [favourites, setF] = useState([]);
    const userToken = Cookies.get('auth-token')

    useEffect(() => {
        ontrack.GetInfoFavoritePlaceUser(userToken)
            .then(res => setF(res.data));
    }, [])

    return (
        <div>
            <Header />
            <Citymain  name={name} urlimg={urlimg}/>
            <div className='attraction__container'>
                <div className='attraction__title'>
                    {name} &gt; {label}
                </div>
                <InputSearch styleClass='input-search'/>
                <div className='attraction__name'>
                    {label}
                </div>
                <div className='attraction__card'>
                    {rendercards(itemplace, show,favourites)}
                    {
                        !show && itemplace.length > 12 &&
                        <div className='attraction__btn' onClick={() => setShow(true)}>
                        <ButtonBlue styleclass='button__bluemain' label='Посмотреть еще' />
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}
