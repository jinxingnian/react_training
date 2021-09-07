import React from 'react';
import { auth, db } from '../firebase/firebaseInit';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    const login_func = () => {
        const loginForm = document.querySelector('#login-form');
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = loginForm['login-email'].value;
            const password = loginForm['login-password'].value;

            signInWithEmailAndPassword(auth, email, password).then(cred => {
                // console.log(cred.user);
                document.getElementById('login-page').style.display = "none";
                document.getElementById('logout').style.display = "block";
            })
        })
        
    }
    return (
        <div id='login-page'>
            <h4>Login</h4><br />
            <form id='login-form'>
                <div class='input-field'>
                    <label for='login-email'>Email address</label>
                    <input type='email' id='login-email' required />
                </div>

                <div class='input-field'>
                    <label for='login-password'>Your password</label>
                    <input type='password' id='login-password' required />
                </div>
            <button class='login-btn' onClick={login_func}>Login</button>
            </form>
        </div>
    )
}

export default Login;