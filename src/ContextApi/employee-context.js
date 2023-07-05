import React, { createContext } from 'react';

const EmployeeContext= createContext({
    employeeData:[],
    addUser:(user)=>{}
});

export default EmployeeContext;