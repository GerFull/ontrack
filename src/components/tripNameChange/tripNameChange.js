import React from 'react'

export default function TripNameChange({ name, field, setfield,setValueName }) {
    
    return (
        <div>
            {field &&
                    <input onBlur={() => setfield(false)} value={name} onChange={e=>setValueName(e.target.value)}/>
            }
            {!field &&
                <p className='trip__right-tittle'>{name}</p>
            }
        </div>
    )
}
