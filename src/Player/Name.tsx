import React from 'react'
import '../css/player.css'

interface props {
    name: string
}

const Name: React.FC<props> = (props) => {
    return (
        <div className="name" onClick={() => { }}>
            {props.name}
        </div>
    )
}

export default Name