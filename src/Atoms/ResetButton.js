import React, { Component } from 'react'

class ResetButton extends Component {
  render () {
    return (
      <div style={{ textAlign: 'center' }} >
        <button type='button' onClick={this.props.resetButton} style={{ fontSize: '2em', fontWeight: 'bold', color: '#686868', cursor: 'pointer', textAlign: 'center' }}>RESET</button>
      </div>
    )
  }
}

export default ResetButton
