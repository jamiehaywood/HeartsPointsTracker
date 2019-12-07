import React, { useState } from 'react'
import { squid } from '../images'
import '../css/player.css'

const PlayerIcon = () => {
    const [image, setImage] = useState()
    let key = Math.random().toString()
    return (
        <div className="alignleft image">
            <input className="visually-hidden" type="file" id={key} onChange={(e) => {
                let file = e.target.files![0]
                setImage(file)
            }} />
            {image
            // eslint-disable-next-line
            ? <img className="uploaded" src={URL.createObjectURL(image)} onClick={() => document.getElementById("myfile")!.click()} />
            // eslint-disable-next-line
                : <img src={squid} onClick={() => document.getElementById(key)!.click()} />}

        </div>
    )
}

export default PlayerIcon