import { observable, decorate, action } from 'mobx';

export class Player {
    constructor(name: string) {
        this.name = name
    }

    name: string;
    points = 0
    gamesPlayed: number = 0
    image: File | undefined

    addPoints(points: number) {
        this.points += points;
    }

    changeImage() {

    }
}
decorate(Player, {
    changeImage: action,
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
    addPlayer: action
})
