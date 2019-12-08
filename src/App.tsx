import React from 'react';
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
  return (
    <div>
      <div style={{paddingBottom:"8vh", overflow: "scroll" }}>
        <Players />
        <Add />
      </div>
      <NavBar />
    </div>
  )
};

export default App;
