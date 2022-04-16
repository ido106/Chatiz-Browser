import Singin from './singin';
import React, { useState } from 'react';
import users from './allUsers'

function SignInValid() {
    const [user, setUser] = useState({ userName: "", password: "" });
    const [error, setError] = useState("")
    const Login = details => {
        console.log(details);
        var check1=false, check2=false

        users.forEach(element => {
            if(element.userN == (details.userName) && element.Pass == (details.password)
            && details.password!=''
            && details.userName!='') {
            check1=true;
            check2 = true;
            }
        });

        if (check1&&check2) {
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

export default SignInValid;