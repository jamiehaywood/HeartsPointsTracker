import React, { useContext } from 'react'
import GlobalStore from './index'
import { Player } from './Player/Player'
import { observer } from 'mobx-react'


export const Players: React.FC = observer(() => {
    const store = useContext(GlobalStore).Players
    return (
        <div>
            {store.players.map((players, i) =>
                <Player
                    name={players.name}
                    points={players.points}
                    setPoints={players.addPoints}
                    key={i}
                />
            )}
        </div>
    )
})