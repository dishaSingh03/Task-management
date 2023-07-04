import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./Components/Home.js"
import Login from "./Components/Login.js"
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={Login} />
      <Route path="/home" Component={Home} />
    </Routes>
  );
}

export default App;
