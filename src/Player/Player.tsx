import React, { useState, useEffect } from 'react'
import Name from './Name'
import Input from './Input'
import PlayerIcon from './PlayerIcon'
import '../css/player.css'

interface PlayerProps {
    name: string
}

export const Player: React.FC<PlayerProps> = (props) => {
    useEffect(() => { console.log(points) })
    const [points, setPoints] = useState(0)

    return (
        <div className="playercontainer">
                <PlayerIcon />
                <Name name={props.name} />
                <Input points={points} setPoints={setPoints} name={props.name} />   
        </div>
    );
}