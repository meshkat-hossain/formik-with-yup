import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "yup-phone";
import "../App.css";
import Error from "./Error";

const FormikForm = () => {
  const [userData, setUserData] = useState({});

  console.log(userData);

  const initialValues = {
    name: "",
    email: "",
    contact: "",
    social: {
      facebook: "",
      twitter: "",
    },
    phoneNumber: ["", ""],
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().required("Required").email("Invalid email"),
    contact: yup
      .string()
      .required("Required")
      .phone("BD", true, " Contact number is invalid"),
    facebook: yup.string().required("Required"),
    twitter: yup.string().required("Required"),
    phoneNumber: yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("form data", values);
    setUserData((prev) => ({ ...prev, ...values }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="">
          <label htmlFor="name">Name</label>
          <Field
            id="name"
            name="name"
            type="text"
            placeholder=" Type Your Name "
          />
        </div>
        <ErrorMessage name="name" component={Error} />
        <br></br>
        <div className="">
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            placeholder=" Type Your email "
          />
        </div>
        <ErrorMessage name="email" component={Error} />
        <br></br>
        <div className="">
          <label htmlFor="contact">Contact</label>
          <Field
            id="contact"
            name="contact"
            type="contact"
            placeholder=" Type Your contact "
          />
        </div>
        <ErrorMessage name="contact" component={Error} />
        <br></br>
        <div className="">
          <label htmlFor="facebook">Facebook</label>
          <Field type="text" id="facebook" name="social.facebook" />
        </div>
        <ErrorMessage name="social.facebook" component={Error} />
        <br></br>
        <div className="">
          <label htmlFor="twitter">Twitter</label>
          <Field type="text" id="twitter" name="social.twitter" />
        </div>
        <ErrorMessage name="social.twitter" component={Error} />
        <div className="">
          <label htmlFor="primaryNumber">Primary Phone number </label>
          <Field id="primaryNumber" name="phoneNumber[0]" type="text" />
        </div>
        <div className="">
          <label htmlFor="secondaryNumber">Secondary Phone number </label>
          <Field id="secondaryNumber" name="phoneNumber[1]" type="text" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;

// formik use kore form er data gulo receive korte hobe .
//data hooks er moddhe rakhte hobe .
//yup er madhome validation korte hobe .


