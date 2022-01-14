import React from 'react'

export default function PartyTripsDefault({ BeginRole, name }) {


    const roleSHow = () => {
        if (BeginRole === 0) {
            return <p>Создатель</p>
        } else if (BeginRole === 1) {
            return <p>Редактор</p>
        } else {
            return <p>Участник</p>
        }

    }



    return (
        <div className='trip-member'>


            <div className='trip-member__roles'>
                <div>
                    <div className='party-trip__avatart'></div>
                    <p className='party-trip__text'>{name}</p>
                </div>
                {roleSHow()}
            </div>


        </div>
    )
}
