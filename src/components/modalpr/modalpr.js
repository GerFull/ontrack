import React from 'react';
import './modalpr.css';


export default function Modalpr({ active, setActive, children }) {
    return (
        <>
            {
                active ? <div className='modal active' onClick={() => setActive(false)} >
                    <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                        {children}
                    </div>
                </div> : null
            }
        </>
    )
}
