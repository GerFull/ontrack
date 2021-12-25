import React, { useState } from 'react'
import DateRangePicker from 'react-bootstrap-daterangepicker';
import './calendar.css'
import 'bootstrap-daterangepicker/daterangepicker.css'
import moment from 'moment';

export default function Calendar({ setDateEnd,setDateStart }) {

    const [start, setStart] = useState(moment())
    const [end, setend] = useState(moment())

    const handleEvent = (start, end) => {
        //setDate(event.target.value)
        //console.log(start)
        setStart(start)
        setend(end)
        setDateStart(start.format('YYYY-MM-DD'))
        setDateEnd()
    }


    const Show = ()=>{
        setDateStart(start.format('YYYY-MM-DD'))
        setDateEnd(end.format('YYYY-MM-DD'))
        
    }




    return (
        <div className='calendar'>
            <p>Даты поездки</p>
            <DateRangePicker
                onApply={Show}
                onCallback={handleEvent}
                initialSettings={{
                    applyClass: 'btn_calnedar',
                    applyButtonClasses: 'btn_calnedar'
                }}
            >
                <input type="text" className="form-control calendar__input" />
            </DateRangePicker>
        </div>
    )
}