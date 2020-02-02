import React from 'react'
import Name from './Name'
import Input from './Input'
import PlayerIcon from './PlayerIcon'
import './player.scss'

interface PlayerProps {
    name: string;
    points: number;
    setPoints: Function;
    setImage: Function;
    image?: File | undefined
    pointsColour?: string
}

export const Player: React.FC<PlayerProps> = (props) => {

    return (
        <table style={{ width: "100%", tableLayout: "fixed" }}>
            <tbody>
                <tr>
                    <td style={{ width: "25%", textAlign:'start' }}>
                        <PlayerIcon setImage={props.setImage} image={props.image} name={props.name} />
                    </td>
                    <td style={{ width: "50%", textAlign: "center", paddingLeft: "5vmin" }}>
                        <Name name={props.name} />
                    </td>
                    <td style={{ width: "25%", textAlign:"end"}}>
                        <Input pointsColour={props.pointsColour} points={props.points} setPoints={props.setPoints} name={props.name} />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}