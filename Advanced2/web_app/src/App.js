import './App.css';
import Singin from './singInPage/singin';
import Registration from './registration/registration';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Singin/>
        </BrowserRouter>
    );
}

export default App;