import React, { createContext } from 'react';

const EmployeeContext= createContext({
    employeeData:[],
    addEmployee:(emp)=>{}
});

export default EmployeeContext;