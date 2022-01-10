import Cookies from 'js-cookie'
import React, { useState, useEffect } from 'react'
import OnTrackService from '../../service/service'
import './PartyTripMember.css'

export default function PartyTripMember({ BeginRole, name, id, userID }) {

    const ontrack = new OnTrackService()
    const userToken = Cookies.get('auth-token')



    const ChangeRole = (value) => {
        const role= Number(value)
        ontrack.ChengeRole(userToken, id, userID,role).then(res=> console.log(res.data)).catch(e=> console.log(e))
    }

    // id поездки = id
    // id пользователя =
    // role = BeginRole

    const uslovie = () => {
        if (BeginRole === 1) {
            return (
                <>
                    <option value={2}>Участник</option>
                    <option selected value={1}>Редактор</option>
                </>
            )
        } else {
            return (
                <>
                    <option selected value={2} >Участник</option>
                    <option value={1} >Редактор</option>
                </>
            )
        }
    }

    return (
        <div className='trip-member'>
            {
                BeginRole === 0 ?
                    <div className='party-trip__creater'>
                        <div>
                            <div className='party-trip__avatart'></div>
                            <p className='party-trip__text'>{name}</p>
                        </div>
                        <p className='party-trip__text'>Создатель</p>
                    </div>
                    :
                    <>
                        <div className='trip-member__roles'>
                            <div>
                                <div className='party-trip__avatart'></div>
                                <p className='party-trip__text'>{name}</p>
                            </div>
                            <select onChange={e => ChangeRole(e.target.value)}>
                                {
                                    uslovie()
                                }
                            </select>
                        </div>
                    </>
            }
        </div>
    )
}
