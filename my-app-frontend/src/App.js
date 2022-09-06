import './App.css';
import React from 'react';
import NavBar from "./NavBar.js";
import {Route, Routes} from 'react-router-dom';
import Home from './Home.js';
import Chats from './Chats.js';
import Customers from './Customers.js';
import SalesPersons from './SalesPersons.js';
import Tasks from './Tasks.js';


function App() {

  return (
    <nav className="navbar">
      {<NavBar/> }
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Tasks" element={<Tasks />}/>
        <Route path="/Costumers" element={<Customers />}/>
        <Route path="/SalesPersons" element={<SalesPersons />} />
        <Route path="/Chats" element={<Chats />} />

      </Routes>
      </nav> 
  );
}


export default App;
