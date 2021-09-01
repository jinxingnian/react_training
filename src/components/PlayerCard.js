import React, { useContext, useEffect, useState } from "react";
import { colorContext } from "../context/colorContext";
import ChooseButton from "./ChooseButton";

const PlayerCard = ({
  text,
  backgroundColor,
  changeColor,
  playerColor,
  colorList,
}) => {
  // const chooseAction =  () => {
  //     PlayerCard.setState ({backgroundColor: 'blue'})
  // }
  const ColorContext = useContext(colorContext);

  const toggleColor = () => {
    
    if (playerColor == "white") {
        changeColor(colorList[0]);
        colorList.splice(0, 1);
    } else {
        changeColor(colorList[0]);
        colorList.splice(0, 1);
        colorList.push(playerColor);
    }

    console.log("test");
    console.log(ColorContext);
    console.log(colorList)
  };

  return (
    <div className="playerCard">
      <h1 className="playerName" style={{ textAlign: "center" }}>
        {text}
      </h1>

      <div className="colorBoard" style={{ backgroundColor: backgroundColor }}>
        <ChooseButton chooseAction={toggleColor} />
      </div>
    </div>
  );
};

PlayerCard.defaultProps = {
  backgroundColor: "white",
};

export default PlayerCard;
