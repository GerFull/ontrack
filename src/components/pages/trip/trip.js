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
import { Link } from 'react-router-dom'
import TripNameChange from '../../tripNameChange/tripNameChange'
import ChangeData from '../../ChangeData/ChangeData'
import PartyTrip from '../../PartyTrip/PartyTrip'

export default function Trip(props) {

    const idTrip = props.location.state?.id
    const ontrack = new OnTrackService();
    const userToken = Cookies.get('auth-token')
    const [partyTripbtn, setPartyTripbtn] = useState(false)
    const [archivebtn, setArchive] = useState(false)
    const [deletebtn, setDeletebtn] = useState(false)
    const [trip, setTrip] = useState([])
    const [boards, setBoards] = useState([])
    const [field, setfield] = useState(false)

    const cityurl = `/city/${trip.DestinationId}`

    const [valueName, setValueName] = useState('')
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [arrayTrips, setArrayTrips] = useState([])
    const [role, setRole] = useState(Number)
    const [menutrip,setmenutrip]=useState(false)

    const DelteTrip = (idtrip) => {
        ontrack.DeleteTrip(userToken, trip.Id)
    }

    const ChoiceRole = (thistrip) => {
        const userName = localStorage.getItem('userName')
        const RoleArray = thistrip.Users

        RoleArray.forEach(item => {
            if (userName === item.Username && item.Role === 0) {
                setRole(0)
            } else if (userName === item.Username && item.Role === 1) {
                setRole(1)
            } else if (userName === item.Username && item.Role === 2) {
                setRole(2)
            }
        })
    }



    useEffect(() => {
        ontrack.GetTripInfo(userToken, idTrip === undefined ? 0 : idTrip).then(res => {
            ChoiceRole(res.data)
            console.log(res.data)
            setTrip(res.data)
            setBoards(res.data.TripDays)
            setValueName(res.data.Name)
            setStartDate(res.data.TripStart)
            setEndDate(res.data.TripEnd)
        }).catch(e => console.log(e))

        ontrack.GetInfoUser(userToken).then(result => setArrayTrips(result.data.UserTrips))

    }, [idTrip])


    return (
        <div className='position'>
            <div className='active'>
                <Header />
            </div>
            <div className='trip'>
                <MenuTrip arrayTrips={arrayTrips} setmenutrip={setmenutrip} />
                <div className='trip__right'>
                    <div className='trip__right-top'>
                        <div className='trip__right-info'>
                            <TripWay label={trip.Name} />
                            <TripNameChange id={trip.Id} distanId={trip.DestinationId} setValueName={setValueName} name={valueName} field={field} setfield={setfield} />
                            <div className='trip__data-place'>
                                <div className='trip__place'>
                                    <img className='trip__img' src={mapbl} alt=' ' />
                                    <p>{trip.DestinationName}</p>
                                    <Link style={{ textDecoration: `none` }} to={cityurl} ><p className='trip__citypage'>Перейти к городу &gt;&gt;</p></Link>
                                </div>
                                <div className='trip__data'>
                                    <img className='trip__img' src={calendarbl} alt='bl' />
                                    <ChangeData startD={startDate} setStardD={setStartDate} endD={endDate} setEndD={setEndDate}/>
                                </div>
                            </div>
                        </div>
                        <div className='trip__functions'>
                            <div className='trip__func'>
                                <div className='trip__team'>
                                    <div className='trip__team-item' />
                                    <div onClick={() => setPartyTripbtn(true)} className='trip__team-pls'>
                                        <img src={cross} alt='cross' />
                                    </div>
                                </div>
                                {
                                    role === 0 || role === 1 ? <div className='trip__func-img'>
                                        <img style={{ cursor: 'pointer' }} src={pencil} alt='' onClick={() => setfield(!field)} />
                                        <img style={{ cursor: 'pointer' }} onClick={() => setArchive(true)} src={archive} alt='' />
                                        <img style={{ cursor: 'pointer' }} onClick={() => DelteTrip(idTrip)} src={delet} alt='' />
                                    </div> : null
                                }
                            </div>
                        </div>
                    </div>
                    <div className='trip__days'>
                        {
                            boards.map(board =>
                                <DaysItem
                                    role={role}
                                    key={board.id}
                                    board={board}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
            <Footer bootom='true' />
            <Modalpr active={partyTripbtn} setActive={setPartyTripbtn}>
                <PartyTrip
                    setActive={setPartyTripbtn}
                    users={trip.Users}
                    code={trip.InviteCode}
                    idT={trip.Id}
                    role={role}
                />
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
