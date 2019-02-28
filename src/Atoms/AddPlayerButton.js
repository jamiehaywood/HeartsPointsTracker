import React, { Component } from 'react';
import plus from "./Images/plus.png"

class AddPlayerButton extends Component {
    addPlayerFunction() {
        var playerName = prompt("Please enter your name:", "Full Stack")

        if (playerName === null || playerName === "") {
            playerName = prompt("Please enter your name:", "You Bin")
        }
        else {
            var obj = {};
            obj["name"] = {playerName};
            obj["points"] = [0,];
            console.log("Player Object has been created")
        }
    }
    render() {
        return (
            <div>
                <img src={plus} height="60em" alt='plusIcon' onClick={this.addPlayerFunction} style={{cursor:"pointer"}} />

                {/*Plus Icon with onClick event triggering a "name" input popup and then a function that adds a new Player component*/}
            </div>
        );
    }
}

export default AddPlayerButton;