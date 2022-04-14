import React from "react";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import SignInValid from "./singInPage/signInValid";
import Form from './signUpForm/Form';

function App() {
    const adminUser = {
        userName: "otma",
        password: "homo"
      }
  return (
      
      <BrowserRouter >
      <Routes>
      <Route path="/" element={<Form/>}></Route>
      </Routes>
      </BrowserRouter >
  );
}

export default App;