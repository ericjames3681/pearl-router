import React from "react";
import { Button, Form, Grid, Image, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import PearlDialogueLogin from "./PearlDialogueLogin";

const LogInCard = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
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
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
          <Grid
            textAlign="center"
            style={{ height: "100vh" }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Image
                centered
                fluid
                size="small"
                src="./illustratorPEARLB.png"
              />
              <PearlDialogueLogin />
              <br />
              <Form onSubmit={handleSubmit}>
                <Header floated="left">Email</Header>
                <Form.Input
                  style={{ height: 50 }}
                  iconPosition="left"
                  placeholder="E-mail address"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                >
                  <Icon className="user" />
                  <input style={{ borderRadius: 10 }} />
                </Form.Input>
                {errors.email && touched.email && errors.email}

                <Header floated="left">Password</Header>
                <Form.Input
                  style={{ height: 50, borderRadius: 10 }}
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                >
                  <Icon className="lock" />
                  <input style={{ borderRadius: 10 }} />
                </Form.Input>
                {errors.password && touched.password && errors.password}

                <Button
                  style={{
                    backgroundColor: "#FFA2E3",
                    height: 50,
                    borderRadius: 10,
                  }}
                  fluid
                  black
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Form>
              <br />
              <div>
                New to us?{" "}
                <Link to="./create-account" className="text-color">
                  Sign Up
                </Link>
              </div>
            </Grid.Column>
          </Grid>
        )}
      </Formik>
    </div>
  );
};

export default LogInCard;
