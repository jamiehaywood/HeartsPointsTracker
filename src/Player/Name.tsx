import React from 'react'
import './player.scss'

interface props {
    name: string
}

const Name: React.FC<props> = (props) => {
    function calculateFontSize(name: string) {
        // If the name is split with a space, then can fit over two lines
        if (name.includes(' ')) {
            return "8vw"
        }
        // else name needs to be shrunk to keep on one line
        else return name.length > 10 ? "6vw" : "8vw"
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