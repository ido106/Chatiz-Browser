
import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import ChatForm from "./components/chats/ChatForm";
import SignIn from "./components/sign_in/SignIn";
import Form from "./components/sign_up/Form";

import './App.css';

function App() {

  const [UserData, setUserData] = React.useState({
    myUser : 'OtmaBeast'
  })

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn updateUserData={setUserData}/>}></Route>
        <Route path="/SignUp" element={<Form/>}></Route>
        <Route path="/Chats" element={<ChatForm UserData={UserData} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
