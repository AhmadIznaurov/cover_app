import './index.css';
import {Navbar} from "./components/Navbar";
import {Home} from "./Pages/Home";
import {Features} from "./Pages/Features";
import {Contacts} from "./Pages/Contacts";
import {Route, Routes} from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="container">
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Features' element={<Features />}/>
        <Route path='/Contacts' element={<Contacts />}/>
      </Routes>
    </div>
  );
}

export default App;
