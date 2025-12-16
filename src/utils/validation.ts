import * as yup from 'yup';
export const emailSchema = yup.string().email('Invalid email').required('Email is required');
export const passwordSchema = yup
  .string()
  .min(6, 'At least 6 characters')
  .required('Password is required');
export const loginSchema = yup.object({ email: emailSchema, password: passwordSchema });
export type LoginValues = yup.InferType<typeof loginSchema>;
