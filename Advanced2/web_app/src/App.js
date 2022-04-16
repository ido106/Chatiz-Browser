import React from "react";
import { BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom';
import SignInValid from "./components/signInValid";
import Form from './components/Form';

function App() {
  return (
      
      <Router>
         <Routes>
              <Route path="/" element={<Form/>}></Route>
              <Route path="/login" element={<SignInValid/>}></Route>
         </Routes>
      </Router>
  );
}

export default App;