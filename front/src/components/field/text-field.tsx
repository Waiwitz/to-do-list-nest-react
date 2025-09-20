import { TextField, type TextFieldProps } from "@mui/material";
import { Field, type FieldAttributes, type FieldProps } from "formik";

export const TextFieldForm = ({
  fieldProps,
  inputProps,
}: {
  fieldProps: FieldAttributes<any>;
  inputProps: TextFieldProps;
}) => {
  return (
    <Field {...fieldProps}>
      {({ field, meta }: FieldProps) => (
        <TextField
          {...field}
          {...inputProps}
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
  );
};
