import React, { useState } from 'react'
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css'
import moment from 'moment';
import './ChangeData.css'

export default function ChangeData({ startD, endD, field, setStardD, setEndD }) {

    const [start, setStart] = useState(moment())
    const [end, setend] = useState(moment())
    
    const handleEvent = (start, end) => {
        setStart(start)
        setend(end)
    }


    const Show = () => {
        setStardD(start.format('DD.MM.YYYY'))
        setEndD(end.format('DD.MM.YYYY'))

    }


    return (
        <div>
            {field &&
                <DateRangePicker
                    onCallback={handleEvent}
                    onApply={Show}
                    initialSettings={{
                        startDate: startD, endDate:endD,
                        locale: {
                            format: 'DD.MM.YYYY',
                        },
                    }}

                >
                    <input type="text" className="form-control calendar__input" />
                </DateRangePicker>
            }
            {!field &&
                <p className='change-data'>{startD}-{endD}</p>
            }
        </div>
    )
}

function toUs(date) {
    if (!date) {
        return undefined;
    }

    if (typeof date === 'string') {
        const dateParts = date.split('.');
        const thisDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

        return `${thisDate.getMonth() + 1}/${thisDate.getDate()}/${thisDate.getUTCFullYear()}`
    }

    return `${date.getMonth() + 1}/${date.getDate()}/${date.getUTCFullYear()}`
}