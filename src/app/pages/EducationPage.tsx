import { RNButton } from '@/components/RNButton';
import { RNContainer } from '@/components/RNContainer';
import { RNLabel } from '@/components/RNLabel';
import React, { useState } from 'react';
import RegistrationForm from '@/components/RegistrationForm';

const EducationPage: React.FC = () => {
  const educationPrograms = [
    {
      title: 'Scholarship Programs',
      description:
        'Providing financial assistance to underprivileged students for their education.',
      icon: '📚',
    },
    {
      title: 'Government Examination Training for Free',
      description: 'Building and renovating schools in rural and remote areas.',
      icon: '🏫',
    },
    {
      title: 'Digital Learning',
      description: 'Implementing technology-enabled learning solutions for better education.',
      icon: '💻',
    },
    {
      title: 'Vocational Training',
      description: 'Skill development programs for youth to enhance employability.',
      icon: '🔧',
    },
  ];

  const [selectedProgram, setSelectedProgram] = useState(educationPrograms[0].title);
  const [open, setOpen] = useState(false);

  return (
    <RNContainer className="!mx-0">
      <div className="max-w-7xl px-4 py-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - list of all education programs with selection */}
          <div className="col-span-12 md:col-span-3 bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-6 text-center text-[var(--RN-Blue-90)]">
              Programs
            </h2>
            <ul className="space-y-3">
              {educationPrograms.map((program) => {
                const isSelected = selectedProgram === program.title;
                return (
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                  <li
                    key={program.title}
                    className={`cursor-pointer rounded-lg p-3 transition-colors ${
                      isSelected
                        ? 'bg-[var(--RN-Blue-80)] text-white font-semibold shadow'
                        : 'hover:bg-[var(--RN-Blue-10)] text-[var(--RN-Blue-90)]'
                    }`}
                    onClick={() => setSelectedProgram(program.title)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') setSelectedProgram(program.title);
                    }}
                  >
                    {program.title}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Column */}
          <div className="col-span-12 md:col-span-9">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="mb-4">
                <RNLabel
                  variant="h1Bold"
                  label="Education Initiatives"
                  className="text-[var(--RN-Blue-90)]"
                />
              </div>
              <div>
                <RNLabel
                  variant="p1"
                  label="Empowering lives through quality education and skill development"
                  className="text-[var(--RN-Base-80)] max-w-3xl mx-auto"
                />
              </div>
            </div>

            {/* Display selected program title prominently */}
            <div className="mb-12 text-center">
              <RNButton variant="solid" size="lg" color="primary" onClick={() => setOpen(true)}>
                <RNLabel variant="interactionLarge" label={`Apply for ${selectedProgram}`} />
              </RNButton>
            </div>

            {/* Statistics Section */}
            <div className="bg-[var(--RN-Blue-10)] rounded-[18px] p-8 mb-12">
              <RNLabel
                variant="h2Bold"
                label="Our Impact"
                className="text-center mb-8 text-[var(--RN-Blue-90)]"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <RNLabel
                    variant="h1Bold"
                    label="5,000+"
                    className="text-[var(--RN-Blue-80)] mb-2"
                  />
                  <RNLabel
                    variant="p1"
                    label="Students Supported"
                    className="text-[var(--RN-Base-70)]"
                  />
                </div>
                <div>
                  <RNLabel variant="h1Bold" label="50+" className="text-[var(--RN-Blue-80)] mb-2" />
                  <RNLabel
                    variant="p1"
                    label="Schools Built"
                    className="text-[var(--RN-Base-70)]"
                  />
                </div>
                <div>
                  <RNLabel
                    variant="h1Bold"
                    label="2,000+"
                    className="text-[var(--RN-Blue-80)] mb-2"
                  />
                  <RNLabel
                    variant="p1"
                    label="Vocational Graduates"
                    className="text-[var(--RN-Base-70)]"
                  />
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <RNLabel
                variant="h3Bold"
                label="Support Education for All"
                className="mb-1 text-[var(--RN-Blue-90)]"
              />
              <br />
              <RNLabel
                variant="p1"
                label="Your contribution can change lives and build a brighter future"
                className="mb-6 text-[var(--RN-Base-70)]"
              />
              {/* <div className="flex gap-4 justify-center">
                <RNButton variant="solid" size="lg">
                  <RNLabel variant="p1Bold" label="Donate Now" />
                </RNButton>
                <RNButton variant="outline" size="lg">
                  <RNLabel variant="p1Bold" label="Volunteer" />
                </RNButton>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <RegistrationForm
        open={open}
        onClose={() => setOpen(false)}
        programMode="fixed"
        programValue={selectedProgram}
        showPurpose={false}
        showCertificate={false}
      />
    </RNContainer>
  );
};

export default EducationPage;
