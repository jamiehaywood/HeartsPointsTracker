import React from 'react'
import './css/navbar.css'
import { saveIcon, sound } from './images'

export const NavBar = () => {

    return (
        <div className="navbar" onClick={() => { console.log("hi"); }}>
            <div style={{ textAlign: 'center', padding: '0px 20px' }}>
                <div style={{ fontSize: '25px', color: '#686868' }}><b>{10}</b></div>
                <b style={{ fontSize: '12px', color: '#686868' }}>№ Games</b>
            </div>
            <div style={{ margin: "auto" }}><img alt="hi" src={saveIcon} /></div>
            <div style={{ padding: "0px 20px" }}><img alt="ho" src={sound} /></div>

        </div>
    )
}