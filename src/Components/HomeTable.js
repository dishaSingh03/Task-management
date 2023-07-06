import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Home.css";
import Button from "react-bootstrap/Button";
import { DataGrid } from "@mui/x-data-grid";
import { getEmployees } from "../Services/employeeService";
import Pagination from "react-bootstrap/Pagination";
import EmployeeContext from "../Store/employee-context";


const HomeTable = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [apiCallInProgress, setApiCallInProgress] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const empCtx = useContext(EmployeeContext);
  
  console.log("emp", empCtx);

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Perform API call with updated page parameter
    getEmployees(setEmployeeData, setTotalPage, page);
  };

  const renderPagination = () => {
    const items = [];
    for (let i = 1; i <= totalPage; i++) {
      items.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
    return <Pagination>{items}</Pagination>;
  };

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
            {/* {employeeData?.data && employeeData.data.length ? (
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
            )} */}
             {empCtx?.employeeData && empCtx.employeeData.length ? (
              empCtx.employeeData?.map((row) => (
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
                <td colspan = "5" style={{ textAlign: "center" }}>No Records's Available</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="pagination">{renderPagination()}</div>
      </div>
    </>
  );
};

export default HomeTable;
