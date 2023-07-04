import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Home.css";
import Button from "react-bootstrap/Button";
import { DataGrid } from "@mui/x-data-grid";
import { getEmployees } from "../Services/employeeService";
import Pagination from 'react-bootstrap/Pagination';

const HomeTable = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [apiCallInProgress, setApiCallInProgress] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  

  useEffect(() => {
    let timerId;
    if (!apiCallInProgress) {
      timerId = setTimeout(() => {
        setApiCallInProgress(true);
        getEmployees(setEmployeeData, setTotalPage);

        setApiCallInProgress(false);
      }, 100);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <>
      <div className="Home-table">
        <table class="table table-striped table-hove">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Employee first Name</th>
              <th scope="col">Employee Last Name</th>
              <th scope="col">Employee Email</th>
              <th scope="col">Profile Avatar</th>
            </tr>
          </thead>
          <tbody>
            {employeeData?.data && employeeData.data.length ? (
              employeeData.data?.map((row) => (
                <tr key={row.id}>
                  <th scope="row">{row.id}</th>
                  <td>{row.first_name}</td>
                  <td>{row.last_name}</td>
                  <td>{row.email}</td>
                  <td>{row.avatar}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No Records's Available</td>
              </tr>
            )}
          </tbody>
        </table>

        

      
      </div>
    </>
  );
};

export default HomeTable;
