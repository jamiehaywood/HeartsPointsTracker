import React, { Component } from 'react';
import UserIcon from '../Atoms/UserIcon';

class Player extends Component {
    render() {
        return (
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <div style={{textAlign: "center"}}>
                    <UserIcon />
                    {this.props.name}
                </div>
                <div><input type="tel" name="Input Points"/></div>
                <div><b>{this.props.points}</b></div>
            </div>
        );
    }
}

export default Player;