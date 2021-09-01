import React, { createContext, useState } from "react";
import App from "../App";

export const colorContext = createContext();

const Provider = ({ children }) => {
  const [player1, setPlayer1] = useState("white");
  const [player2, setPlayer2] = useState("white");
  const [player3, setPlayer3] = useState("white");
  const [player4, setPlayer4] = useState("white");

  return (
    <colorContext.Provider
      value={{
        player1,
        setPlayer1,
        player2,
        setPlayer2,
        player3,
        setPlayer3,
        player4,
        setPlayer4,
      }}
    >
      {children}
    </colorContext.Provider>
  );
};

export default Provider;
