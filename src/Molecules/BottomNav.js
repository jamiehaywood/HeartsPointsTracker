import React, { Component } from 'react';
import Soundboard from '../Atoms/SoundBoardIcon';

class BottomNav extends Component {
    render() {
        return (
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-evenly", backgroundColor:"#F6F6F6", position:"fixed", bottom:"0%", width:"100%"}}>
                <div style={{fontSize:"30px"}}><b>{this.props.gamesNumber}</b></div>
                <Soundboard />
            </div>
        );
    }
}

export default BottomNav;