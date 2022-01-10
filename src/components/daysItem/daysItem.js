import React from 'react'
import InputDrag from '../UI/inputDrag/inputDrag'
import './daysItem.css'

export default function DaysItem({board,dragOverHandler,dragLeaveHandler,dragStarthandler,dragEndHandler,dropHandler,dropCardHandler}) {

    
    return (
        <div className='days'
        //onDragOver={e=>dragOverHandler(e)}
        //onDrop={e=>dropCardHandler(e,board)}
        >
            <div className='days__tittle'>
                <p>{board.Date}</p>
                <p>{board.DayOfWeek.toUpperCase()}</p>
            </div>
            <div
                className='days__inputs'>
                {
                    board.Actions?.map(item => (
                        <InputDrag key={item?.id}
                        name={item.Name}
                        timeAction={item.TimeOfAction}
                        comm={item.Description}
                        quiz={item.Poll}
                        id={item.Id}
                            //onDragOver={e => dragOverHandler(e)}
                            //onDragLeave={e => dragLeaveHandler(e)}
                            //onDragStart={e => dragStarthandler(e, board, item)}
                            //onDragEnd={e => dragEndHandler(e)}
                            //onDrop={e => dropHandler(e, board, item)} 
                            />
                    ))
                }
            </div>
        </div>
    )
}