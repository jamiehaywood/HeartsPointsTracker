import React, { Component } from 'react';
import plus from "./Images/plus.png"

class AddPlayerButton extends Component {
    render() {
        return (
            <div onClick={this.props.addPlayerButton} style={{textAlign:"center"}}>
                <img src={plus} height="60em" alt='plusIcon' style={{cursor:"pointer"}} />

                {/* 1. Plus Icon with onClick event triggering a "name" input popup ✅
                    2. A function that adds a new Player to the state array ✅
                */}
            </div>
        );
    }
}

export default AddPlayerButton;