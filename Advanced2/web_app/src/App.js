
import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ChatForm from "./components/chats/ChatForm";
import SignIn from "./components/sign_in/SignIn";
import Form from "./components/sign_up/Form";
import { useState } from "react";

import './App.css';


async function getContacts() {

  const res = fetch("http://localhost:7026/api//contacts/", {
    method: 'GET',
  })

  if (await res.status != 200) {
    return [];
  }

  return await res.then(async ans => await ans.text());
}

function App() {
  const [UserData, setUserData] = useState({
    myUser: null
  })



  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn updateUserData={setUserData} />}></Route>
        <Route path="/SignUp" element={<Form />}></Route>
        <Route path="/Chats" element={<ChatForm
          UserData={UserData}
          setUserData={setUserData}
          contacts={getContacts}
        />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
