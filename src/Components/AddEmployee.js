import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Formik } from "formik";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, FormControl, Row } from "react-bootstrap";
import * as Yup from "yup";
import "../CSS/Home.css";

const AddEmployee = ({ employeeModelshow, setAddEmployeeModel }) => {
  console.log("model call");

  const handleClose = () => setAddEmployeeModel(false);
  return (
    <>
      <Formik
      // validationSchema={schema}
      // initialValues={{ email: "", password: "" }}
      // onSubmit={(values) => {
      //   // Alert the input values of the form that we filled

      //   validateLogin(values);
      // }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Modal centered show={employeeModelshow} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title >Add Employee</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <form className="add-user-form">
                <div className="form-group" id="form-employee">
                  <label className="employeeFormLabel">ID:</label>
                  <input
                  className="employeeFormInput"
                    type="text"
                    name="id"
                    // value={user.id}
                    // onChange={handleChange}
                    // disabled
                  />
                </div>
                <div className="form-group" id="form-employee">
                  <label className="employeeFormLabel">First Name:</label>
                  <input className="employeeFormInput"
                    type="text"
                    name="fname"
                    // value={user.fname}
                    // onChange={handleChange}
                  />
                </div>
                <div className="form-group" id="form-employee">
                  <label className="employeeFormLabel">Last Name:</label>
                  <input className="employeeFormInput"
                    type="text"
                    name="lname"
                    // value={user.lname}
                    // onChange={handleChange}
                  />
                </div>
                <div className="form-group" id="form-employee">
                  <label className="employeeFormLabel">Employee Email:</label>
                  <input className="employeeFormInput"
                    type="text"
                    name="lname"
                    // value={user.lname}
                    // onChange={handleChange}
                  />
                </div>
                <div className="form-group" id="form-employee">
                  <label className="employeeFormLabel">Profile Avatar:</label>
                  <input className="employeeFormInput"
                    type="text"
                    name="lname"
                    // value={user.lname}
                    // onChange={handleChange}
                  />
                </div>
               
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary">Save Changes</Button>
              </Modal.Footer>
            </Modal>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddEmployee;
