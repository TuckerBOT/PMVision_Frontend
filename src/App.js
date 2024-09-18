import './App.css';
import React from 'react';
import Dashboard from './components/mainTemplate/MainTemplate';
import { useEffect, useState, useContext } from 'react';
import { Typography, Link } from '@mui/material';
import {BrowserRouter} from 'react-router-dom';
import { API_URL } from './components/globalVariables/GlobalVariables.js';
import Unauthorized from './components/pages/unauthorized/Unauthorized';
import { UserContext } from "./components/context/UserContext";

function App({}) {
  const user = useContext(UserContext);

  return (
    <div className="App">
      <BrowserRouter>
        {/* {user ? <Dashboard/> :  <Unauthorized/>} */}
        <Dashboard/>
      </BrowserRouter>
    </div>
  );
}

export default App;
