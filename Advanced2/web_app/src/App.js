import React from "react";
import { BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom';
import SignInValid from "./singInPage/signInValid";
import Form from './signUpForm/Form';
import Singin from "./singInPage/singin";

function App() {
  return (
      
      <Router>
         <Routes>
              <Route path="/" element={<Form/>}></Route>
              <Route path="/login" element={<Singin/>}></Route>
         </Routes>
      </Router>
  );
}

export default App;