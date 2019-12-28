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
        <table style={{ width: "100%", tableLayout:"fixed" }}>
            <tbody>
                <tr>
                    <td style={{ width: "25%" }}>
                        <PlayerIcon setImage={props.setImage} image={props.image} name={props.name} />
                    </td>
                    <td style={{ width: "50%", textAlign: "center", paddingLeft:"5vmin" }}>
                        <Name name={props.name} />
                    </td>
                    <td style={{ width: "25%" }}>
                        <Input points={props.points} setPoints={props.setPoints} name={props.name} />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}