import React, { useState } from 'react'
import ItemTripActive from '../itemTripActive/itemTripActive';
import ItemTripArch from '../itemTripArch/itemTripArch';
import burger from '../../img/burger.png'
import Menu from '../menu/menu';
import './menuTrip.css'
import ItemtripPls from '../itemtripPls/itemtripPls';
import Modalpr from '../modalpr/modalpr';
import ModalCreateTrip from '../modalCreateTrip/modalCreateTrip';

export default function MenuTrip() {

    const [menuActive, setMenuActive] = useState(false);
    const [plsTrip, setPlstrip] = useState(false);

    return (
        <>
            <div className='trip__menu'>
                <div className='trip__left-menu'/>
                <div className='trip__right-menu'>
                    <img src={burger} alt='burger' onClick={() => setMenuActive(!menuActive)} />
                    <p>Активные</p>
                    <div className='trip__active'>
                        <ItemTripActive active={menuActive} setActive={setMenuActive} label='TЕ' />
                        <ItemtripPls onClick={() => setPlstrip(true)} active={menuActive}/>
                    </div>
                    <p>Архив</p>
                    <div className='trip__archive'>
                        <ItemTripArch active={menuActive} setActive={setMenuActive} label='BR' />
                    </div>
                </div>
            </div>
            <Menu active={menuActive} setActive={setMenuActive} />
            <Modalpr active={plsTrip} setActive={setPlstrip}>
                <ModalCreateTrip setActive={setPlstrip}/>
            </Modalpr>
        </>
    )
}
