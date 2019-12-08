import React, { useState } from 'react'
import { squid } from '../images'
import '../css/player.css'

interface props {
    image?: File | undefined
    setImage: Function
}
let key = Math.random().toString()

const PlayerIcon: React.FC<props> = (props) => {
    return (
        <div className="alignleft image">
            <input
                className="visually-hidden"
                type="file"
                onChange={(e: any) => {
                    props.setImage(e)
                }}
                id={key}
            />

            {props.image
                // eslint-disable-next-line
                ? <img className="uploaded" src={URL.createObjectURL(props.image)} onClick={() => document.getElementById("myfile")!.click()} />
                // eslint-disable-next-line
                : <img src={squid} onClick={() => document.getElementById(key)!.click()} />}

        </div>
    )
}

export default PlayerIcon