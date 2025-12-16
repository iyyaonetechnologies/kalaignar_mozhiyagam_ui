import React from 'react';
import { RNLabel } from '@/components/RNLabel';
import { RNCard } from '@/components/RNCard';
import { RNContainer } from '@/components/RNContainer';

const AwardsPage: React.FC = () => {
  const awards = [
    {
      title: 'Excellence in Social Service',
      year: '2024',
      organization: 'National Charity Association',
      description:
        'Recognized for outstanding contribution to community welfare and social development.',
      icon: '🏆',
    },
    {
      title: 'Best NGO Award',
      year: '2023',
      organization: 'State Government',
      description: 'Awarded for exemplary work in education and women empowerment.',
      icon: '🥇',
    },
    {
      title: 'Humanitarian Service Award',
      year: '2023',
      organization: 'International Relief Foundation',
      description: 'Honored for disaster relief efforts and emergency response services.',
      icon: '🌟',
    },
    {
      title: 'Community Impact Award',
      year: '2022',
      organization: 'City Council',
      description: 'Recognized for transformative impact on local communities.',
      icon: '💫',
    },
    {
      title: 'Education Excellence',
      year: '2022',
      organization: 'Education Ministry',
      description: 'Awarded for innovative education programs benefiting underprivileged children.',
      icon: '📚',
    },
    {
      title: 'Volunteer Organization of the Year',
      year: '2021',
      organization: 'National Volunteer Council',
      description: 'Recognized for exceptional volunteer mobilization and management.',
      icon: '🤝',
    },
  ];

  const recognitions = [
    'Featured in National Media for Social Work',
    'Partnership with Government Initiatives',
    'ISO 9001:2015 Certified Organization',
    '80G and 12A Tax Exemption Status',
  ];

  const milestones = [
    {
      year: '2015',
      achievement: 'Foundation Established',
      description: 'Started with a vision to serve humanity',
    },
    {
      year: '2017',
      achievement: '1000+ Lives Impacted',
      description: 'Reached first major milestone in community service',
    },
    {
      year: '2019',
      achievement: 'First National Award',
      description: 'Recognized at national level for social work',
    },
    {
      year: '2022',
      achievement: '10,000+ Beneficiaries',
      description: 'Expanded reach to multiple states',
    },
    {
      year: '2024',
      achievement: 'International Recognition',
      description: 'Global acknowledgment for humanitarian efforts',
    },
  ];

  return (
    <RNContainer>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <RNLabel
              variant="h1Bold"
              label="Awards & Recognition"
              className="text-[var(--RN-Blue-90)]"
            />
          </div>
          <div>
            <RNLabel
              variant="p1"
              label="Our commitment to excellence has been recognized by various organizations"
              className="text-[var(--RN-Base-80)] max-w-3xl mx-auto"
            />
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {awards.map((award, index) => (
            <RNCard
              key={index}
              className="p-6 hover:shadow-xl transition-shadow flex flex-col items-center"
            >
              <div className="text-6xl text-center mb-4">{award.icon}</div>
              <RNLabel
                variant="h3Bold"
                label={award.title}
                className="mb-2 text-[var(--RN-Blue-80)] text-center"
              />
              <div className="flex justify-center items-center gap-2 mb-3">
                <span className="text-sm px-3 py-1 bg-[var(--RN-Blue-10)] text-[var(--RN-Blue-80)] rounded-full font-semibold">
                  {award.year}
                </span>
              </div>
              <RNLabel
                variant="p2Bold"
                label={award.organization}
                className="mb-3 text-[var(--RN-Blue-70)] text-center"
              />
              <RNLabel
                variant="p2"
                label={award.description}
                className="text-[var(--RN-Base-70)] text-center"
              />
            </RNCard>
          ))}
        </div>

        {/* Recognition Section */}
        <div className="bg-[var(--RN-Blue-10)] rounded-[18px] p-8 mb-12">
          <RNLabel
            variant="h2Bold"
            label="Other Recognitions"
            className="text-center mb-8 text-[var(--RN-Blue-90)]"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {recognitions.map((recognition, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-[var(--RN-Base-0)] rounded-lg"
              >
                <span className="text-2xl">✓</span>
                <RNLabel variant="p1" label={recognition} className="text-[var(--RN-Base-80)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="mb-12">
          <RNLabel
            variant="h2Bold"
            label="Our Journey"
            className="text-center mb-8 text-[var(--RN-Blue-90)]"
          />
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[var(--RN-Blue-20)] hidden lg:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-6 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <RNCard className="p-6 inline-block max-w-md">
                      <div className="flex items-center gap-4 mb-2">
                        <RNLabel
                          variant="h3Bold"
                          label={milestone.year}
                          className="text-[var(--RN-Blue-80)]"
                        />
                        <RNLabel
                          variant="p1Bold"
                          label={milestone.achievement}
                          className="text-[var(--RN-Blue-70)]"
                        />
                      </div>
                      <div className="mb-2" />
                      <RNLabel
                        variant="p2"
                        label={milestone.description}
                        className="text-[var(--RN-Base-70)]"
                      />
                    </RNCard>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[var(--RN-Blue-80)] border-4 border-[var(--RN-Base-0)] z-10 flex-shrink-0 hidden lg:flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[var(--RN-Base-0)]" />
                  </div>
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <RNLabel
            variant="h3Bold"
            label="Be Part of Our Success Story"
            className="mb-2 text-[var(--RN-Blue-90)]"
          />
          <br />
          <RNLabel
            variant="p1"
            label="Join us in creating more impact and achieving greater heights"
            className="mb-6 text-[var(--RN-Base-70)]"
          />
        </div>
      </div>
    </RNContainer>
  );
};

export default AwardsPage;
