import React from 'react'
import Name from './Name'
import Input from './Input'
import PlayerIcon from './PlayerIcon'
import '../css/player.css'

interface PlayerProps {
    name: string;
    points: number;
    setPoints: Function;
}

export const Player: React.FC<PlayerProps> = (props) => {

    return (
        <div className="playercontainer">
            <PlayerIcon />
            <Name name={props.name} />
            <Input points={props.points} setPoints={props.setPoints} name={props.name} />
        </div>
    );
}