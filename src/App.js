import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./Components/Home.js";
import Login from "./Components/Login.js";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
