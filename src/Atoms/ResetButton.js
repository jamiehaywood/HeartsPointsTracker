import React, { Component } from 'react';

class ResetButton extends Component {
    render() {
        return (
            <div style={{fontSize:"2em", fontWeight:"bold", cursor:"pointer"}} onClick={{/*Clear parent array of player objects*/}}>
                RESET{/* Reset clears all points arrays, and all users */}
            </div>
        );
    }
}

export default ResetButton;