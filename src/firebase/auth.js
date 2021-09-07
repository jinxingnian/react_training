import React from 'react';
import { auth, db } from '../firebase/firebaseInit';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

onAuthStateChanged(auth, (user) => {
    if (user) {
        // some user logged in 
        const uemail = user.email;
        console.log(uemail);
    } else {
        console.log("A user signed out!");
    }
})