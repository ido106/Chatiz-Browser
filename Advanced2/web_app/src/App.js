
import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ChatForm from "./components/chats/ChatForm";
import SignIn from "./components/sign_in/SignIn";
import Form from "./components/sign_up/Form";
import { useState } from "react";
import $ from 'jquery'; 

import './App.css';


// async function getContacts(token,flag) {
//   console.log("ajnba;bn;b;woivoa;hvohvaiojf;awijviaj!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

//   if(!flag) {
//     return [];
//   }

//   let contacts = null;
//   await fetch("https://localhost:7038/api/contacts", {
//     headers : {
//       'Content-Type' : 'application/json',
//       'Authorization' : 'Bearer' + token,
//     }
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     contacts = data;
//   })

//   console.log(contacts);
//   if(contacts == null) {
//     console.log("here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//     return [];
//   }
//   return contacts;


// }

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
          // getContacts={getContacts}
          token={UserData["JWTToken"]}
          contacts={[]}
        />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
