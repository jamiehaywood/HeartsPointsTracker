import React from 'react'
import Name from './Name'
import Input from './Input'
import PlayerIcon from './PlayerIcon'
import '../css/player.css'

interface PlayerProps {
    name: string;
    points: number;
    setPoints: Function;
    setImage: Function;
    image?: File | undefined
}

export const Player: React.FC<PlayerProps> = (props) => {

    return (
        <div className="playercontainer">
            <PlayerIcon setImage={props.setImage} image={props.image} />
            <Name name={props.name} />
            <Input points={props.points} setPoints={props.setPoints} name={props.name} />
        </div>
    );
}