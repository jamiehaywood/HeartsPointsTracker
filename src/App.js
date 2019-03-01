import React, { Component } from 'react';
import AddPlayerButton from './Atoms/AddPlayerButton';
import Player from './Molecules/Player';
import ResetButton from './Atoms/ResetButton';

class App extends Component {
  render() {
    return (
      <div>
        <Player />
        <AddPlayerButton />
        <ResetButton />
        <p>BOTTOM NAVIGATION</p>
      </div>
    );
  }
}

export default App;