import React, { Component } from 'react';
import soundboardicon from './Images/soundboardicon.png'

class SoundBoardIcon extends Component {
    render() {
        return (
            <div style={{padding:"10px"}}>
               <img src={soundboardicon} alt="soundboardicon" height="30px"/>
            </div>
        );
    }
}

export default SoundBoardIcon;