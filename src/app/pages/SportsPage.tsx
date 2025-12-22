import React, { useState } from 'react';
import { RNLabel } from '@/components/RNLabel';
import { RNCard } from '@/components/RNCard';
import { RNButton } from '@/components/RNButton';
import { RNContainer } from '@/components/RNContainer';
import RNDynamicForm from '@/components/RNDynamicForm';
import { RNModal } from '@/components/RNModal';
// import { getRegistrationFormConfig, getRegistrationInitialValues } from '@/config/formConfigs'; // Removed
// import { CustomValidators } from '@/utils/validators'; // Added in previous step but need to ensure it's not duplicated or missing

import { CustomValidators } from '@/utils/validators';

const SportsPage: React.FC = () => {
  const sportsPrograms = [
    {
      title: 'Cricket Academy',
      description: 'Professional cricket training for aspiring young cricketers.',
      icon: '🏏',
    },
    {
      title: 'Football Training',
      description: 'Developing football skills and teamwork among youth.',
      icon: '⚽',
    },
    {
      title: 'Athletics Program',
      description: 'Track and field events training for athletic excellence.',
      icon: '🏃',
    },
    {
      title: 'Indoor Sports',
      description: 'Badminton, table tennis, and other indoor sports facilities.',
      icon: '🏸',
    },
  ];

  const achievements = [
    'State Level Champions - 2024',
    'National Sports Meet Participation',
    '15+ Professional Athletes Trained',
    'Community Sports Events Organized',
  ];

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<'dropdown' | 'fixed'>('fixed');
  const [selectedProgram, setSelectedProgram] = useState(sportsPrograms[0].title);

  const getFormFields = () => {
    const fields: any[] = [];

    if (mode === 'dropdown') {
      fields.push({
        fieldType: 'FNSelect',
        name: 'program',
        label: 'Program',
        options: sportsPrograms.map((p) => ({ label: p.title, value: p.title })),
        validators: [CustomValidators.required],
        className: 'w-full',
      });
    } else {
      fields.push({
        fieldType: 'FNInput',
        name: 'program',
        label: 'Program',
        type: 'text',
        defaultValue: selectedProgram,
        className: 'w-full opacity-70 pointer-events-none',
      });
    }

    fields.push(
      {
        fieldType: 'FNInput',
        name: 'name',
        label: 'Name',
        type: 'text',
        validators: [
          CustomValidators.required,
          { type: 'minLength', min: 3, message: 'Name must be at least 3 chars' },
        ],
      },
      {
        fieldType: 'FNInput',
        name: 'address',
        label: 'Address',
        type: 'text',
        validators: [CustomValidators.required],
      },
      {
        fieldType: 'FNInput',
        name: 'education',
        label: 'Education Details',
        type: 'text',
        validators: [CustomValidators.required],
      },
      {
        fieldType: 'FNInput',
        name: 'email',
        label: 'Email',
        type: 'email',
        validators: [CustomValidators.required, CustomValidators.email],
      },
      {
        fieldType: 'FNInput',
        name: 'phone',
        label: 'Phone',
        type: 'text',
        validators: [
          CustomValidators.required,
          { type: 'pattern', pattern: '^[0-9]{10}$', message: 'Phone must be 10 digits' },
        ],
      }
    );

    // Purpose
    fields.push({
      fieldType: 'FNSelect',
      name: 'purpose',
      label: 'Purpose',
      options: [
        { label: 'Indoor', value: 'Indoor' },
        { label: 'Outdoor', value: 'Outdoor' },
        { label: 'Summer Camp', value: 'Summer Camp' },
      ],
      validators: [CustomValidators.required],
    });

    // Certificate
    fields.push({
      fieldType: 'FNRadio',
      name: 'hasCertificate',
      label: 'Do you have any sports experience certificate?',
      options: [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
      ],
      validators: [CustomValidators.required],
    });

    fields.push({
      fieldType: 'FNInput',
      name: 'certificateFile',
      label: 'Upload Certificate',
      type: 'file',
    });

    return fields;
  };

  const initialValues = {
    program: mode === 'dropdown' ? sportsPrograms[0]?.title || '' : selectedProgram,
    name: '',
    address: '',
    education: '',
    email: '',
    phone: '',
    purpose: 'Indoor',
    hasCertificate: '',
    certificateFile: '',
  };

  // ui
  return (
    <RNContainer className="!mx-0">
      <div className="max-w-7xl px-4 py-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - list of all sport programs with selection */}
          <div className="col-span-12 md:col-span-3 bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-6 text-center text-[var(--RN-Blue-90)]">
              Programs
            </h2>

            <ul className="space-y-3">
              {sportsPrograms.map((program) => {
                const isSelected = selectedProgram === program.title;

                return (
                  <li
                    key={program.title}
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedProgram(program.title)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setSelectedProgram(program.title);
                      }
                    }}
                    className={`cursor-pointer rounded-lg p-3 transition-colors ${
                      isSelected
                        ? 'bg-[var(--RN-Blue-80)] text-white font-semibold shadow'
                        : 'hover:bg-[var(--RN-Blue-10)] text-[var(--RN-Blue-90)]'
                    }`}
                  >
                    {program.title}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Column */}
          <div className="col-span-12 md:col-span-9">
            {/* Header */}
            <div className="text-center mb-12">
              <RNLabel
                variant="h1Bold"
                label="Sports & Athletics"
                className="text-[var(--RN-Blue-90)] mb-4"
              />
              <div>
                <RNLabel
                  variant="p1"
                  label="Building champions through sports and nurturing talent for a healthier future"
                  className="text-[var(--RN-Base-80)] max-w-3xl mx-auto"
                />
              </div>
            </div>

            {/* Apply Button */}
            <div className="mb-12 text-center">
              <RNButton
                variant="solid"
                size="lg"
                color="primary"
                onClick={() => {
                  setMode('fixed');
                  setOpen(true);
                }}
              >
                <RNLabel variant="interactionLarge" label={`Apply for ${selectedProgram}`} />
              </RNButton>
            </div>

            {/* Achievements */}
            <div className="bg-[var(--RN-Blue-10)] rounded-[18px] p-8 mb-12">
              <RNLabel
                variant="h2Bold"
                label="Our Achievements"
                className="text-center mb-8 text-[var(--RN-Blue-90)]"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <span className="text-2xl">🏆</span>
                    <RNLabel
                      variant="p1"
                      label={achievement}
                      className="text-[var(--RN-Base-80)]"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div className="mb-12">
              <RNLabel
                variant="h2Bold"
                label="World-Class Facilities"
                className="text-center mb-8 text-[var(--RN-Blue-90)]"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <RNCard className="p-6">
                  <RNLabel
                    variant="h3Bold"
                    label="Training Grounds"
                    className="mb-3 text-[var(--RN-Blue-80)]"
                  />
                  <RNLabel
                    variant="p2"
                    label="Well-maintained outdoor fields for cricket, football, and athletics."
                    className="text-[var(--RN-Base-70)]"
                  />
                </RNCard>

                <RNCard className="p-6">
                  <RNLabel
                    variant="h3Bold"
                    label="Indoor Complex"
                    className="mb-3 text-[var(--RN-Blue-80)]"
                  />
                  <RNLabel
                    variant="p2"
                    label="Modern indoor facilities for badminton, table tennis, and chess."
                    className="text-[var(--RN-Base-70)]"
                  />
                </RNCard>

                <RNCard className="p-6">
                  <RNLabel
                    variant="h3Bold"
                    label="Fitness Center"
                    className="mb-3 text-[var(--RN-Blue-80)]"
                  />
                  <RNLabel
                    variant="p2"
                    label="Fully equipped gymnasium with professional trainers."
                    className="text-[var(--RN-Base-70)]"
                  />
                </RNCard>
              </div>
            </div>

            {/* Call to Action*/}
            <div className="text-center">
              <RNLabel
                variant="h3Bold"
                label="Join Our Sports Programs"
                className="mb-1 text-[var(--RN-Blue-90)]"
              />
              <div>
                <RNLabel
                  variant="p1"
                  label="Register now and be part of our sporting excellence"
                  className="mb-6 text-[var(--RN-Base-70)]"
                />
              </div>

              <div className="flex gap-4 justify-center">
                <RNButton
                  variant="solid"
                  size="lg"
                  onClick={() => {
                    setMode('dropdown');
                    setOpen(true);
                  }}
                >
                  <RNLabel variant="p1Bold" label="Register Now" />
                </RNButton>

                <RNButton variant="outline" size="lg">
                  <RNLabel variant="p1Bold" label="View Schedule" />
                </RNButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RNModal open={open} onClose={() => setOpen(false)} title="Registration Form" size="lg">
        <div className="bg-[var(--RN-Blue-10)] rounded-lg p-6">
          <RNDynamicForm
            fields={getFormFields()}
            initialValues={initialValues}
            onSubmit={(values) => {
              console.log('SPORTS REGISTRATION SUBMITTED', values);
              alert('Registration submitted successfully');
              setOpen(false);
            }}
            onCancel={() => setOpen(false)}
            submitLabel="Submit"
          />
        </div>
      </RNModal>
    </RNContainer>
  );
};

export default SportsPage;
