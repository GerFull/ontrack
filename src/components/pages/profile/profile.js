import React, { useEffect, useState } from 'react';
import Header from '../../header/header';
import ButtonPls from '../../UI/buttnoPls/buttonPls';
import Footer from '../footer/footer';
import './profile.css';
import mail from '../../../img/mail.png'
import ItemProfile from '../../itemProfile/itemProfile';
import Modalpr from '../../modalpr/modalpr';
import CreateItemPr from '../../createItemPr/createItemPr';
import ChangePr from '../../changePr/changePr';
import ModalCreateTrip from '../../modalCreateTrip/modalCreateTrip';
import OnTrackService from '../../../service/service';
import Cookies from 'js-cookie';

export default function Profile() {

    const ontrack = new OnTrackService();

    const userToken = Cookies.get('auth-token')
    const [userInfo, setuserInfo] = useState([])
    const [toggleState, setToggleState] = useState(1);
    const [modalActtive, setModalActive] = useState(false);
    const [createTrip, setCreateTrip] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    const getUSet = () => {
        ontrack.GetInfoUser(userToken)
            .then(res => {
                console.log(res.data)
                setuserInfo(res.data)
            })
            .catch(e => console.log(e))
    }




    useEffect(() => {
        getUSet()
    },[])

    return (
        <div>
            <div className='active'>
                <Header />
            </div>
            <div className='container__pr'>
                <div className='profile'>
                    <div className='profile__body'>
                        <div className='body__left'>
                            <div className='profile__avatar'>
                                <div className='avatar'></div>
                                <ButtonPls />
                            </div>
                            <div className='profile__descr'>
                                <p className='profile__name'>{userInfo.Username}</p>
                                <div className='profile__mail'>
                                    <img src={mail} alt='mail' />
                                    <p>{userInfo.Email}</p>
                                </div>
                                <p onClick={() => setModalActive(true)} className='profile__change'>Редактировать профиль</p>
                            </div>
                        </div>
                        <div className='body__right'>
                            <div className='right__title'>
                                <h2>Мои поездки</h2>
                                <div className='block__tabs'>
                                    <p onClick={() => toggleTab(1)} className={toggleState === 1 ? "tabs active__tabs" : "tabs"}>Активные</p>
                                    <p onClick={() => toggleTab(2)} className={toggleState === 2 ? "tabs active__tabs" : "tabs"}>Архив</p>
                                </div>
                                <div className='contents__tabs'>
                                    <div className={toggleState === 1 ? "content active__content" : "content"}>
                                        {userInfo.UserTrips?.map(item => (
                                            <ItemProfile key={item.Id} id={item.Id} title={item.Name} city={item.DestinationName} datastart={item.TripStart} dataend={item.TripEnd} />
                                        ))}
                                        <CreateItemPr onClick={() => setCreateTrip(true)} />
                                    </div>
                                    <div className={toggleState === 2 ? "content active__content" : "content"}>
                                        Архив
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer__abs' >
                <Footer />
            </div>
            <Modalpr active={modalActtive} setActive={setModalActive}>
                <ChangePr setActive={setModalActive} />
            </Modalpr>
            <Modalpr active={createTrip} setActive={setCreateTrip} >
                <ModalCreateTrip setActive={setCreateTrip} />
            </Modalpr>
        </div>
    )
}
