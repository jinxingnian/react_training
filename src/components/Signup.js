import React from 'react';
import { auth, db } from '../firebase/firebaseInit';
import { createUserWithEmailAndPassword } from '@firebase/auth';

const Signup = () => {

    const registerFunction = () => {
        createUserWithEmailAndPassword(auth, 'random@mail.com', 'test123').then(
            cred => {
                console.log(cred.user);
            }
        )
    }
    return (

        <button className='btn-signup'
        onClick={registerFunction}>Register</button>
        
    )
}

export default Signup;