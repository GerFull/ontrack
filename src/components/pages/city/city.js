import React, { useEffect, useState } from 'react'
import './city.css'
import Header from '../../header/header'
import Footer from '../footer/footer'
import Citymain from '../../citymain/citymain'
import CityContent from '../../cityContent/cityContent'
import { useParams } from 'react-router'
import OnTrackService from '../../../service/service'
import ErrorPage from '../errorPage/errorPage'
import Loader from '../../Loader/Loader'

export default function City() {

    const ontrack = new OnTrackService();

    const params = useParams();
    const idCity = params.id
    const [cityinfo, setCityInfo] = useState([])
    const [placeinfo, setPlaceInfo] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    const getCity = async () => {
        try {
            await ontrack.GetCityiInfo(idCity).then(res => {
                console.log(res.data)
                setCityInfo(res.data)
            })

        } catch (e) {
            console.log('Ошибка в получения информации города:' + e.message)
            setError(true)
        }
    }

    const getPlace = async () => {
        try {
            await ontrack.GetPlacesInfo(idCity).then(res => setPlaceInfo(res.data))
        } catch (e) {
            console.log('Ошибка в получения информации места города:' + e.message)
            setError(true)
        }
    }

    const loadingInfo = async () => {
        await getCity()
        await getPlace()
        setLoading(false)
    }

    useEffect(() => {
        loadingInfo()
    }, []);

    return (
        <div>
            {
                error ? (<ErrorPage />) : (
                    loading ? (<Loader/>) : (<>
                        <Header />
                        <Citymain name={cityinfo.name} urlimg={cityinfo.mainPhotoUrl} />
                        <CityContent attcity={placeinfo} name={cityinfo.name} urlimg={cityinfo.mainPhotoUrl} />
                        <Footer />
                    </>)
                )
            }
        </div>
    )
}
