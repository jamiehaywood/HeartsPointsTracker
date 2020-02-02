import React, { useEffect, useState } from 'react'
import './player.scss'

interface props {
    name: string
    setPoints: Function
    points: number
}

const Input: React.FC<props> = (props) => {
    const displayPoints = () => {
        (document.getElementById(props.name) as HTMLInputElement).value = props.points.toString()
    }

    const addPoints = () => {
        let inputPoints = parseInt((document.getElementById(props.name) as HTMLInputElement).value)
        if (!isNaN(inputPoints)) {
            props.setPoints(inputPoints)
        }
    }

    useEffect(() => {
        displayPoints()
    })

    // This is to prevent adding twice when you press enter and then 'onBlur'
    const [arePointsSet, pointsAreSet] = useState(false)

    return (
        <input className="input" type="number" id={props.name}
            onFocus={(e) => { (document.getElementById(props.name) as HTMLInputElement).value = '' }}
            onKeyPress={
                (e) => {
                    if (e.key === 'Enter') {
                        pointsAreSet(true);
                        addPoints()
                        e.preventDefault()
                    }
                    else {
                        pointsAreSet(false)
                    }
                }}
            onBlur={(e: any) => {
                if (!arePointsSet) {
                    addPoints();
                    pointsAreSet(false)
                }
                displayPoints()
            }
            }
        />
    )
}
export default Input
