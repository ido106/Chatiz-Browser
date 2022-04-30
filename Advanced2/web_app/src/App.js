
import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



import ChatForm from "./components/chats/ChatForm";
import SignIn from "./components/sign_in/SignIn";
import Form from "./components/sign_up/Form";
import Body from "./components/Body";
import horseFallChat from "./constData/videos/horseFallChat.mp4"


import './App.css';

function App() {

  const [UserData, setUserData] = React.useState({
    myUser: null
  })



  const [userMessage, setUserMessage] = React.useState(
    [
      {
        user: "otma",
        lastSeen:"2 minutes ago",
        contacts: [
          {
            name: "ido",
            messages: [
              {
                type: "text",
                data: "we have to start this project in Advanced programing 2 dude",
                timeSent: "15:34",
                isMine: false
              },
              {
                type: "text",
                data: "yea dude the project looks so cool, i'll check with shahar when he can meet up and plan the design",
                timeSent: "15:38",
                isMine: true
              },
              {
                type: "text",
                data: "cool bro, keep me updtated, you are the best",
                timeSent: "15:40",
                isMine: false
              },
              {
                type: "text",
                data: "we have to start this project in Advanced programing 2 dude",
                timeSent: "15:34",
                isMine: false
              },
              {
                type: "text",
                data: "Im laughing so bad holy cow",
                timeSent: "16:04",
                isMine: true
              },

              {
                type: "text",
                data: "shahar just sent me a video of himself getting bumped from an horse, i think this dumbass his hurt.",
                timeSent: "16:04",
                isMine: true
              }

            ],
            img: "https://bootdey.com/img/Content/avatar/avatar1.png",
            lastSeen: "4 hours",
          },
          {
            name: "Shahar",
            messages: [
              {
                type: "text",
                data: "sup mate",
                timeSent: "15:39",
                isMine: true
              },

              {
                type: "text",
                data: "chilling dude, hbu?",
                timeSent: "15:45",
                isMine: false
              },

              {
                type: "text",
                data: "cool dude. i just spoke with ido, we should really get started with the design of the project," +
                " when can you meet up?",
                timeSent: "15:49",
                isMine: true
              },
              {
                type: "text",
                data: "you w'ont belive what happened to me",
                timeSent: "15:51",
                isMine: false
              },
              {
                type: "text",
                data: "what happened dude?",
                timeSent: "15:54",
                isMine: true
              },
              {
                type: "text",
                data: "i'll send you a video, it will explain itself.",
                timeSent: "15:59",
                isMine: false
              },
              {
                type: "video",
                data:  horseFallChat,
                timeSent: "15:59",
                isMine: false
              },
              
            
            
            ],
            img: "https://bootdey.com/img/Content/avatar/avatar1.png",
            lastSeen: "2 hours",
          }
        ]
      },



      {
        user: "ido",
        lastSeen:"2 days ago",

        contacts: [
          {
            name: "otma",
            messages: [
              {
                type: "text",
                data: "im idiot",
                timeSent: "15:34",
                isMine: true
              },

            ],
            img: "https://bootdey.com/img/Content/avatar/avatar1.png",
            lastSeen: "4 hours",
          },
        ]
      },




      {
        user: "Shahar",
        lastSeen:"online",
        contacts: [
          {
            name: "otma",
            messages: [
              {
                type: "text",
                data: "aaaaaaa",
                timeSent: "12:45",
                isMine: true
              },

              {
                type: "text",
                data: "bbbbbbbbbbb",
                timeSent: "11:11",
                isMine: false
              },

              {
                type: "text",
                data: "ccccccccc",
                timeSent: "12:24",
                isMine: false
              }
            ],
            img: "https://bootdey.com/img/Content/avatar/avatar1.png",
            lastSeen: "4 hours",
          },
        ],
        img: "https://bootdey.com/img/Content/avatar/avatar1.png",
      },
    ])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn updateUserData={setUserData} />}></Route>
        <Route path="/SignUp" element={<Form userMessage={userMessage} />}></Route>
        <Route path="/ChatsTemp" element={<Body UserData={UserData} />}></Route>
        <Route path="/Chats" element={<ChatForm UserData={UserData} userMessage={userMessage} setUserMessage={setUserMessage} />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
