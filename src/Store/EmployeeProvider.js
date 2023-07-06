import { useReducer } from "react";
import EmployeeContext from "./employee-context";
import { getEmployees } from "../Services/employeeService";
import React, { useState} from "react";

const initialEmpList = {
  employees: [
    // {
    //   id: 1,
    //   email: "george.bluth@reqres.in",
    //   first_name: "George",
    //   last_name: "Bluth",
    //   avatar: "https://reqres.in/img/faces/1-image.jpg",
    // },
   
  ],
};



const empReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedEmpList = [...state.employees, action.emp];
    return {
      employees: updatedEmpList,
    };
  }
};

const EmployeeProvider = (props) => {
  const [empState, empDispatcher] = useReducer(empReducer, initialEmpList);
  const addEmpHandler = (emp) => {
    empDispatcher({ type: "ADD", emp: emp });
  };

  const empContext = {
    employeeData: empState.employees,
    addEmployee: addEmpHandler,
  };

  return (
    <EmployeeContext.Provider value={empContext}>
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;
