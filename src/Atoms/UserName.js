import React, { Component } from 'react'

class UserName extends Component {
  render () {
    return (
      <div style={{ fontSize: '1em', fontWeight: 'bold' }}>Johnny Doe
        {/* pass in name from parent component which holds the players objects */}
      </div>
    )
  }
}

export default UserName
