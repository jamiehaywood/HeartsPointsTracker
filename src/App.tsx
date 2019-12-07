import React, { useState, useEffect } from 'react';
import './css/App.css';

import { Players } from './Players';
import { Add } from './Add';
import { NavBar } from './NavBar';


export interface PlayersContextInterface {
  name: string
  points: number
  gamesPlayed: number
  image: File | undefined
}



export const App = () => {
  useEffect(() => { console.log(players) })
  const [players, addPlayers] = useState([])
  return (
    <div style={{height:"100vh"}}>
      <Players list={players} />
      <Add currentPlayers={players} addPlayer={addPlayers} />
      <NavBar />
    </div>
  )
};

export default App;
