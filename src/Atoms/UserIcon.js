import React, { Component } from 'react';
import userIconPlaceholder from './Images/userIconPlaceholder.jpg';
class UserIcon extends Component {
    render() {
        return (
            <div>
                <img src={userIconPlaceholder} alt="userIcon" height="65em"></img>
                {/* Rendering an image of some sort.
                    1. Render a static image for now
                    2. Render an image uploaded by the user
                */}
            </div>
        );
    }
}

export default UserIcon;