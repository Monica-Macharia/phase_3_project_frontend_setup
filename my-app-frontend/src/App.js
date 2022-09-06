import './App.css';
import React from 'react';
import NavBar from "./NavBar.js";
import {Route, Routes} from 'react-router-dom';
import Home from './Home.js';
import Chats from './Chats.js';
import Customers from './Customers.js';
import SalesPerson from './SalesPersons.js';
import Tasks from './Tasks.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
