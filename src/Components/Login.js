import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "../CSS/Login.css";

const Login = () => {
  // Creating schema
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });

  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const validateLogin = (values) => {
    const Email = "task@gmail.com";
    const password = "admin123";

    if (values.email === Email && values.password === password) {
      window.location.href = "/Task-management/home";
    } else {
      setShowAlert(true);
    }
  };

  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled

          validateLogin(values);
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
          <div class="login-container">
            <div class="login-card">
              <h2 className="head">Login Form</h2>
              <form className="login-form" noValidate onSubmit={handleSubmit}>
                <label className="login-label" for="username">
                  Email
                </label>
                <input
                  className="login-input"
                  type="email"
                  id="email"
                  placeholder="Enter your username"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>

                <label className="login-label" for="password">
                  Password
                </label>
                <input
                  className="login-input"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                <br />

                <button className="login-btn" type="submit">
                  Login
                </button>
              </form>
              <br />
              {showAlert && (
              <div className="alert alert-danger alert-dismissible" role="alert">
                <strong>Danger!</strong> Wrong email or password!
              </div>
            )}
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;
