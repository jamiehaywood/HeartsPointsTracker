import React, { useContext } from "react";
import { observer } from "mobx-react";
import GlobalStore from "./index";

export const Add: React.FC = observer(() => {
  const store = useContext(GlobalStore);

  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <img
        onClick={() => { store.Players.addPlayer(); }}
        src={"https://image.flaticon.com/icons/svg/25/25304.svg"}
        height="60em"
        alt="plusIcon"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
});
