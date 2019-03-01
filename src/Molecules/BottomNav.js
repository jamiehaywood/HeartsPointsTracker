import React, { Component } from 'react';
import MostPointsPerGame from '../Atoms/MostPointsPerGame';
import NumberOfGames from '../Atoms/NumberOfGames';
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