import { getFunctions, httpsCallable } from 'firebase/functions'
import React from 'react'
import axios from 'axios'
import { collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/firebaseInit'

const TestButton = () => {

    const button_func = () => {
        axios.get('https://us-central1-react-training-a365d.cloudfunctions.net/getColor/p2')
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const but = () => {
        axios.post("https://us-central1-react-training-a365d.cloudfunctions.net/setColor/p1", 
        {color: 'red'})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const test = () => {
        const docRef = doc(collection(db, 'playerColor'), 'plist');
        updateDoc(docRef, {"list": ['red', 'green', 'blue', 'yellow']}).then(() => {
            console.log("Completed!");
        });
        updateDoc(doc(collection(db, 'playerColor'), 'p1'), {"color": "white"}).then(() => {
            console.log("Completed!");
        });

        updateDoc(doc(collection(db, 'playerColor'), 'p2'), {"color": "white"}).then(() => {
            console.log("Completed!");
        });
        updateDoc(doc(collection(db, 'playerColor'), 'p3'), {"color": "white"}).then(() => {
            console.log("Completed!");
        });
        updateDoc(doc(collection(db, 'playerColor'), 'p4'), {"color": "white"}).then(() => {
            console.log("Completed!");
        });
    }

    const test2 = () => {
        getDoc(doc(collection(db, 'playerColor'), 'plist')).then((snapshot) => {
            var colorList_temp = snapshot.data().list;
            console.log(colorList_temp);
            // colorList = colorList_temp;
          });
    }

    return (
        <button onClick={test}>Reset Button</button>
    )
}

export default TestButton
