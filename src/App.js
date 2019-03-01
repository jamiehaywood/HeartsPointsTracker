import React, { Component } from 'react';
import AddPlayerButton from './Atoms/AddPlayerButton';
import Player from './Molecules/Player';
import ResetButton from './Atoms/ResetButton';
import BottomNav from './Molecules/BottomNav';


class App extends Component {
  render() {
    return (
      <div>
        <Player />
        <AddPlayerButton />
        <ResetButton />
        <BottomNav />
      </div>
    );
  }
}

export default App;