import React, { useState, useEffect } from 'react'
import OnTrackService from '../../service/service'
import './PartyTripMember.css'

export default function PartyTripMember({ rolee }) {

    const [role, setRole] = useState()

    const ChangeRole = (value) => {
        setRole(value)
        show()
    }
    //const ontrack = new OnTrackService()
    const show = () => {
        console.log(role)
    }

    useEffect(() => {
        setRole(rolee)
    }, [])

    // id поездки
    // id пользователя 
    // role 

    const uslovie = () => {
        if (rolee === true) {
            return (
                <>
                    <option value='2'>Участник</option>
                    <option selected value='1'>Редактор</option>
                </>
            )
        } else {
            return (
                <>
                    <option selected value='2'>Участник</option>
                    <option value='1'>Редактор</option>
                </>
            )
        }
    }

    return (
        <div className='trip-member'>
            {
                rolee === '0' ?
                    <div className='party-trip__creater'>
                        <div>
                            <div className='party-trip__avatart'></div>
                            <p className='party-trip__text'>Петр Петрович</p>
                        </div>
                        <p className='party-trip__text'>Создатель</p>
                    </div>
                    :
                    <>
                        <div className='trip-member__roles'>
                            <div>
                                <div className='party-trip__avatart'></div>
                                <p className='party-trip__text'>Name</p>
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
