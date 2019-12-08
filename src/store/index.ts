import PlayerStore from './PlayerStore'

class GlobalStore {
    Players: PlayerStore
    constructor() {
        this.Players = new PlayerStore()
    }
}

let store = new GlobalStore()
export default store