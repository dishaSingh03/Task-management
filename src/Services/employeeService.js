import axios from "axios";
import React, { useState } from "react";

export const getEmployees = async (setEmployeeData, setTotalPage) => {
  try {
    const response = await axios({
      method: "GET",
      url: "https://reqres.in/api/users?page=1",
    });
    console.log(response.data);
    console.log("total", Math.ceil(response.data.total /response.data.per_page ));
    
    setEmployeeData(response.data);
    setTotalPage(Math.ceil(response.data.total /response.data.per_page ));
    return response.data;
    console.log(response.data);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const searchEmployeesByID = async (id, setEmployeeId) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://reqres.in/api/users/${id}`,
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