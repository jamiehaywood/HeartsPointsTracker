import React from "react";


export default class AppStore {
    numberOfGames: number;
    constructor() {
        this.numberOfGames = 0
    }
    incrementGames() {
        console.log("hello")
        console.log(this.numberOfGames)
        this.numberOfGames++
    }
}

export const AppContext = React.createContext(
    new AppStore()
);
