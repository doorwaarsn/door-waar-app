import * as yup from "yup";

export const phoneNumberSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .matches(
      /^\+?[1-9]\d{1,14}$/,
      "Phone number must be a valid international number"
    )
    .required("Phone number is required"),
});

export const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
