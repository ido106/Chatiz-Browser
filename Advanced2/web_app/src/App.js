
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
let date = new Date();

  const [UserData, setUserData] = React.useState({
    myUser: null
  })

  const [userMessage, setUserMessage] = React.useState(
    [
      {
        user: "Messi",
        nickName: "goat",
        lastSeen: "2 minutes ago",
        img: "/avatars/avatar1.png",
        contacts: [
          {
            name: "Ramos",
            nickName :"shit",
            lastModifiedMonth: 4,
            lastModifiedDate: 28,
            lastModifiedHour: 12,
            lastModifiedMinute: 57,
            lastModifiedSecond: 0,
            lastTimeModified : date.getTime(),

            messages: [
              {
                type: "text",
                data: "Welcome to PSG bro, I hope we can forget our history and became friends!",
                timeSent: "12:21",
                isMine: false
              },
              {
                type: "text",
                data: "hey dude, just wanted to text you! say hey to my new dog",
                timeSent: "12:43",
                isMine: true
              },
              {
                type: "img",
                data: "/chats_images/dog.jpg",
                timeSent: "12:43",
                isMine: true
              },
              {
                type: "text",
                data: "his name is real madrid!",
                timeSent: "12:43",
                isMine: true
              },

              {
                type: "text",
                data: "haha you are such an idiot!",
                timeSent: "12:57",
                isMine: false
              }
            ],
            img: "/avatars/avatar6.png",
            lastSeen: "1 hour",
          },
          {
            name: "Xavi",
            nickName : "king",
            lastModifiedMonth: 4,
            lastModifiedDate: 28,
            lastModifiedHour: 16,
            lastModifiedMinute: 51,
            lastModifiedSecond: 0,
            lastTimeModified : date.getTime(),

            messages: [
              {
                type: "text",
                data: "I want to come back home bro",
                timeSent: "16:21",
                isMine: true
              },

              {
                type: "text",
                data: "this forking kid Mbappe is so toxic!",
                timeSent: "16:23",
                isMine: true
              },

              {
                type: "text",
                data: "yoooo dude, whats up? what did this little ninja turtle did?",
                timeSent: "16:32",
                isMine: false
              },
              {
                type: "text",
                data: "look what he sent me!",
                timeSent: "16:42",
                isMine: true
              },
              {
                type: "img",
                data: "/chats_images/mbappe_worldcup.jpg",
                timeSent: "16:42",
                isMine: true
              },
              {
                type: "text",
                data: "dam bro he is so rude, those young players these days...",
                timeSent: "16:51",
                isMine: false
              },
            ],
            img: "/avatars/avatar5.png",
            lastSeen: "2 hours",
          },
          {
            name: "Mbappe",
            nickName : "turtle",
            lastModifiedMonth: 4,
            lastModifiedDate: 28,
            lastModifiedHour: 16,
            lastModifiedMinute: 21,
            lastModifiedSecond: 0,
            lastTimeModified : date.getTime(),

            messages: [
              {
                type: "text",
                data: "sup dude, welcome to the club!",
                timeSent: "15:40",
                isMine: false
              },

              {
                type: "text",
                data: "Thanks dude! looking forward to play with you!",
                timeSent: "15:43",
                isMine: true
              },

              {
                type: "text",
                data: "Just to remind you what i did when i was 19",
                timeSent: "15:47",
                isMine: false
              },
              {
                type: "img",
                data: "/chats_images/mbappe_worldcup.jpg",
                timeSent: "15:47",
                isMine: false
              },
              {
                type: "text",
                data: "wth dude you are a jerk.",
                timeSent: "16:21",
                isMine: true
              },
            ],
            img: "/avatars/avatar5.png",
            lastSeen: "2 hours",
          },
          {
            name: "Iniesta",
            nickName : "legend",
            lastModifiedMonth: 4,
            lastModifiedDate: 28,
            lastModifiedHour: 15,
            lastModifiedMinute: 53,
            lastModifiedSecond: 0,
            lastTimeModified : date.getTime(),

            messages: [
              {
                type: "text",
                data: "Hey dude! went through my photos and saw this, A sweet memory!",
                timeSent: "15:40",
                isMine: true
              },

              {
                type: "video",
                data: "/videos/IniestaGoal.mp4", 
                timeSent: "15:43",
                isMine: true
              },

              {
                type: "text",
                data: "Wow bro thats an old one! where was it??",
                timeSent: "15:47",
                isMine: false
              },
              {
                type: "text",
                data: "yea man! its from Champions League semi-finals 2009",
                timeSent: "15:50",
                isMine: true
              },
              {
                type: "text",
                data: "WOW! thats was an amazing night!",
                timeSent: "15:53",
                isMine: false
              },
            ],
            img: "/avatars/avatar5.png",
            lastSeen: "2 hours",
          },
          {
            name: "Cristiano Ronaldo",
            nickName : "penaldo" ,
            lastModifiedMonth: 3,
            lastModifiedDate: 28,
            lastModifiedHour: 22,
            lastModifiedMinute: 40,
            lastModifiedSecond: 0,
            lastTimeModified : date.getTime(),
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
            lastSeen: "4 days",
          },
        ],
      },
      {
        user: "Iniesta",
        nickName : "legend" ,
        lastSeen : "2 hours",
        img : "/avatars/avatar6.png",

        contacts: [
          {
            name: "Messi",
            nickName: "goat",
            lastModifiedMonth: 4,
            lastModifiedDate: 28,
            lastModifiedHour: 15,
            lastModifiedMinute: 53,
            lastModifiedSecond: 0,
            lastTimeModified : date.getTime(),
            messages: [
              {
                type: "text",
                data: "Hey dude! went through my photos and saw this, A sweet memory!",
                timeSent: "15:40",
                isMine: false
              },

              {
                type: "img",
                data: "/chats_images/iniesta_messi2.jpg", 
                timeSent: "15:43",
                isMine: false
              },

              {
                type: "text",
                data: "Wow bro thats an old one! where was it??",
                timeSent: "15:47",
                isMine: true
              },
              {
                type: "text",
                data: "yea man! its from Champions League final 2009",
                timeSent: "15:50",
                isMine: false
              },
              {
                type: "text",
                data: "WOW! thats was an amazing night!",
                timeSent: "15:53",
                isMine: true
              },
            ],
            img: "/avatars/avatar1.png",
            lastSeen: "2 hours",
          }
        ]
      },
      {
        user: "Xavi",
        nickName : "king",
        lastSeen : "2 hours",
        img : "/avatars/avatar7.png",
        contacts: [
          {
            name: "Messi",
            nickName: "goat",
            lastModifiedMonth: 4,
            lastModifiedDate: 28,
            lastModifiedHour: 16,
            lastModifiedMinute: 51,
            lastModifiedSecond: 0,
            lastTimeModified : date.getTime(),

            messages: [
              {
                type: "text",
                data: "I want to come back home bro",
                timeSent: "16:21",
                isMine: false
              },

              {
                type: "text",
                data: "this forking kid Mbappe is so toxic!",
                timeSent: "16:23",
                isMine: false
              },

              {
                type: "text",
                data: "yoooo dude, whats up? what did this little ninja turtle did?",
                timeSent: "16:32",
                isMine: true
              },
              {
                type: "text",
                data: "look what he sent me!",
                timeSent: "16:42",
                isMine: false
              },
              {
                type: "img",
                data: "/chats_images/mbappe_worldcup.jpg",
                timeSent: "16:42",
                isMine: false
              },
              {
                type: "text",
                data: "dam bro he is so rude, those young players these days...",
                timeSent: "16:51",
                isMine: true
              },
            ],
            img: "/avatars/avatar5.png",
            lastSeen: "2 hours",
          }
        ]
      },
      {
        user: "Mbappe",
        nickName : "turtle",
        lastSeen : "2 hours",
        img : "/avatars/avatar3.png",

        contacts: [
          {
            name: "Messi",
            nickName: "goat",
            lastModifiedMonth: 4,
            lastModifiedDate: 28,
            lastModifiedHour: 16,
            lastModifiedMinute: 21,
            lastModifiedSecond: 0,
            lastTimeModified : date.getTime(),

            messages: [
              {
                type: "text",
                data: "sup dude, welcome to the club!",
                timeSent: "15:40",
                isMine: true
              },

              {
                type: "text",
                data: "Thanks dude! looking forward to play with you!",
                timeSent: "15:43",
                isMine: false
              },

              {
                type: "text",
                data: "Just to remind you what i did when i was 19",
                timeSent: "15:47",
                isMine: true
              },
              {
                type: "img",
                data: "/chats_images/mbappe_worldcup.jpg",
                timeSent: "15:47",
                isMine: true
              },
              {
                type: "text",
                data: "wth dude you are a jerk.",
                timeSent: "16:21",
                isMine: false
              },
            ],
            img: "/avatars/avatar1.png",
            lastSeen: "2 hours",
          },
        ]
      },
      {
        user: "Cristiano Ronaldo",
        nickName : "penaldo",
        img : "/avatars/avatar1.png",
        lastSeen : "2 days ago",

        contacts : [
          {
            name: "Messi",
            nickName: "goat",
            lastModifiedMonth: 3,
            lastModifiedDate: 28,
            lastModifiedHour: 22,
            lastModifiedMinute: 28,
            lastModifiedSecond: 0,

            lastTimeModified : date.getTime(),

            messages: [
              {
                type: "text",
                data: "Congrats for the 6th Golden Ball mate, you are defentitly the GOAT!",
                timeSent: "22:35",
                isMine: true
              },
              {
                type: "text",
                data: "Thanks man!\ni dont think im the goat, Yoav Otmazgin is way better than me!",
                timeSent: "22:39",
                isMine: false
              },
              {
                type: "text",
                data: "oh i thought we exclude him, its quite obvious that he is the best!",
                timeSent: "22:40",
                isMine: true
              },
              {
                type: "text",
                data: "When someone ask me \"is Yoav Otmazgin the best player in the world?\", thats my answer:",
                timeSent: "22:40",
                isMine: true
              },
              {
                type: "audio",
                data: ronaldoSiu ,
                timeSent: "22:40",
                isMine: true
              },
            ],
            img: "/avatars/avatar4.png",
            lastSeen: "4 hours",
          },
        ]
      },
      {
        user: "Ramos",
        nickName : "dogy",
        img : "/avatars/avatar7.png",
        lastSeen :"1 hour ago",
        contacts : [
          {
            name: "Messi",
            nickName: "goat",
            lastModifiedMonth: 4,
            lastModifiedDate: 28,
            lastModifiedHour: 12,
            lastModifiedMinute: 57,
            lastModifiedSecond: 0,
            lastTimeModified : date.getTime(),

            messages: [
              {
                type: "text",
                data: "Welcome to PSG bro, I hope we can forget our history and became friends!",
                timeSent: "12:21",
                isMine: true
              },
              {
                type: "text",
                data: "hey dude, just wanted to text you! say hey to my new dog",
                timeSent: "12:43",
                isMine: false
              },
              {
                type: "img",
                data: "/chats_images/dog.jpg",
                timeSent: "12:43",
                isMine: false
              },
              {
                type: "text",
                data: "his name is real madrid!",
                timeSent: "12:43",
                isMine: false
              },

              {
                type: "text",
                data: "haha you are such an idiot!",
                timeSent: "12:57",
                isMine: true
              }
            ],
            img: "/avatars/avatar1.png",
            lastSeen: "4 hours",
          },
        ]
      }
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
