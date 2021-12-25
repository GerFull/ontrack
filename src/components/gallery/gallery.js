import React, { useState, useEffect } from 'react'
import next from '../../img/nextarrow.png'
import prev from '../../img/prevarrow.png'
import './gallery.css'


export default function Gallery({ Photos }) {

    const [imgarr, setImgarr] = useState(["http://188.186.7.171/travelhelperbackend/api/files/photos/3",
        "http://188.186.7.171/travelhelperbackend/api/files/photos/5",
        "http://188.186.7.171/travelhelperbackend/api/files/photos/6",
        "http://188.186.7.171/travelhelperbackend/api/files/photos/7",
        "http://188.186.7.171/travelhelperbackend/api/files/photos/8",
        "http://188.186.7.171/travelhelperbackend/api/files/photos/9"])
    const lenght = imgarr?.length;

    const [nowImg, setNowImg] = useState(imgarr[0]);
    const [current, setCurrent] = useState(0);


    const nextimg = () => {
        setCurrent(current === lenght - 1 ? 0 : current + 1)
        setNowImg(imgarr[current])
    }

    const previmg = () => {
        setCurrent(current === 0 ? lenght - 1 : current - 1)
        setNowImg(imgarr[current])
    }

    useEffect(() => {
    }, [])

    return (


        <div className='gallery'>
            <img src={nowImg} alt='asd' className='selected' />
            <img src={next} alt='nextarrow' className='nextarrow' onClick={nextimg} />
            <img src={prev} alt='prevarrow' className='prevarrow' onClick={previmg} />
            <div className='imgcontainer'>
                {imgarr.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt='###'
                        onClick={() => setNowImg(img)} />
                ))}
            </div>
        </div>
    )
}
