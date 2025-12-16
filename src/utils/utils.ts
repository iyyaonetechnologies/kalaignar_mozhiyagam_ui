import { FormikProps } from 'formik';

export const getValidationProps = (formik: FormikProps<any>, name: any, helperText?: any) => {
  const isError = formik.touched?.[name] && !!formik.errors?.[name];
  return {
    helperText: isError ? formik.errors[name] : helperText?.[name] || '',
    error: isError,
  };
};
