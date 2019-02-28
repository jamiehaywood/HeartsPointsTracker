import React, { Component } from 'react';
import UserIcon from '../Atoms/UserIcon';
import UserName from '../Atoms/UserName';
import TotalPoints from '../Atoms/TotalPoints';
import PointsInput from '../Atoms/PointsInput';

class Player extends Component {
    render() {
        return (
            <div>
                <UserIcon />
                <UserName />
                <TotalPoints />
                <PointsInput />
            </div>
        );
    }
}

export default Player;