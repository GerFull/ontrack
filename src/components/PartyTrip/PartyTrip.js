import React from 'react'
import crossBl from '../../img/crossBlack.png'
import PartyTripMember from '../PartyTripMember/PartyTripMember'
import './PartyTrip.css'

export default function PartyTrip() {
    return (
        <div className='party-trip'>
            <div className='party-trip__header'>
                <p>Участники поездки</p>
                <img src={crossBl} alt='croosbl' />
            </div>
            <div className='party-trip__members'>
                <PartyTripMember rolee='0' />
                <PartyTripMember rolee='true' />
                <PartyTripMember rolee={true} />
            </div>
            <div className='trip-member__join'>
                <p className='trip-member__join-text'>Поделитесь кодом, чтобы пригласить участников:</p>
                <div className='trip-member__join-code'>
                    <div className='trip-member__code'>
                        Kj96Do11
                    </div>
                    <p>Сгенерировать новый код</p>
                </div>
                <p>Если вы сгенерируете новый код, старый перестанет работать.<br/>
                Участники не смогут присоединиться по старому коду.
                </p>
            </div>
        </div>
    )
}   
