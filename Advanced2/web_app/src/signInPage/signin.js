import React, { useState } from 'react';

function submitsingin(data) {

}

export default function Singin({Login, error}) {
    const [details, setDetails] = useState({userName:"", password:""});
    const submitHandler = e => {
      e.preventDefault();
      Login(details);
    }
    return (
      <form onSubmit={submitHandler}>
        <div className="boxForms">
          <h2>
            Login
          </h2>
          {(error !="") ? (<div className = "error">{error}</div>) :""}
          <div></div>
          <div className="form-group">
            <label htmlFor="userName">user name</label>
            <input type="text" name="userName" id="userName"
            onChange={e =>setDetails({...details, userName: e.target.value})} value = {details.userName}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">passsword</label>
            <input type = "text" name = "password" id = "password"
            onChange={e =>setDetails({...details, password: e.target.value})} value = {details.password}/>
          </div>
          <input type = "submit" value="LOGIN"input/>
        </div>
      </form>
    )
}