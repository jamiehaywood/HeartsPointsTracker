import React, { Component } from 'react';
import Player from './Molecules/Player';
import AddPlayerButton from './Atoms/AddPlayerButton';

class App extends Component {
  render() {
    return (
      <div>
        <p>PLAYERS</p>
        <AddPlayerButton />
        <p>RESET</p>
        <p>BOTTOM NAVIGATION</p>
        <Player />
      </div>
    );
  }
}

export default App;