import React, { useContext, useEffect, useState } from "react";
import { colorContext } from "../context/colorContext";
import ChooseButton from "./ChooseButton";
import axios from "axios";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseInit";

const PlayerCard = ({
  text,
  pid,
}) => {
  // const chooseAction =  () => {
  //     PlayerCard.setState ({backgroundColor: 'blue'})
  // }
  const ColorContext = useContext(colorContext);
  var getURL = "https://us-central1-react-training-a365d.cloudfunctions.net/getColor/";
  var setURL = "https://us-central1-react-training-a365d.cloudfunctions.net/setColor/";
  var colorList = [];

  const initial_color = () => {
    axios.get(getURL.concat(pid))
        .then(function (response) {
            document.getElementById(pid).style.backgroundColor = response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
  }


  initial_color();


  // const toggleColor = () => {
    
  //   if (playerColor == "white") {
  //       changeColor(colorList[0]);
  //       colorList.splice(0, 1);
  //   } else {
  //       changeColor(colorList[0]);
  //       colorList.splice(0, 1);
  //       colorList.push(playerColor);
  //   }

  //   console.log("test");
  //   console.log(ColorContext);
  //   console.log(colorList)
  // };
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const toggleColor = async () => {
    var currentColor = document.getElementById(pid).style.backgroundColor;
    getDoc(doc(collection(db, 'playerColor'), 'plist')).then((snapshot) => {
      colorList = snapshot.data().list;
      console.log(colorList);
    });
    await delay(1000);
    if (currentColor == "white" && colorList.length !== 0) {
      axios.post(setURL.concat(pid), 
        {color: colorList[0]})
        .then(function (response) {
            console.log(response);
            initial_color();
        })
        .catch(function (error) {
            console.log(error);
        });

      colorList.splice(0, 1);
    } else if (currentColor !== "white" && colorList.length !== 0) {
      axios.post(setURL.concat(pid), 
        {color: colorList[0]})
        .then(function (response) {
            console.log(response);
            initial_color();
        })
        .catch(function (error) {
            console.log(error);
        });

      colorList.splice(0, 1);
      colorList.push(currentColor);
    }
    // axios.post(setURL.concat(pid), 
    //     {color: 'green'})
    //     .then(function (response) {
    //         console.log(response);
    //         initial_color();
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    await delay(1000);
    const docRef = doc(collection(db, 'playerColor'), 'plist');
    updateDoc(docRef, {"list": colorList}).then(() => {
        console.log("Completed!");
    });
  }



  

  return (
    <div className="playerCard">
      <h1 className="playerName" style={{ textAlign: "center" }}>
        {text}
      </h1>

      <div className="colorBoard" id={pid}>
        <ChooseButton chooseAction={toggleColor} />
      </div>
    </div>
  );
};

PlayerCard.defaultProps = {
  backgroundColor: "white",
};

export default PlayerCard;
