// TODO: Install yup for validation: npm install yup
// import * as yup from 'yup';
// export const emailSchema = yup.string().email('Invalid email').required('Email is required');
// export const passwordSchema = yup
//   .string()
//   .min(6, 'At least 6 characters')
//   .required('Password is required');
// export const loginSchema = yup.object({ email: emailSchema, password: passwordSchema });
// export type LoginValues = yup.InferType<typeof loginSchema>;

// Simple validation functions without yup
export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

export type LoginValues = {
  email: string;
  password: string;
};
