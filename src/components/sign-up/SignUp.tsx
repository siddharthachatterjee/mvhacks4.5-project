import React, { useState } from "react";

import { createUserWithEmailAndPassword, updateProfile, getAuth, sendEmailVerification } from "@firebase/auth";

import "./SignUp.css";

export default function SignUp() {
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function signUp() {
        setLoading(true);
        setError("");
        createUserWithEmailAndPassword(getAuth(), email, password)
            .then(({user}) => {
                //setLoading(false);
                updateProfile(user, {
                    displayName: name
                })
                .then(() => {
                    sendEmailVerification(user)
                        .then(() => {             
                            window.location.pathname = "/main";
                        })
                })
                
            })
            .catch(err => {
                setLoading(false);
                setError(err.message);
            })
    }

    return (
        <div id = "sign-up-container">
            <div id = "sign-up">
                <h1>Sign Up</h1> 
                Name:
                <input className = "input-box" value = {name} onChange = {e => setName(e.target.value)} />
                <br />
                Email:
                <input className = "input-box" value = {email} onChange = {e => setEmail(e.target.value)}  />
                <br />
                Password:
                <input type = "password" className = "input-box" value = {password} onChange = {e => setPassword(e.target.value)}  />
                <button onClick = {signUp} className = "call-to-action" disabled = {!email.length || !name.length || !password.length || loading}>
                    Sign Up*
                </button>
                {loading && "Loading..."}
                {!loading && error}
                <br />
                *You will get a verification e-mail after signing up
            </div>
        </div>
    );
}