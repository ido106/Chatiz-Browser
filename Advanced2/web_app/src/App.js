import React from "react";
import { BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom';
import SignInValid from "./singInPage/signInValid";
import Form from './signUpForm/Form';

function App() {
    const adminUser = {
        userName: "otma",
        password: "homo"
      }
  return (
      
      <Router>
         <Routes>
              <Route path="/" element={<Form/>}></Route>
         </Routes>
      </Router>
  );
}

export default App;