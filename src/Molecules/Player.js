import React, { Component } from 'react';
import UserIcon from '../Atoms/UserIcon';
import UserName from '../Atoms/UserName';
import TotalPoints from '../Atoms/TotalPoints';
import PointsInput from '../Atoms/PointsInput';

class Player extends Component {
    render() {
        return (
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <div style={{textAlign: "center"}}>
                    <UserIcon />
                    <UserName />
                </div>
                <PointsInput /> <input type="text" name="Input Points"/>
                <TotalPoints /><b>2000</b>
            </div>
        );
    }
}

export default Player;