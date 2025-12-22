import * as Yup from 'yup';

export const Validators = {
  required: (message: string = 'This field is required') => ({ type: 'required', message }),
  maxLength: (max: number, message?: string) => ({
    type: 'maxLength',
    max,
    message: message || `Must be at most ${max} characters`,
  }),
  minLength: (min: number, message?: string) => ({
    type: 'minLength',
    min,
    message: message || `Must be at least ${min} characters`,
  }),
  pattern: (pattern: RegExp | string, message: string = 'Invalid format') => ({
    type: 'pattern',
    pattern,
    message,
  }),
  email: (message: string = 'Invalid email address') => ({ type: 'email', message }),
  phoneNumber: (message: string = 'Phone number must be 10 digits') =>
    Validators.pattern('^[0-9]{10}$', message),
};

export const CustomValidators = {
  required: Validators.required(),
  email: Validators.email(),
  phoneNumber: Validators.phoneNumber(),
};

export const createYupSchema = (fields: any[]) => {
  const shape: Record<string, any> = {};

  fields.forEach((field) => {
    if (!field.name) return;

    // Base type validation
    let validator: any;
    if (field.type === 'number') {
      validator = Yup.number();
    } else {
      validator = Yup.string(); // Default to string for text, email, password, select, textarea
    }

    if (field.validators && Array.isArray(field.validators)) {
      field.validators.forEach((v: any) => {
        if (!v) return;

        const errorMsg = field.errors?.[v.type] || v.message || 'Invalid value';

        switch (v.type) {
          case 'required':
            validator = validator.required(errorMsg);
            break;
          case 'maxLength':
            if (validator instanceof Yup.StringSchema) {
              validator = validator.max(v.max, errorMsg);
            }
            break;
          case 'minLength':
            if (validator instanceof Yup.StringSchema) {
              validator = validator.min(v.min, errorMsg);
            }
            break;
          case 'email':
            if (validator instanceof Yup.StringSchema) {
              validator = validator.email(errorMsg);
            }
            break;
          case 'pattern':
            if (validator instanceof Yup.StringSchema) {
              validator = validator.matches(new RegExp(v.pattern), errorMsg);
            }
            break;
        }
      });
    }

    shape[field.name] = validator;
  });

  return Yup.object().shape(shape);
};
