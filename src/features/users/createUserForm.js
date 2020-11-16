import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { Formik, Field, Form } from "formik";

import { createUser } from "./userSlice";

const CreateUserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return (
    <section>
      <h2>Create A New User</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(createUser(values));

          //check state for "status == false"
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="sample@test.com"
            />

            <br />
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="password"
            />
            <br />
            <label htmlFor="passwordConfirmation">Confirm Password</label>
            <Field
              id="passwordConfirmation"
              name="passwordConfirmation"
              type="password"
              placeholder="password"
            />

            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default CreateUserForm;
