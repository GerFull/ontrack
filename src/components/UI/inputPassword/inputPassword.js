import React from 'react';
import './inputPassword.css';
import notView from '../../../img/notview.png';
import viewimg from '../../../img/view.png'


export default function InputPassword({ value,label,setValue}) {


    const changetype = (e) => {
        console.log(e.target)
        console.log(e.currentTarget)
        // if (e.target.type === "password") {
        //     e.target.type = "text";
        //     e.target.src = `${viewimg}`
        // } else {
        //     e.target.type = "password";
        //     e.target.src = `${notView}`
        // }
    }


    return (
        <div className='input__password'>
            <p>{label}</p>
            <input onChange={event => setValue(event.target.value)} id='inputpassword' value={value} type='password' />
            <img src={notView} alt='##' onClick={changetype} />
        </div>
    )
}
