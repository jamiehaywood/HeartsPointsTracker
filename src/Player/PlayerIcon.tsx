import React from 'react'
import { Squid } from '../images'
import './player.scss'

interface props {
    image?: File | undefined
    setImage: Function
    name: string
}

const PlayerIcon: React.FC<props> = (props) => {
    return (
        <div>
            <input className="visually-hidden" id={`${props.name}icon`} type="file" accept="image/*"
                onChange={(e: any) => {
                    props.setImage(e)
                }}
            />

            {props.image
                // eslint-disable-next-line
                ? <img className="uploaded" src={URL.createObjectURL(props.image)} onClick={() => document.getElementById(`${props.name}icon`)!.click()} />
                // eslint-disable-next-line
                : <Squid width="10vmax" onClick={() => { document.getElementById(`${props.name}icon`)!.click() }} />}

        </div>
    )
}

export default PlayerIcon