import React from "react";
import "./css/App.css";
import * as Colours from './constants/colourConst'
import { Players } from "./Players";
import { NavBar } from "./NavBar";
import { Plus } from "./images";
import store from "./store";

export interface PlayersContextInterface {
  name: string;
  points: number;
  gamesPlayed: number;
  image: File | undefined;
}

export const App = () => {
  return (
    <div>
      <div style={{ paddingBottom: "10vmax", overflow: "scroll" }}>
        <Players />
        <Plus className="add" width={60} fill={Colours.iconColours} onClick={() => store.Players.addPlayer()} />
      </div>
      <NavBar />
    </div>
  );
};

export default App;
