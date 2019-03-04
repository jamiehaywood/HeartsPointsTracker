import React, { Component } from 'react';
import AddPlayerButton from './Atoms/AddPlayerButton';
import Player from './Molecules/Player';
import ResetButton from './Atoms/ResetButton';
import BottomNav from './Molecules/BottomNav';

class App extends Component {
  constructor() {
    super()
    this.state = {
      playersData: []
    }
    this.addPlayerButton = this.addPlayerButton.bind(this)
    this.resetButton = this.resetButton.bind(this)
    this.addToPoints = this.addToPoints.bind(this)
  }

  addPlayerButton() {
    var playerName = prompt("Please enter your name:", "")

    while (playerName === null || playerName === "") {
      alert("please enter a name")
      playerName = prompt("Please enter your name:", "")
    }
    var obj = {};
    obj["name"] = playerName;
    obj["points"] = [0,];
    console.log("Player Object has been created");

    this.setState(this.state)
    var playersData = this.state.playersData
    playersData.push(obj)
    console.log(playersData)
    return {
      playersData: playersData
    }
  }

  resetButton() {
    this.setState(this.state)
    var playersData = this.state.playersData
    playersData.length = 0;
    console.log("all playersData deleted")
    return {
      playersData: playersData
    }
  }

  addToPoints(name, points) {
    this.setState(this.state)
    var playersData = this.state.playersData
    var objIndex = playersData.findIndex((obj => obj.name === name));
    playersData[objIndex].points.push(points)
    console.log(playersData);
    return {
      playersData: playersData
    }
  }

  render() {
    function add(accumulator, a) {
      var pointsInteger = parseInt(accumulator, 10);
      var tempInt = parseInt(a, 10);
      return pointsInteger + tempInt;
  }
    const player = this.state.playersData.map(x => <Player player={x} name={x.name} points={x.points.reduce(add)} addToPoints={this.addToPoints} key={x.name}/>)
    return (
      <div>
        {player}
        <AddPlayerButton addPlayerButton={this.addPlayerButton} />
        <ResetButton resetButton={this.resetButton} />
        <BottomNav />
      </div>
    );
  }
}

export default App;