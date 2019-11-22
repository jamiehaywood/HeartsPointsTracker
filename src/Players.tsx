import React from 'react'


interface Players {
    list: JSX.Element[]
}
export const Players: React.FC<Players> = (props) => {
    return (
        <div>
            {props.list.map((players) => players)}
        </div>
    )
}