import Cookies from 'js-cookie'
import {useEffect, useState} from 'react'
import crossBl from '../../img/crossBlack.png'
import OnTrackService from '../../service/service'
import PartyTripMember from '../PartyTripMember/PartyTripMember'
import PartyTripsDefault from '../PartyTripsDefault/PartyTripsDefault'
import './PartyTrip.css'

export default function PartyTrip({users,idT,role,setActive}) {


    const [code,setCode]=useState('')
    const ontrack= new OnTrackService()
    const userToken = Cookies.get('auth-token')

    const generete =() =>[
        ontrack.GenerateCode(userToken,idT).then(res=> setCode(res.data.InviteCode))
    ]

    useEffect(() => {
        ontrack.GenerateCode(userToken,idT).then(res=> setCode(res.data.InviteCode))
    }, [])

    return (
        <div className='party-trip'>
            <div className='party-trip__header'>
                <p>Участники поездки</p>
                <img style={{cursor:'pointer'}} src={crossBl} alt='croosbl' onClick={()=>setActive(false)}/>
            </div>
            <div className='party-trip__members'>
                {
                    users.map(item=> (

                        role === 0
                        ? <PartyTripMember userID={item.UserId} BeginRole={item.Role} name={item.Username} id={idT} />
                        : <PartyTripsDefault BeginRole={item.Role} name={item.Username} />
                        
                    ))
                }
            </div>
            {
                role === 0 || role === 1 ?
                <div className='trip-member__join'>
                <p className='trip-member__join-text'>Поделитесь кодом, чтобы пригласить участников:</p>
                <div className='trip-member__join-code'>
                    <div className='trip-member__code'>
                        {code}
                    </div>
                    <p style={{cursor: 'pointer'}} onClick={generete}>Сгенерировать новый код</p>
                </div>
                <p >Если вы сгенерируете новый код, старый перестанет работать.<br/>
                Участники не смогут присоединиться по старому коду.
                </p>
            </div>
                
                : null
            }
        </div>
    )
}   
