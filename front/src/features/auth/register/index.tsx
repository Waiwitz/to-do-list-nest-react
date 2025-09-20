import { Button, Card, Container, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { TextFieldForm } from "../../../components/field/text-field";
import { DatePickerField } from "../../../components/field/date-picker-field";
import { useRegister } from "../hooks";
import * as Yup from "yup";

const validation = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  fname: Yup.string().required("Required"),
  lname: Yup.string().required("Required"),
  birthday: Yup.date().required("Required").nullable(),
  password: Yup.string().min(6, "Too Short!").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Required"),
});

export const Register = () => {
  const { handleSubmit } = useRegister();

  return (
    <Container maxWidth="sm" className="my-60">
      <Card className="px-6 py-14 backdrop-blur-lg shadow-lg rounded-md">
        <Typography className="text-center text-2xl font-bold mb-4">
          Register
        </Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validation}
          validateOnChange={false}
          validateOnMount={false}
        >
          {({}) => (
            <Form className="flex flex-col gap-4">
              <TextFieldForm
                fieldProps={{ name: "email", type: "email", required: true }}
                inputProps={{ label: "Email" }}
              />
              <TextFieldForm
                fieldProps={{ name: "fname", required: true }}
                inputProps={{ label: "First Name" }}
              />
              <TextFieldForm
                fieldProps={{ name: "lname", required: true }}
                inputProps={{ label: "Last Name" }}
              />
              <DatePickerField
                fieldProps={{ name: "birthday", required: true }}
                datePickerProps={{ label: "Birthday" }}
              />
              <TextFieldForm
                fieldProps={{ name: "password" }}
                inputProps={{ label: "Password", type: "password" }}
              />
              <TextFieldForm
                fieldProps={{ name: "confirmPassword" }}
                inputProps={{ label: "Confirm Password", type: "password" }}
              />
              <Button type="submit" variant="contained" color="primary">
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </Container>
  );
};

const initialValues = {
  email: "",
  fname: "",
  birthday: null,
  password: "",
  confirmPassword: "",
};
