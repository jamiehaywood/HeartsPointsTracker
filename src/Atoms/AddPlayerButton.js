import React, { Component } from 'react'
import plus from './Images/plus.png'

class AddPlayerButton extends Component {
  render () {
    return (
      <div onClick={this.props.addPlayerButton} style={{ textAlign: 'center', padding: '10px' }}>
        <img src={plus} height='60em' alt='plusIcon' style={{ cursor: 'pointer' }} />
      </div>
    )
  }
}

export default AddPlayerButton
