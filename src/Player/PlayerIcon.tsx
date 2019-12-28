import React from 'react'
import { squid } from '../images'
import '../css/player.css'

interface props {
    image?: File | undefined
    setImage: Function
    name: string
}

const PlayerIcon: React.FC<props> = (props) => {
    return (
        <div style={{width:"13vmax"}}>
            <input
                className="visually-hidden"
                type="file"
                onChange={(e: any) => {
                    props.setImage(e)
                }}
                id={`${props.name}icon`}
            />

            {props.image
                // eslint-disable-next-line
                ? <img className="uploaded" src={URL.createObjectURL(props.image)} onClick={() => document.getElementById(`${props.name}icon`)!.click()} />
                // eslint-disable-next-line
                : <img src={squid} onClick={() => document.getElementById(`${props.name}icon`)!.click()} />}

        </div>
    )
}

export default PlayerIcon