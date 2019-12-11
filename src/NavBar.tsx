import React, { useContext } from 'react'
import './css/navbar.css'
import { saveIcon, sound, resume } from './images'
import GlobalStore from './index'
import { observer } from 'mobx-react'

export const NavBar = observer(() => {
  const store = useContext(GlobalStore)
  return (
    <div className="navbar" onClick={() => { console.log("hi"); }}>
      <div style={{ textAlign: 'center', padding: '0px 20px' }}>
        <div style={{ fontSize: '25px', color: '#686868' }}><b>{store.GameStore.numberOfGames}</b></div>
        <b style={{ fontSize: '12px', color: '#686868' }}>№ Games</b>
      </div>
      {store.Players.players.length > 0
        ? <div style={{ margin: "auto" }}><img alt="hi" src={saveIcon} /></div>
        : <div style={{ margin: "auto" }}><img alt="hi1" src={resume} /></div>}
      <div style={{ padding: "0px 20px" }}><img alt="ho" src={sound} /></div>
    </div>
  )
})