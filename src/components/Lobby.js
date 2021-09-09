import React, { useContext, useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";
import { colorContext } from "../context/colorContext";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";
import PlayerPicture from "./PlayerPicture";
import { db } from "../firebase/firebaseInit";
import { collection } from "@firebase/firestore";
import TestButton from "./TestButton";


const colorList = ["red", "green", "blue", "yellow"];


const Lobby = () => {
  const ColorContext = useContext(colorContext);

  console.log(ColorContext.color1);

  return (
    <div className="lobby">
      <h1 style={{ textAlign: "center" }}>Game Lobby</h1>
      <TestButton />
      <Signup />
      <Login />
      <Logout />
      <PlayerPicture />
      <PlayerCard
        text="a"
        pid='p1'
      />
      <PlayerCard
        text="b"
        pid='p2'
      />
      <PlayerCard
        text="c"
        pid='p3'
      />
      <PlayerCard
        text="d"
        pid='p4'
      />
    </div>
  );
};

export default Lobby;
