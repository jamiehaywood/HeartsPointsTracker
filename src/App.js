import React, { Component } from 'react';
import AddPlayerButton from './Atoms/AddPlayerButton';
import Player from './Molecules/Player';
import ResetButton from './Atoms/ResetButton';
import BottomNav from './Molecules/BottomNav';

class App extends Component {
  constructor(){
    super()
    this.state = {
      playersData : []
  }
    this.addPlayerButton = this.addPlayerButton.bind(this)
  }

  addPlayerButton (){
    var playerName = prompt("Please enter your name:", "")

        if (playerName === null || playerName === "") {
            playerName = prompt("Please enter your name:", "");
        }
        else {
            var obj = {};
            obj["name"] = playerName;
            obj["points"] = [0,];
            console.log("Player Object has been created");
            console.log(obj)
        }
        this.setState(this.state)
        var playersData = this.state.playersData
        playersData.push(obj)
        console.log(playersData)
        return {
            playersData: playersData
        }
      }
  render() {
    return (
      <div>
        <Player />
        <AddPlayerButton addPlayerButton={this.addPlayerButton} />
        <ResetButton />
        <BottomNav />
      </div>
    );
  }
}

export default App;