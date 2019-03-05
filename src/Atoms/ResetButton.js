import React, { Component } from 'react';

class ResetButton extends Component {
    render() {
        return (
            <div style={{textAlign:"center", paddingRight:"20px"}} >
                <button type="button" onClick={this.props.resetButton} style={{fontSize:"2em", fontWeight:"bold", cursor:"pointer", textAlign:"center"}}>RESET</button>
            </div>
        );
    }
}

export default ResetButton;