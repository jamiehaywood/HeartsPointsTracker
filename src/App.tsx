import React, { useState } from 'react';
import './css/App.css';

import { Players } from './Players';
import { Add } from './Add';
import { NavBar } from './NavBar';
import { AppContext } from './Store';


export interface PlayersContextInterface {
  name: string
  points: number
  gamesPlayed: number
  image: File | undefined
}



export const App = () => {
  const [players, addPlayers] = useState([])

  return (
    <div>
      <Players list={players} />
      <Add currentPlayers={players} addPlayer={addPlayers} />
      <NavBar />
    </div>
  )
};

export default App;
