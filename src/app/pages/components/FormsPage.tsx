import { RNButton } from '@/components/RNButton';
import { RNCard } from '@/components/RNCard';
import { RNContainer } from '@/components/RNContainer';
import { RNInput } from '@/components/RNInput';
import { useFormik } from 'formik';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
export default function FormsPage() {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: 'Print Section',
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (!values.name) errors.name = 'Name is required';
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address11';
      }
      if (!values.subject) errors.subject = 'Subject is required';
      if (!values.message) errors.message = 'Message is required';
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      // Example submit handler — replace with real submit logic
      // eslint-disable-next-line no-alert
      alert(`Form submitted:\n${JSON.stringify(values, null, 2)}`);
      resetForm();
    },
  });

  return (
    <RNContainer className="py-8">
      <div ref={printRef}>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[var(--RN-Base-100)] mb-4">Form Components</h1>
          <p className="text-[var(--RN-Text-muted)] mb-6">
            Complete form examples with validation and best practices.
          </p>

          <div className="mb-6">
            <Link to="/components">
              <RNButton variant="ghost" size="sm">
                ← Back to Components
              </RNButton>
            </Link>
          </div>
        </div>
        <div className="space-y-8">
          <RNCard variant="outlined" padding="lg">
            <h2 className="text-xl font-semibold text-[var(--RN-Base-100)] mb-6">
              Contact Form Example
            </h2>

            <form onSubmit={formik.handleSubmit} className="space-y-4 max-w-md">
              <RNInput
                label="Name"
                placeholder="Enter your name"
                {...formik.getFieldProps('name')}
                error={
                  formik.touched.name && formik.errors.name ? String(formik.errors.name) : undefined
                }
              />

              <RNInput
                label="Email"
                type="email"
                placeholder="Enter your email"
                {...formik.getFieldProps('email')}
                error={
                  formik.touched.email && formik.errors.email
                    ? String(formik.errors.email)
                    : undefined
                }
              />

              <RNInput
                label="Subject"
                placeholder="What's this about?"
                {...formik.getFieldProps('subject')}
                error={
                  formik.touched.subject && formik.errors.subject
                    ? String(formik.errors.subject)
                    : undefined
                }
              />

              <div className="grid gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  placeholder="Write your message..."
                  className="h-28 w-full rounded-md border border-[var(--RN-Base-30)] bg-[var(--RN-Base-0)] px-3 py-2 text-sm placeholder:text-[var(--RN-Base-50)] focus:border-[var(--RN-Blue-100)]"
                  {...formik.getFieldProps('message')}
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-xs text-red-600">{formik.errors.message}</p>
                )}
              </div>

              <div className="flex gap-3">
                <RNButton variant="solid" type="submit">
                  Send Message
                </RNButton>
                <RNButton
                  variant="outline"
                  type="button"
                  onClick={() => {
                    formik.resetForm();
                  }}
                >
                  Reset
                </RNButton>
              </div>
            </form>
          </RNCard>
        </div>
      </div>
      <button onClick={handlePrint}>Print</button>{' '}
    </RNContainer>
  );
}
