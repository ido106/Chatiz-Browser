
import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { GlobalIsSigninDone } from "../.././components/sign_in/SignIn";
import { Navigate } from "react-router-dom";


import ChatForm from "../.././components/chats/ChatForm";
import SignIn from "../.././components/sign_in/SignIn";
import Form from "../.././components/sign_up/Form";
import { useState } from "react";
import $ from 'jquery'; 

import '../.././App.css';

export function Middle(props) {
    if (GlobalIsSigninDone.isDone) {
        return (
            <Navigate to="/Chats"/>
        );
    }


    return (
      <Router>
        <Routes>
          <Route path="/Chats"
            element={<ChatForm
            UserData={props.UserData}
            setUserData={props.setUserData}
          />} ></Route>
        </Routes>
      </Router>
    );
  }