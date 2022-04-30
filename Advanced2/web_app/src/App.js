
import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



import ChatForm from "./components/chats/ChatForm";
import SignIn from "./components/sign_in/SignIn";
import Form from "./components/sign_up/Form";
import Body from "./components/Body";
import horseFallChat from "./constData/videos/horseFallChat.mp4"
import ronaldoSiu from "./constData/audio/SUIII.mp3"


import './App.css';

function App() {

  const [UserData, setUserData] = React.useState({
    myUser: null
  })

  const [userMessage, setUserMessage] = React.useState(
    [
      {
        user: "Gal Kaminka",
        lastSeen: "2 hours",
        contacts: [
          {
            name: "otma",
            messages: [
              {
                type: "text",
                data: "i love you",
                timeSent: "01:00",
                isMine: false
              },
              {
                type: "text",
                data: "you are gay",
                timeSent: "09:17",
                isMine: true
              },
            ],
            img: "/avatars/avatar2.png",
            lastSeen: "4 hours",
          },
        ]
      },
      {
        user: "Shahar",
        lastSeen: "online",
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
            img: "/avatars/avatar2.png",
            lastSeen: "4 hours",
          },
        ],
      },
      {
        user: "Messi",
        lastSeen: "2 minutes ago",
        contacts: [
          {
            name: "Cristiano Ronaldo",
            messages: [
              {
                type: "text",
                data: "Congrats for the 6th Golden Ball mate, you are defentitly the GOAT!",
                timeSent: "22:35",
                isMine: false
              },
              {
                type: "text",
                data: "Thanks man!\ni dont think im the goat, Yoav Otmazgin is way better than me!",
                timeSent: "22:39",
                isMine: true
              },
              {
                type: "text",
                data: "oh i thought we exclude him, its quite obvious that he is the best!",
                timeSent: "22:40",
                isMine: false
              },
              {
                type: "text",
                data: "When someone ask me \"is Yoav Otmazgin the best player in the world?\", thats my answer:",
                timeSent: "22:40",
                isMine: false
              },
              {
                type: "audio",
                data: ronaldoSiu ,
                timeSent: "22:40",
                isMine: false
              },
            ],
            img: "/avatars/avatar4.png",
            lastSeen: "4 hours",
          },
          {
            name: "Ramos",
            messages: [
              {
                type: "text",
                data: "Welcome to PSG bro, I hope we can forget our history and became friends!",
                timeSent: "12:21",
                isMine: false
              },
              {
                type: "img",
                data: "",
                timeSent: "13:43",
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
                data: "Im laughing so bad holy cow",
                timeSent: "16:04",
                isMine: true
              },

              {
                type: "text",
                data: "shahar just sent me a video of himself getting bumped from an horse, i think this dumbass is hurt.",
                timeSent: "16:04",
                isMine: true
              }

            ],
            img: "/avatars/avatar6.png",
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
                data: horseFallChat,
                timeSent: "15:59",
                isMine: false
              },



            ],
            img: "/avatars/avatar5.png",
            lastSeen: "2 hours",
          }
        ]
      },
    ])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn updateUserData={setUserData} />}></Route>
        <Route path="/SignUp" element={<Form userMessage={userMessage} />}></Route>
        <Route path="/ChatsTemp" element={<Body UserData={UserData} />}></Route>
        <Route path="/Chats" element={<ChatForm 
          UserData={UserData} 
          setUserData={setUserData}
          userMessage={userMessage} 
          setUserMessage={setUserMessage} />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
