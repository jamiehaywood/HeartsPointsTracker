import React, { useContext } from 'react'
import './css/navbar.css'
import { AppContext } from './Store'


export const NavBar = () => {
    const { numberOfGames, incrementGames } = useContext(AppContext)
    return (
        <div className="navbar" onClick={() => { incrementGames() }}>
            <div style={{ textAlign: 'center', padding: '0px 20px' }}>
                <div style={{ fontSize: '25px', color: '#686868' }}><b>{numberOfGames}</b></div>
                <b style={{ fontSize: '12px', color: '#686868' }}>№ Games</b>
            </div>
        </div>
    )
}