import Cookies from 'js-cookie'
import React from 'react'
import OnTrackService from '../../service/service'

export default function TripNameChange({
    name,
    field,
    setfield,
    setValueName,
    id,
    distanId

}) {
    const ontrack = new OnTrackService()
    const userToken = Cookies.get('auth-token')

    const submit =()=>{
        setfield(false)
        ontrack.EditTtrip(userToken,id,name,null,distanId).then(res=> console.log(res.data)).catch(e=> console.log(e))
    }


    return (
        <div>
            {field &&
                <input onBlur={submit} value={name} onChange={e => setValueName(e.target.value)} />
            }
            {!field &&
                <p className='trip__right-tittle'>{name}</p>
            }
        </div>
    )
}
