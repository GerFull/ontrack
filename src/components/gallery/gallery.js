import React, { useState} from 'react'
import next from '../../img/nextarrow.png'
import prev from '../../img/prevarrow.png'
import './gallery.css'


export default function Gallery({ Photos }) {


    const [imgarr, setImgarr] = useState(Photos)
    const lenght = imgarr?.length;
    const galleryArray=imgarr.slice(1)
    console.log(galleryArray)
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

    

    return (


        <div className='gallery'>
            <img src={nowImg} alt='asd' className='selected' />
            <img src={next} alt='nextarrow' className='nextarrow' onClick={nextimg} />
            <img src={prev} alt='prevarrow' className='prevarrow' onClick={previmg} />
            <div className='imgcontainer'>
                {galleryArray.map((img, index) => (
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
