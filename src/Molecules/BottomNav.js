import React, { Component } from 'react'
import SoundBoardIcon from '../Atoms/SoundBoardIcon'

class BottomNav extends Component {
  render () {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#F6F6F6', width: '100%', borderTop: '1px solid #D0D0D0' }}>

        <div style={{ textAlign: 'center', padding: '0px 20px' }}>
          <div style={{ fontSize: '25px', color: '#686868' }}><b>{this.props.gamesNumber}</b></div>
          <b style={{ fontSize: '12px', color: '#686868' }}>№ Games</b>
        </div>

        <SoundBoardIcon />
      </div>
    )
  }
}

export default BottomNav
