// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import {  } from 'firebase/functions';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiO4zPcYdvMU2JqdeLjmCuie8_E4qCzCU",
  authDomain: "react-training-a365d.firebaseapp.com",
  projectId: "react-training-a365d",
  storageBucket: "react-training-a365d.appspot.com",
  messagingSenderId: "732185122970",
  appId: "1:732185122970:web:87789745c3160c47672723",
  measurementId: "G-25PED5YB6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize firebaseUI
export const auth = getAuth();
export const db = getFirestore();

// export const uemail = null;

onAuthStateChanged(auth, (user) => {
  if (user) {
      // some user logged in 
      const uemail = user.email;
      console.log(uemail);
  } else {
      console.log("A user signed out!");
  }
})