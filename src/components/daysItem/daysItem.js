import React, { useState, useEffect } from 'react'
import InputDrag from '../UI/inputDrag/inputDrag'
import './daysItem.css'

export default function DaysItem({ board, role }) {

    const [arrActions, setarrActions] = useState(board.Actions)


    const addItem = () => {
        const newActions = arrActions;

        while (newActions.length < 5) {
            newActions.push({ Id:0,Description: '', Name: '', TimeOfAction: '' });
            
        }
        setarrActions(newActions);
    }

    useEffect(() => {
        addItem()
    }, [])


    return (
        <div className='days'>
            <div className='days__tittle'>
                <p>{board.Date}</p>
                <p>{board.DayOfWeek.toUpperCase()}</p>
            </div>
            <div
                className='days__inputs'>
                {
                    arrActions.map(item => (
                        <InputDrag
                            DayId={board.TripDayId}
                            key={item?.id}
                            name={item.Name}
                            timeAction={item.TimeOfAction}
                            comm={item.Description}
                            quiz={item.Poll}
                            id={item.Id}
                            role={role}
                            day={board.Date}
                            dayWeek={board.DayOfWeek}
                        />
                    ))
                }
            </div>
        </div>
    )
}