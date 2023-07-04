import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "../CSS/Home.css";
import Button from "react-bootstrap/Button";
import HomeTable from "./HomeTable";
import AddEmployee from "./AddEmployee";
import { searchEmployeesByID } from "../Services/employeeService";

const Home = () => {

  const [addEmployeeModel, setAddEmployeeModel] = useState(false);
  const [employeeId, setEmployeeId] = useState("");
  const handleSearch = () => {
    searchEmployeesByID(employeeId, setEmployeeId);
    console.log("employeeId", employeeId);
  };

  return (
    <>
      <AddEmployee
        employeeModelshow={addEmployeeModel}
        setAddEmployeeModel={setAddEmployeeModel}
      />
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            TASK MANAGEMENT
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                id="home-search"
                class="form-control me-2"
                type="search"
                placeholder="Search by ID"
                aria-label="Search"
                value={employeeId}
                onChange={(event) => setEmployeeId(event.target.value)}
              />
              <button
                class="btn btn-outline-success"
                className="btn btn-outline-success"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
              &nbsp; &nbsp;
              <Button
                variant="primary"
                onClick={() => {
                  window.location.href = "/Task-management";
                }}
              >
                LOGOUT
              </Button>
            </form>
          </div>
        </div>
      </nav>
      <HomeTable/>
      <Button
        className="Add-employee-Btn"
        variant="warning"
        onClick={() => {
          setAddEmployeeModel(true);
        }}
      >
        Create Employee
      </Button>
    </>
  );
};

export default Home;
