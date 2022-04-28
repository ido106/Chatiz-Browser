
import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



import ChatForm from "./components/chats/ChatForm";
import SignIn from "./components/sign_in/SignIn";
import Form from "./components/sign_up/Form";
import Body from "./components/Body";

import './App.css';

function App() {

  const [UserData, setUserData] = React.useState({
    myUser: null
  })



  const [userMessage, setUserMessage] = React.useState(
  [
    {
      user: "otma",
      contacts: [
        {
        name: "ido",
        messages: [
          {
            type: "text",
            data: "im idiot",
            timeSent: "15:34",
            isMine: false
          },

          ],
        img: "https://bootdey.com/img/Content/avatar/avatar1.png",
        lastSeen: "4 hours ago",
      },
      {
        name: "Shahar",
        messages: [
          {
            type: "text",
            data: "aaaaaaa",
            timeSent: "12:45",
            isMine: false
          },

          {
            type: "text",
            data: "bbbbbbbbbbb",
            timeSent: "11:11",
            isMine: true
          },

          {
            type: "text",
            data: "ccccccccc",
            timeSent: "12:24",
            isMine: true
          }],
        img: "https://bootdey.com/img/Content/avatar/avatar1.png",
        lastSeen: "2 hours ago",
      }
      ]
    },

    {
      user: 'shahar',
      contacts: [],
      lastSeen: "",
      img: "https://bootdey.com/img/Content/avatar/avatar1.png"

    },

    {
      user: 'ido',
      contacts: [],
      img: "https://bootdey.com/img/Content/avatar/avatar1.png",
      lastSeen: "",
    },

  ])
  return (
      
    
    <Router>
      <Routes>
        <Route path="/" element={<SignIn updateUserData={setUserData} />}></Route>
        <Route path="/SignUp" element={<Form />}></Route>
        <Route path="/ChatsTemp" element={<Body UserData={UserData} />}></Route>
        <Route path="/Chats" element={<ChatForm UserData={UserData} userMessage={userMessage} setUserMessage={setUserMessage}/>} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
