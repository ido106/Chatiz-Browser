import Singin from './singin';
import React, { useState } from 'react';

function SignInValid({ou}) {
    const [user, setUser] = useState({ userName: "", password: "" });
    const [error, setError] = useState("")
    const Login = details => {
        console.log(details);
        if (details.userName == ou.userName && details.password == ou.password) {
            console.log("login...");
            setUser({
                userName: details.userName, password: details.password
            })
        } else {
            console.log("detailsDoNotMutch");
            setError("details do not match");
        }
    }
    const Logout = () => {
        console.log("logout");
        setUser({userName:"", password:""});
    }
    return ( 
        <div>
            {(user.userName!="") ? (
                <div className='welcome'>
                    <h2>
                        welcome, <span>{ou.userName}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ):
            (
                <Singin Login = {Login} error = {error}/>
            )}
        </div>
    );
}

export default SignInValid;