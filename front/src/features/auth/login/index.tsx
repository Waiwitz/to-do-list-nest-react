import { Button, Card, Container, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { TextFieldForm } from "../../../components/field/text-field";
import { Link } from "@tanstack/react-router";

export const Login = () => {
  const validation = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Too Short!").required("Required"),
  });

  return (
    <Container maxWidth="sm" className="my-60">
      <Card className="px-6 py-14 flex flex-col gap-4 backdrop-blur-lg  shadow-lg rounded-md">
        <Typography variant="h4" component="h1" gutterBottom>
          To Do List Login
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validation}
          validateOnChange={false}
          validateOnMount={false}
          onSubmit={() => {}}
        >
          {({}) => (
            <Form className="flex flex-col gap-4">
              <TextFieldForm
                fieldProps={{ name: "email", type: "email" }}
                inputProps={{ label: "Email" }}
              />
              <TextFieldForm
                fieldProps={{ name: "password", type: "password" }}
                inputProps={{ label: "Password" }}
              />
              <Button variant="contained" color="primary" type="submit">
                Login
              </Button>
            </Form>
          )}
        </Formik>
        <Link className="text-end hover:text-blue-500" to="/register">
          Register
        </Link>
      </Card>
    </Container>
  );
};
