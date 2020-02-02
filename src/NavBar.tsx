import React, { useContext } from 'react'
import './css/navbar.css'
import { Save, Resume, Sound } from './images'
import GlobalStore from './index'
import { observer } from 'mobx-react'
import * as Colours from './constants/colourConst'

export const NavBar = observer(() => {
  const store = useContext(GlobalStore)
  const iconPresets = {
    width: "6vmin",
    fill: Colours.iconColours
  }

  return (
    <table className="navbar">
      <tr style={{ width: "100%" }}>
        <td style={{ fontSize: "4vh", color: Colours.navbarText, width: "25%", textAlign: "start" }}>
          <NavIcon label="№ Games">
            <div style={{ fontWeight: 'bold', fontSize: iconPresets.width }}>{store.GameStore.numberOfGames}</div>
          </NavIcon>
        </td>
        <td style={{ margin: 'auto', width: "50%", textAlign: 'center' }}>
          {store.Players.players.length > 0
            ? <NavIcon label="Save"><Save {...iconPresets} /></NavIcon>
            : <NavIcon label="Resume"> <Resume {...iconPresets} /></NavIcon>}
        </td>
        <td style={{ width: "25%", textAlign: 'end' }}>
          <NavIcon label="Sound"><Sound {...iconPresets} /></NavIcon>
        </td>
      </tr>
    </table >
  )
})

interface props {
  label?: string
}

const NavIcon: React.FC<props> = (props) => {
  return (
    <div style={{ display: 'inline-grid', padding:'0vmin 2vmin'}}>
      <div style={{ margin: 'auto' }}>{props.children}</div>
      <div style={{ color: Colours.navbarText, marginTop: '-5px', fontSize: "3.5vmin", textAlign: "center" }}>{props.label}</div>
    </div>
  )
}

export default NavIcon