import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Formik } from "formik";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, FormControl, Row } from "react-bootstrap";
import * as Yup from "yup";
import "../CSS/Home.css";
import { getEmployees } from "../Services/employeeService";

const AddEmployee = ({ employeeModelshow, setAddEmployeeModel }) => {
  console.log("model call");

  const [employeeData, setEmployeeData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  const [addEmployeeValues, setAddEmployeeValuesValues] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
  });

  // Creating schema
  const schema = Yup.object().shape({
    id: Yup.string().required("ID is a required field"),
    first_name: Yup.string().required("First Name is a required field"),
    last_name: Yup.string().required("Last Name is a required field"),
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    avatar: Yup.string().required("Profile Avatar is a required field"),
  });

  const addEmployee = (values) => {
    console.log("add employee", values);
    setEmployeeData(values);
    getEmployees(setEmployeeData, setTotalPage);
    console.log(employeeData, "employeedata")
  };

  const handleClose = () => setAddEmployeeModel(false);
  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{
          id: "",
          first_name: "",
          last_name: "",
          email: "",
          avatar: "",
        }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          console.log("values", values);
         
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form className="add-user-form" noValidate onSubmit={handleSubmit}>
            <Modal centered show={employeeModelshow} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Employee</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="form-group" id="form-employee">
                  <label className="employeeFormLabel">ID:</label>
                  <input
                    className="employeeFormInput"
                    type="text"
                    name="id"
                    placeholder="Enter your ID"
                    value={values.id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <p className="error">{errors.id && touched.id && errors.id}</p>
                <div className="form-group" id="form-employee">
                  <label className="employeeFormLabel">First Name:</label>
                  <input
                    className="employeeFormInput"
                    type="text"
                    name="first_name"
                    placeholder="Enter First Name"
                    id="first_name"
                    value={values.first_name}
                    onChange={handleChange}
                  />
                </div>
                <p className="error">
                  {errors.first_name && touched.first_name && errors.first_name}
                </p>
                <div className="form-group" id="form-employee">
                  <label className="employeeFormLabel">Last Name:</label>
                  <input
                    className="employeeFormInput"
                    type="text"
                    name="last_name"
                    placeholder="Enter Last Name"
                    id="last_name"
                    value={values.last_name}
                    onChange={handleChange}
                  />
                </div>
                <p className="error">
                  {errors.last_name && touched.last_name && errors.last_name}
                </p>
                <div className="form-group" id="form-employee">
                  <label className="employeeFormLabel">Employee Email:</label>
                  <input
                    className="employeeFormInput"
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </div>
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                <div className="form-group" id="form-employee">
                  <label className="employeeFormLabel">Profile Avatar:</label>
                  <input
                    className="employeeFormInput"
                    type="text"
                    name="avatar"
                    placeholder="Enter your Avatar"
                    value={values.avatar}
                    onChange={handleChange}
                  />
                </div>
                <p className="error">
                  {errors.avatar && touched.avatar && errors.avatar}
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AddEmployee;
