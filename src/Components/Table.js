import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Home.css";
import Button from "react-bootstrap/Button";
import { DataGrid } from "@mui/x-data-grid";
import { getEmployees } from "../Services/employeeService";
import { colors } from "@mui/material";

const Table = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [apiCallInProgress, setApiCallInProgress] = useState(false);

  useEffect(() => {
    let timerId;
    if (!apiCallInProgress) {
      timerId = setTimeout(() => {
        setApiCallInProgress(true);
        getEmployees(setEmployeeData);

        setApiCallInProgress(false);
      }, 100);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'first_name', headerName: 'First name', width: 150 },
    { field: 'last_name', headerName: 'Last name', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'avatar', headerName: 'Avater', width: 150},
    
  ];

  return (
    <>
      <div style={{ height: 400, width: '100%', backgroundColor: "white", color: "black" }}>
      <DataGrid
        rows={employeeData.data || []}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </>
  );
};

export default Table;
