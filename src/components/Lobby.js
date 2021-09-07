import React, { useContext, useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";
import { colorContext } from "../context/colorContext";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";
import PlayerPicture from "./PlayerPicture";
import { db } from "../firebase/firebaseInit";
import { collection } from "@firebase/firestore";

// const colorCollection = collection(db, "playerColor");
// const c1Doc = doc(colorCollection, 'p1');

const colorList = ["red", "green", "blue", "yellow"];

// db.collection('player1').get().then((snapshot) => {
//   console.log(snapshot.docs);
// })
// const playerColorCollection = collection(db, "playerColor");

// const player1Doc = doc(db, 'playerColor', 'p1');
// const p1Snap = getDoc(player1Doc);

// console.log("document data: ", p1Snap.data);


const Lobby = () => {
  const ColorContext = useContext(colorContext);

  console.log(ColorContext.color1);

  return (
    <div className="lobby">
      <h1 style={{ textAlign: "center" }}>Game Lobby</h1>
      <Signup />
      <Login />
      <Logout />
      <PlayerPicture />
      <PlayerCard
        text="a"
        backgroundColor={ColorContext.player1}
        changeColor={ColorContext.setPlayer1}
        playerColor={ColorContext.player1}
        colorList={colorList}
      />
      <PlayerCard
        text="b"
        backgroundColor={ColorContext.player2}
        changeColor={ColorContext.setPlayer2}
        playerColor={ColorContext.player2}
        colorList={colorList}
      />
      <PlayerCard
        text="c"
        backgroundColor={ColorContext.player3}
        changeColor={ColorContext.setPlayer3}
        playerColor={ColorContext.player3}
        colorList={colorList}
      />
      <PlayerCard
        text="d"
        backgroundColor={ColorContext.player4}
        changeColor={ColorContext.setPlayer4}
        playerColor={ColorContext.player4}
        colorList={colorList}
      />
    </div>
  );
};

export default Lobby;
