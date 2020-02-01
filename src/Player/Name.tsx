import React from 'react'
import './player.scss'

interface props {
    name: string
}

const Name: React.FC<props> = (props) => {
    function calculateFontSize(name: string) {
        return name.length > 10 ? "6vw" : "8vw"
    }

    const style = {
        fontWeight: 600,
        fontSize: calculateFontSize(props.name)
    }

    return (
        <div style={style}>
            {props.name}
        </div>
    )
}

export default Name