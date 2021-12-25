import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import './Loader.css'

export default function Loader() {

    const override = css`
        display: block;
        `;

    return (
        <div className='loader'>
            <ClipLoader  css={override} color='#2234DB' size={140} />
        </div>
    )
}
