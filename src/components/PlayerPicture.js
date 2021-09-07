import { onAuthStateChanged } from 'firebase/auth';
import { collection, doc, documentId, getDoc } from 'firebase/firestore';
import React from 'react';
import { auth, db } from '../firebase/firebaseInit';

const PlayerPicture = () => {

    // CollectionReference
    const pictureCollection = collection(db, "playerPicture");
    // documentReference
    const p1Doc = doc(pictureCollection, 'p1');
    getDoc(p1Doc).then((snapshot) => {
        const p1Src = snapshot.data().img;
        document.getElementById('p1pic').src = p1Src;
    })

    const p2Doc = doc(pictureCollection, 'p2');
    getDoc(p2Doc).then((snapshot) => {
        const p2Src = snapshot.data().img;
        document.getElementById('p2pic').src = p2Src;
    })

    const p3Doc = doc(pictureCollection, 'p3');
    getDoc(p3Doc).then((snapshot) => {
        const p3Src = snapshot.data().img;
        document.getElementById('p3pic').src = p3Src;
    })

    const p4Doc = doc(pictureCollection, 'p4');
    getDoc(p4Doc).then((snapshot) => {
        const p4Src = snapshot.data().img;
        document.getElementById('p4pic').src = p4Src;
    })

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // some user logged in 
            const uemail = user.email;
            if (uemail == "player1@mail.com") {
                document.getElementById('p1pic').style.display = "block";
            } else if (uemail == "player2@mail.com") {
                document.getElementById('p2pic').style.display = "block";
            } else if (uemail == "player3@mail.com") {
                document.getElementById('p3pic').style.display = "block";
            } else if (uemail == "player4@mail.com") {
                document.getElementById('p4pic').style.display = "block";
            }
        } else {
            document.getElementById('p1pic').style.display = "none";
            document.getElementById('p2pic').style.display = "none";
            document.getElementById('p3pic').style.display = "none";
            document.getElementById('p4pic').style.display = "none";
        }
    })

    return (

        <div id='pic'>
            <img id='p1pic' style={{maxHeight: 200, border: "2px solid black", display: "none"}}></img>
            <img id='p2pic' style={{maxHeight: 200, border: "2px solid black", display: "none"}}></img>
            <img id='p3pic' style={{maxHeight: 200, border: "2px solid black", display: "none"}}></img>
            <img id='p4pic' style={{maxHeight: 200, border: "2px solid black", display: "none"}}></img>
        </div>
    )
}

export default PlayerPicture;