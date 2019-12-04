import React from 'react'
import { Player } from './Player/Player'

interface AddProps {
    currentPlayers: never[]
    addPlayer: Function
}

export const Add: React.FC<AddProps> = (props) => {
    function addPlayer() {
        var playerName = prompt('Please enter your name:', '')!
        if (playerName) {
            props.addPlayer(([...props.currentPlayers, <Player name={playerName} />]))
        }
        else {
            return
        }
    }

    return (
        <div style={{ textAlign: 'center', padding: '10px' }}>
            <img onClick={addPlayer} src={"https://image.flaticon.com/icons/svg/25/25304.svg"} height='60em' alt='plusIcon' style={{ cursor: 'pointer' }} />
        </div>
    )
}