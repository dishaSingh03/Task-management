import "./App.css";
import React from "react";
import Home from "./Components/Home.js";
import Login from "./Components/Login.js";
import Table from "./Components/Table.js";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeProvider from "./Store/EmployeeProvider";

function App() {
  return (
    <EmployeeProvider>
      <Routes>
        <Route exact path="/Task-management" Component={Login} />
        <Route path="/Task-management/home" Component={Home} />
        <Route path="/Task-management/table" Component={Table} />
      </Routes>
    </EmployeeProvider>
  );
}

export default App;
