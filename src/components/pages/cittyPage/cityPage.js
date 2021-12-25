import React, { useState, useEffect } from 'react';
import CityImg from '../../cityImg/cityImg';
import InputSearch from '../../UI/inputSearch/inputSearch';
import {useHistory } from 'react-router-dom'
import './cityPage.css';
import OnTrackService from '../../../service/service';
import SearchItem from '../../searchItem/searchItem';

export default function CityPage() {

    const ontrack = new OnTrackService();

    const cites = [
        { id: 1, label: "Екатеринбург" },
        { id: 2, label: "Калининград" },
        { id: 3, label: "Москва" },
        { id: 4, label: "Казань" },
        { id: 5, label: "Сочи" },
        { id: 6, label: "Санкт-Петербург" }
    ]

    const [search, setSearch] = useState('')
    const [error, setErorr] = useState(false)
    const [resultPlace, setResultPlace] = useState([])

    const cleanArray = () => {
        setResultPlace([])
        setSearch('')
    }



    useEffect(() => {
        setTimeout(checkSearch, 1000)
    }, [search])

    const checkSearch = () => {
        if (search === '') {
        } else {
            ontrack.GetPlaces(search).then((res = {}) => {
                setResultPlace(res.data)
                console.log(res.data)
                if (res.data === undefined) {
                    setResultPlace([{ name: 'нет совпадений' }])
                }
            }
            ).catch(setErorr(true))
        }
    }



    const router = useHistory();

    return (
        <div className='city'>
            <div className='container__city'>
                <div className='cities'>
                    <div className='city__search'>
                        <div className='city__searchtext'>Популярные направления</div>
                        <div className='search'>
                            <InputSearch value={search} styleClass={resultPlace?.length > 0 ? 'input-searched' : 'input-search'} setValue={setSearch} cleanArray={cleanArray} />
                            {
                                resultPlace?.length > 0 &&
                                <div className='search__pole'>
                                    <div className='search__line'></div>
                                    {
                                        resultPlace.map(item => (
                                            <SearchItem key={item.id} idCard={item.id} name={item.name} cityName={item.cityName} />
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    </div>
                    <div className='city__cards'>
                        {cites.map((item) => (
                            <CityImg key={item.id} label={item.label} onClick={() => router.push('/city/' + item.id)} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )


}
