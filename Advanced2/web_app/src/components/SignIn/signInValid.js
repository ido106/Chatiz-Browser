import Singin from "./singin";
import React, { useState } from "react";
import users from "./allUsers";
import { render } from "react-dom";
import Chats from "../Chat/chats";

function SignInValid() {
  const [user, setUser] = useState({ userName: "", password: "" });
  const [error, setError] = useState("");
  const Login = (details) => {
    console.log(details);
    var check1 = false;

    users.forEach((element) => {
      if (
        element.userN == details.userName &&
        element.Pass == details.password
      ) {
        check1 = true;
      }
    });

    if (check1) {
      console.log("login...");
      setUser({
        userName: details.userName,
        password: details.password,
      });
    } else {
      console.log("detailsDoNotMutch");
      setError("details do not match");
    }
  };
  const Logout = () => {
    console.log("logout");
    setUser({ userName: "", password: "" });
  };
  // alert(user.userName)
  return (
    <div>
      {user.userName != "" ? (
        // <div className="welcome">
        //   <h2>
        //     welcome, <span>{user.userName}</span>
        //   </h2>
        //   <button onClick={Logout}>Logout</button>
        // </div>
        <Chats username={user.userName}/>
      ) : (
        <Singin Login={Login} error={error} />
      )}
    </div>
  );
}

export default SignInValid;
