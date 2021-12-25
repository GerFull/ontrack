import React, { useState, useEffect } from 'react'
import Header from '../../header/header'
import MenuTrip from '../../menuTrip/menuTrip'
import TripWay from '../../tripWay/tripWay'
import Footer from '../footer/footer'
import mapbl from '../../../img/mapblack.png'
import calendarbl from '../../../img/blackcalendar.png'
import pencil from '../../../img/pencil.png'
import archive from '../../../img/archive.png'
import delet from '../../../img/delete.png'
import './trip.css'
import DaysItem from '../../daysItem/daysItem'
import Modalpr from '../../modalpr/modalpr'
import cross from '../../../img/cross.png'
import Cookies from 'js-cookie'
import OnTrackService from '../../../service/service'
import moment from 'moment'
import { Link } from 'react-router-dom'

export default function Trip() {


    const ontrack = new OnTrackService();
    const userToken = Cookies.get('auth-token')
    const [partyTrip, setPartyTrip] = useState(false)
    const [archivebtn, setArchive] = useState(false)
    const [deletebtn, setDeletebtn] = useState(false)
    const [currentBoard, setCurrentBoard] = useState([])
    const [currentItem, setCurrentItem] = useState(null)
    const [trip, setTrip] = useState([])
    const [boards, setBoards] = useState([
        { id: 1, data: '25.12', dayweek: 'Сб', items: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }] },
        { id: 2, data: '26.12', dayweek: 'Вс', items: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }] },
        { id: 3, data: '27.12', dayweek: 'Пн', items: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }] },
        { id: 4, data: '28.12', dayweek: 'Вт', items: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }] }
    ])
    // const [boards, setBoards] = useState([])

    const dragOverHandler = (e) => {
        e.preventDefault()
    }

    const dragLeaveHandler = (e) => {
    }

    const dragStarthandler = (e, board, item) => {
        setCurrentBoard(board)
        setCurrentItem(item)
    }

    const dragEndHandler = (e) => {
    }

    const dropHandler = (e, board, item) => {
        e.stopPropagation()
        e.preventDefault()
        const currentIndex = currentBoard.items?.indexOf(currentItem)
        currentBoard.items?.splice(currentIndex, 1)
        const dropIndex = board.items?.indexOf(item)
        board.items?.splice(dropIndex + 1, 0, currentItem)
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }

    const dropCardHandler = (e, board) => {
        board?.items?.push(currentItem)
        const currentIndex = currentBoard.items?.indexOf(currentItem)
        currentBoard.items?.splice(currentIndex, 1)
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }

    // useEffect(() => {
    //     ontrack.GetTripInfo(userToken, 3).then(res => {
    //         console.log(res.data)
    //         setTrip(res.data)
    //         //setBoards(res.data.TripDays)
    //     }).catch(e => console.log(e))
    // }, [])

    return (
        <div>
            <div className='active'>
                <Header />
            </div>
            <div className='trip'>
                <MenuTrip />
                <div className='trip__right'>
                    <div className='trip__right-top'>
                        <div className='trip__right-info'>
                            <TripWay label='Туса в Екб'/>
                            {/* <p className='trip__right-tittle'>{trip.Name}</p> */}
                            <p className='trip__right-tittle'>Туса в Екб</p>
                            <div className='trip__data-place'>
                                <div className='trip__place'>
                                    <img className='trip__img' src={mapbl} alt=' ' />
                                    {/* <p>{trip.DestinationName}</p> */}
                                    <p>Екатеринбург</p>
                                    <Link style={{textDecoration: 'none'}} to='/city/1'><p className='trip__citypage'>Перейти к городу &gt;&gt;</p></Link>
                                </div>
                                <div className='trip__data'>
                                    <img className='trip__img' src={calendarbl} alt='bl' />
                                    {/* <p>{trip.TripStart} - {trip.TripEnd}</p> */}
                                    <p>2021.25.12 -2021.28.12</p>
                                </div>
                            </div>
                        </div>
                        <div className='trip__functions'>
                            <div className='trip__func'>
                                <div className='trip__team'>
                                    <div className='trip__team-item' />
                                    <div className='trip__team-item' />
                                    <div onClick={() => setPartyTrip(true)} className='trip__team-pls'>
                                        <img src={cross} alt='cross' />
                                    </div>
                                </div>
                                <div className='trip__func-img'>
                                    <img src={pencil} alt='' />
                                    <img style={{ cursor: 'pointer' }} onClick={() => setArchive(true)} src={archive} alt='' />
                                    <img style={{ cursor: 'pointer' }} onClick={() => setDeletebtn(true)} src={delet} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='trip__days'>
                        {
                            boards.map(board =>
                                <DaysItem
                                    dropCardHandler={dropCardHandler}
                                    key={board.id}
                                    data={board.data}
                                    dweek={board.dayweek}
                                    board={board}
                                    dragOverHandler={dragOverHandler}
                                    dragLeaveHandler={dragLeaveHandler}
                                    dragStarthandler={dragStarthandler}
                                    dragEndHandler={dragEndHandler}
                                    dropHandler={dropHandler}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
            <Footer />
            <Modalpr active={partyTrip} setActive={setPartyTrip}>
                Участники
            </Modalpr>
            <Modalpr active={archivebtn} setActive={setArchive}>
                Архивировать?
            </Modalpr>
            <Modalpr active={deletebtn} setActive={setDeletebtn}>
                Удалить?
            </Modalpr>
        </div>
    )
}
