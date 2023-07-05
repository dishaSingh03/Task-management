import axios from "axios";
import React, { useState } from "react";

export const getEmployees = async (setEmployeeData, setTotalPage, page) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://reqres.in/api/users?page=${page}`,
    });
    // console.log(response.data);
    // console.log("total", Math.ceil(response.data.total /response.data.per_page ));
    
    setEmployeeData(response.data);
    setTotalPage(Math.ceil(response.data.total /response.data.per_page ));
    return response.data;
    console.log(response.data);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const searchEmployeesByID = async (employeeId, setEmployeeId) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://reqres.in/api/users/${employeeId}`,
    });
    console.log(response.data);
    
    // setEmployeeId(response.data);
    return response.data;
    console.log(response.data);
  } catch (error) {
    console.error(error);
    return null;
  }
};