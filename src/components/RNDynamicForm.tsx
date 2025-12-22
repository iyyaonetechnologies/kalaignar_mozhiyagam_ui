import { RNInput } from './RNInput';
import { RNSelect } from './RNSelect';
import { RNTextarea } from './RNTextarea';
import { RNButton } from './RNButton';
import { useFormik } from 'formik';
import { createYupSchema } from '@/utils/validators';

export type FieldType = 'FNInput' | 'FNSelect' | 'FNTextarea' | 'FNRadio' | 'FNCheckbox';

export interface FieldConfig {
  fieldType: FieldType;
  name: string;
  label?: string;
  type?: string; // for input type="text"|"email" etc.
  placeholder?: string;
  required?: boolean;
  className?: string;
  options?: { label: string; value: string }[]; // for select/radio
  validators?: any[];
  errors?: Record<string, string>;
  hidden?: boolean;
  defaultValue?: any;
}

interface RNDynamicFormProps {
  fields: FieldConfig[];
  initialValues?: Record<string, any>;
  onSubmit: (values: any) => void;
  submitLabel?: string;
  onCancel?: () => void;
}

export default function RNDynamicForm({
  fields,
  initialValues = {},
  onSubmit,
  submitLabel = 'Submit',
  onCancel,
}: RNDynamicFormProps) {
  // Create dynamic initial values if not provided
  const formInitialValues = fields.reduce(
    (acc, field) => {
      if (field.name) {
        acc[field.name] = initialValues[field.name] ?? field.defaultValue ?? '';
      }
      return acc;
    },
    {} as Record<string, any>
  );

  const validationSchema = createYupSchema(fields);

  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      {fields.map((field) => {
        if (field.hidden) return null;

        const rawError = formik.touched[field.name] && formik.errors[field.name];
        const error = typeof rawError === 'string' ? rawError : undefined;

        switch (field.fieldType) {
          case 'FNInput':
            return (
              <RNInput
                key={field.name}
                id={field.name}
                name={field.name}
                label={field.label}
                type={field.type || 'text'}
                placeholder={field.placeholder}
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={error}
                className={field.className}
              />
            );

          case 'FNSelect':
            return (
              <div key={field.name} className={field.className}>
                {field.label && (
                  <label htmlFor={field.name} className="block text-sm font-medium mb-1">
                    {field.label}
                  </label>
                )}
                <RNSelect
                  id={field.name}
                  name={field.name}
                  value={formik.values[field.name]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  options={field.options || []}
                  disabled={false} // Add logic if needed
                />
                {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
              </div>
            );

          case 'FNTextarea':
            return (
              <div key={field.name} className={field.className}>
                {field.label && (
                  <label htmlFor={field.name} className="block text-sm font-medium mb-1">
                    {field.label}
                  </label>
                )}
                <RNTextarea
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formik.values[field.name]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
              </div>
            );

          case 'FNRadio':
            return (
              <div key={field.name} className={field.className}>
                {field.label && (
                  <label className="block text-sm font-medium mb-2">{field.label}</label>
                )}
                <div className="flex gap-4">
                  {field.options?.map((opt) => (
                    <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name={field.name}
                        value={opt.value}
                        checked={formik.values[field.name] === opt.value}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-sm">{opt.label}</span>
                    </label>
                  ))}
                </div>
                {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
              </div>
            );

          case 'FNCheckbox':
            return (
              <div key={field.name} className={field.className}>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name={field.name}
                    checked={formik.values[field.name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium">{field.label}</span>
                </label>
                {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
              </div>
            );

          default:
            return null;
        }
      })}

      <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 mt-6">
        {onCancel && (
          <RNButton variant="outline" type="button" onClick={onCancel}>
            Cancel
          </RNButton>
        )}
        <RNButton variant="solid" type="submit">
          {submitLabel}
        </RNButton>
      </div>
    </form>
  );
}
