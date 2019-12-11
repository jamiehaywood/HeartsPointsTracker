import React, { useContext } from "react";
import GlobalStore from "./index";
import { Player } from "./Player/Player";
import { observer } from "mobx-react";

export const Players: React.FC = observer(() => {
  const store = useContext(GlobalStore).Players;
  return (
    <div>
      {store.players
        .sort((a, b) => (a.points > b.points ? -1 : 1))
        .map((player, i) => (
          <Player
            name={player.name}
            points={player.points}
            setPoints={player.addPoints}
            key={i}
            setImage={player.changeImage}
            image={player.image}
          />
        ))}
    </div>
  );
});
