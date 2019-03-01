import React, { Component } from 'react';
import soundboardicon from './Images/soundboardicon.png'

class SoundBoardIcon extends Component {
    render() {
        return (
            <div>
               <img src={soundboardicon} alt="soundboardicon" height="40px"/>
            </div>
        );
    }
}

export default SoundBoardIcon;