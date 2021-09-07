import React from 'react';
import { auth, db } from '../firebase/firebaseInit';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const Logout = () => {
    const logout_func = () => {

        signOut(auth).then(() => {
            // console.log('logged out');
            document.getElementById('logout').style.display = "none";
            document.getElementById('login-page').style.display = "block";
        })
    }

    return (
        <div id='logout'>
            <button id='logout-btn' onClick={logout_func} style={{display: 'block'}}>Log out</button>
        </div>
    )
}

export default Logout;