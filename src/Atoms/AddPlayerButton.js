import React, { Component } from 'react';
import plus from "./Images/plus.png"

class AddPlayerButton extends Component {
    render() {
        return (
            <div>
                <img src={plus} height="60em" alt='plusIcon' onClick={{/*do something*/}
                } style={{cursor:"pointer"}} />

                {/*Plus Icon with onClick event triggering a "name" input popup and then a function that adds a new Player component*/}
            </div>
        );
    }
}

export default AddPlayerButton;