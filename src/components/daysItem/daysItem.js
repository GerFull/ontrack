import React from 'react'
import InputDrag from '../UI/inputDrag/inputDrag'
import './daysItem.css'

export default function DaysItem({data, dweek, board,dragOverHandler,dragLeaveHandler,dragStarthandler,dragEndHandler,dropHandler,dropCardHandler}) {

    
    
    return (
        <div className='days'
        onDragOver={e=>dragOverHandler(e)}
        onDrop={e=>dropCardHandler(e,board)}
        >
            <div className='days__tittle'>
                <p>{data}</p>
                <p>{dweek}</p>
            </div>
            <div
                className='days__inputs'>
                {/* {
                    board.Actions?.map(item => (
                        <InputDrag key={item?.id}
                            onDragOver={e => dragOverHandler(e)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragStart={e => dragStarthandler(e, board, item)}
                            onDragEnd={e => dragEndHandler(e)}
                            onDrop={e => dropHandler(e, board, item)} />
                    ))
                } */}
                {
                    board.items?.map(item => (
                        <InputDrag key={item?.id}
                            onDragOver={e => dragOverHandler(e)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragStart={e => dragStarthandler(e, board, item)}
                            onDragEnd={e => dragEndHandler(e)}
                            onDrop={e => dropHandler(e, board, item)} />
                    ))
                }
            </div>
        </div>
    )
}