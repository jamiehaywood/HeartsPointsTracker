import PlayerStore from './PlayerStore'
import { GameStore } from './GameStore'

class GlobalStore {
    Players: PlayerStore;
    GameStore: GameStore;
    constructor() {
        this.Players = new PlayerStore()
        this.GameStore = new GameStore()
    }
}

let store = new GlobalStore()
export default store