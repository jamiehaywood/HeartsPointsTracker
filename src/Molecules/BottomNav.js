import React, { Component } from 'react';
import Soundboard from '../Atoms/SoundBoardIcon';

class BottomNav extends Component {
    render() {
        return (
            <div>
                <MostPointsPerGame />
                <NumberOfGames />
                <Soundboard />
            </div>
        );
    }
}

export default BottomNav;