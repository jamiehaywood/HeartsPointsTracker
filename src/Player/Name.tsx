import React from 'react'
import '../css/player.css'

interface props {
    name: string
}

const Name: React.FC<props> = (props) => {
    return (
        <div style={{ fontWeight: 600, fontSize: "5vmax" }}>
            {props.name}
        </div>
    )
}

export default Name