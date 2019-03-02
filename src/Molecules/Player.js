import React, { Component } from 'react';
import UserIcon from '../Atoms/UserIcon';

class Player extends Component {
    render() {
        return (
            <div style={{textAlign:"center", borderBottom:"1px solid #d0d0d0"}}>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-evenly", padding: "5px 0px"}}>
                <div style={{textAlign: "center"}}>
                    <UserIcon />
                    {this.props.name}
                </div>
                <div><input type="number" name="Input Points"/></div>
                <div style={{width:"65px", fontSize:"30px"}}><b>{this.props.points}</b></div>
            </div>
            </div>
        );
    }
}

export default Player;