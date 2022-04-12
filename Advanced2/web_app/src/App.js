import Singin from './singInPage/singin';
import Registration from './registration/registration';
import React, { useState } from 'react';

function App() {
    const adminUser = {
        userName: "otma",
        password: "homo"
    }
    const [user, setUser] = useState({ userName: "", password: "" });
    const [error, setError] = useState("")
    const Login = details => {
        console.log(details);
        if (details.userName == adminUser.userName && details.password == adminUser.password) {
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
                        welcome, <span>{user.userName}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ):
            (
                <Singin Login = {Login} error = {error}/>
            )}
        </div>
    );
}

export default App;