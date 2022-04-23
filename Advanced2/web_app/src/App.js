
import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css';
import SignIn from "./components/sign_in/SignIn";
import Form from "./components/sign_up/Form";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn/>}></Route>
        <Route path="/SignUp" element={<Form/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
