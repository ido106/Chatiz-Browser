import React, { useState } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import users from "./allUsers";

function Singin({ Login, error }) {
  const [details, setDetails] = useState({ userName: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="boxForms">
        <h2>Login</h2>
        {error != "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            name="userName"
            id="userName"
            onChange={(e) =>
              setDetails({ ...details, userName: e.target.value })
            }
            value={details.userName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Passsword</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input type="submit" value="LOGIN" />
        <br />
        <label htmlFor="register">
          Back to menu <Link to="/">here</Link>
        </label>
      </div>
    </form>
  );
}

export default Singin;
