import { Field, type FieldAttributes, type FieldProps } from "formik";
import {
  DatePicker,
  type DatePickerProps,
} from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const DatePickerField = ({
  fieldProps,
  datePickerProps,
}: {
  fieldProps: FieldAttributes<any>;
  datePickerProps: DatePickerProps;
}) => {
  return (
    <Field {...fieldProps}>
      {({ field, form }: FieldProps) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            {...field}
            {...datePickerProps}
            onChange={(value) => form.setFieldValue(field.name, value)}
          />
        </LocalizationProvider>
      )}
    </Field>
  );
};
