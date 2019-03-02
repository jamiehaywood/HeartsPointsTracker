import React, { Component } from 'react';
import UserIcon from '../Atoms/UserIcon';
import TotalPoints from '../Atoms/TotalPoints';
import PointsInput from '../Atoms/PointsInput';

class Player extends Component {
    render() {
        return (
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <div style={{textAlign: "center"}}>
                    <UserIcon />
                    {this.props.name}
                </div>
                <PointsInput /> <input type="tel" name="Input Points"/>
                <TotalPoints /><b>2000</b>
            </div>
        );
    }
}

export default Player;