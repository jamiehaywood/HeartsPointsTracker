import React, { Component } from 'react';
import AddPlayerButton from './Atoms/AddPlayerButton';
import Player from './Molecules/Player';

class App extends Component {
  render() {
    return (
      <div>
        <Player />
        <AddPlayerButton />
        <p>RESET</p>
        <p>BOTTOM NAVIGATION</p>
      </div>
    );
  }
}

export default App;