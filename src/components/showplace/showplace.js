import Cookies from 'js-cookie'
import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import OnTrackService from '../../service/service'
import ShowplaceItem from '../showplaceItem/showplaceItem'
import ShowplacePls from '../UI/showplacePls/showplacePls'
import './showplace.css'



const render = (itemplace, showAll, favourites) => {
    return itemplace.slice(0, showAll ? itemplace.length : 3).map((item) =>
        <ShowplaceItem title={item.name} key={item.id} idCard={item.id} urlimg={item.mainPhotoUrl} place={item.textLocation} isF={favourites.some((e) => e.id === item.id)} />
    )
}

export default function Showplace({label,itemplace,name,urlimg}) {
    

    const userToken = Cookies.get('auth-token')
    const ontrack = new OnTrackService();
    const [show]=useState(false);
    const [favourites, setF] = useState([]);
    console.log(itemplace)
    
    useEffect(() => {
        ontrack.GetInfoFavoritePlaceUser(userToken)
            .then(res => setF(res.data));
    }, [])

    return (
        <div className='showplace'>
            <h1>{label}</h1>
            <div className='showplace__cards'>
                {render(itemplace, show, favourites)}
                    {
                        !show && itemplace.length > 3 &&
                        <Link style={{textDecoration: 'none'}} to={{pathname:'/cityattraction' , state:{name,urlimg,label,itemplace}}}> <ShowplacePls/></Link>
                    }
            </div>
        </div>
    
    )
}