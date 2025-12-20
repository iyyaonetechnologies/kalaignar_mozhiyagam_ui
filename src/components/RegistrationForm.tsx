import { RNButton } from '@/components/RNButton';
import { RNInput } from '@/components/RNInput';
import { RNModal } from '@/components/RNModal';
import { RNSelect } from '@/components/RNSelect';
import { useFormik } from 'formik';
import { useState } from 'react';

type Program = {
  title: string;
};

type RegistrationFormProps = {
  open: boolean;
  onClose: () => void;

  programMode: 'dropdown' | 'fixed' | 'none';
  programs?: Program[];
  programValue?: string;

  showPurpose?: boolean;
  showCertificate?: boolean;
};

export default function RegistrationForm({
  open,
  onClose,
  programMode,
  programs = [],
  programValue = '',
  showPurpose = false,
  showCertificate = false,
}: RegistrationFormProps) {
  /* ---------- Certificate handled OUTSIDE Formik ---------- */
  const [hasCertificate, setHasCertificate] = useState<'yes' | 'no' | ''>('');
  const [certificateFile, setCertificateFile] = useState<File | null>(null);
  const [certificateError, setCertificateError] = useState('');

  /* ---------- Formik (only normal inputs) ---------- */
  const formik = useFormik({
    initialValues: {
      program:
        programMode === 'dropdown'
          ? programs[0]?.title || ''
          : programValue,
      name: '',
      address: '',
      education: '',
      email: '',
      phone: '',
      purpose: '',
    },

    validate: (values) => {
      const errors: Record<string, string> = {};

      if (programMode !== 'none' && !values.program) {
        errors.program = 'Program is required';
      }

      if (!values.name || values.name.length < 3) {
        errors.name = 'Name must contain at least 3 characters';
      }

      if (!values.address) {
        errors.address = 'Address is required';
      }

      if (!values.education) {
        errors.education = 'Education details are required';
      }

      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'Enter a valid email address';
      }

      if (!values.phone) {
        errors.phone = 'Phone number is required';
      } else if (!/^[0-9]{10}$/.test(values.phone)) {
        errors.phone = 'Phone number must be exactly 10 digits';
      }

      if (showPurpose && !values.purpose) {
        errors.purpose = 'Purpose is required';
      }

      return errors;
    },

    onSubmit: (values, { resetForm }) => {
      /* ----- Certificate validation (manual) ----- */
      if (showCertificate) {
        if (!hasCertificate) {
          setCertificateError('Please select Yes or No');
          return;
        }

        if (hasCertificate === 'yes' && !certificateFile) {
          setCertificateError('Please upload certificate file');
          return;
        }
      }

      setCertificateError('');

      console.log('FORM DATA', {
        ...values,
        hasCertificate,
        certificateFile,
      });

      alert('Registration submitted successfully');

      resetForm();
      setHasCertificate('');
      setCertificateFile(null);
      onClose();
    },
  });

  return (
    <RNModal open={open} onClose={onClose} title="Registration Form" size="lg">
      <form onSubmit={formik.handleSubmit}>
        <div className="space-y-4 bg-[var(--RN-Blue-10)] rounded-lg p-6">

          {/* Program dropdown */}
          {programMode === 'dropdown' && (
            <div>
              <label className="text-sm font-medium">Program</label>
              <RNSelect
                name="program"
                value={formik.values.program}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                options={programs.map((p) => ({
                  label: p.title,
                  value: p.title,
                }))}
              />
              {formik.errors.program && (
                <p className="text-xs text-red-600">{formik.errors.program}</p>
              )}
            </div>
          )}

          {/* Program fixed */}
          {programMode === 'fixed' && (
            <RNInput label="Program" value={programValue} disabled />
          )}

          <RNInput
            label="Name"
            {...formik.getFieldProps('name')}
            error={formik.touched.name ? formik.errors.name : undefined}
          />

          <RNInput
            label="Address"
            {...formik.getFieldProps('address')}
            error={formik.touched.address ? formik.errors.address : undefined}
          />

          <RNInput
            label="Education Details"
            {...formik.getFieldProps('education')}
            error={formik.touched.education ? formik.errors.education : undefined}
          />

          <RNInput
            label="Email"
            type="email"
            {...formik.getFieldProps('email')}
            error={formik.touched.email ? formik.errors.email : undefined}
          />

          <RNInput
            label="Phone"
            {...formik.getFieldProps('phone')}
            error={formik.touched.phone ? formik.errors.phone : undefined}
          />

          {/* Purpose */}
          {showPurpose && (
            <div>
              <label className="text-sm font-medium">Purpose</label>
              <RNSelect
                name="purpose"
                value={formik.values.purpose}
                onChange={formik.handleChange}
                options={[
                  { label: 'Indoor', value: 'Indoor' },
                  { label: 'Outdoor', value: 'Outdoor' },
                  { label: 'Summer Camp', value: 'Summer Camp' },
                ]}
              />
              {formik.errors.purpose && (
                <p className="text-xs text-red-600">{formik.errors.purpose}</p>
              )}
            </div>
          )}

          {/* Certificate section */}
          {showCertificate && (
            <div>
              <label className="text-sm font-medium">
                Do you have any sports experience certificate?
              </label>

              <div className="flex gap-6 mt-2">
                <label>
                  <input
                    type="radio"
                    checked={hasCertificate === 'yes'}
                    onChange={() => setHasCertificate('yes')}
                  />{' '}
                  Yes
                </label>

                <label>
                  <input
                    type="radio"
                    checked={hasCertificate === 'no'}
                    onChange={() => setHasCertificate('no')}
                  />{' '}
                  No
                </label>
              </div>

              {hasCertificate === 'yes' && (
                <input
                  type="file"
                  accept=".pdf,.jpg,.png"
                  className="mt-2"
                  onChange={(e) =>
                    setCertificateFile(e.target.files?.[0] || null)
                  }
                />
              )}

              {certificateError && (
                <p className="text-xs text-red-600 mt-1">
                  {certificateError}
                </p>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <RNButton variant="outline" type="button" onClick={onClose}>
              Cancel
            </RNButton>
            <RNButton variant="solid" type="submit">
              Submit
            </RNButton>
          </div>

        </div>
      </form>
    </RNModal>
  );
}
