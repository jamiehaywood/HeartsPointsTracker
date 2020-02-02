import { observable, decorate, action } from 'mobx';

export class Player {
    constructor(name: string) {
        this.name = name
    }

    name: string;
    points = 0;
    gamesPlayed: number = 0;
    image: File | undefined;
    pointsHistory: Array<number> = []
    pointsColour: string = "#000000"

    addPoints(points: number) {
        this.addToHistory(points)
        this.points += points;
    }

    changePointsColour() {

    }

    addToHistory(points: number) {
        this.pointsHistory.push(points)
    }

    changeImage(e: any) {
        let file = e.target.files![0]
        this.image = file
    }
}
decorate(Player, {
    changeImage: action.bound,
    addPoints: action.bound,
    name: observable,
    points: observable,
    gamesPlayed: observable,
    image: observable,
})

export default class PlayerStore {
    players: Array<Player> = []

    addPlayer() {
        var playerName = prompt('Please enter your name:', '')!

        if (playerName && !this.playerExists(playerName)) {
            this.players.push(new Player(playerName))
        }
        else {
            return
        }
    }

    playerExists(input: string) {
        if (this.players.find((player) => player.name === input)) {
            return true
        }
        else {
            return false
        }
    }
}

decorate(PlayerStore, {
    players: observable,
    addPlayer: action.bound
})
