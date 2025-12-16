import React from 'react';
import { RNLabel } from '@/components/RNLabel';
import { RNCard } from '@/components/RNCard';
import { RNButton } from '@/components/RNButton';
import { RNContainer } from '@/components/RNContainer';

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

  return (
    <RNContainer>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <RNLabel
              variant="h1Bold"
              label="Sports & Athletics"
              className="text-[var(--RN-Blue-90)]"
            />
          </div>
          <div>
            <RNLabel
              variant="p1"
              label="Building champions through sports and nurturing talent for a healthier future"
              className="text-[var(--RN-Base-80)] max-w-3xl mx-auto"
            />
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sportsPrograms.map((program, index) => (
            <RNCard key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">{program.icon}</div>
              <RNLabel
                variant="h3Bold"
                label={program.title}
                className="mb-3 text-[var(--RN-Blue-80)]"
              />
              <RNLabel
                variant="p2"
                label={program.description}
                className="text-[var(--RN-Base-70)]"
              />
            </RNCard>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-[var(--RN-Blue-10)] rounded-[18px] p-8 mb-12">
          <RNLabel
            variant="h2Bold"
            label="Our Achievements"
            className="text-center mb-8 text-[var(--RN-Blue-90)]"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-[var(--RN-Base-0)] rounded-lg"
              >
                <span className="text-2xl">🏆</span>
                <RNLabel variant="p1" label={achievement} className="text-[var(--RN-Base-80)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Facilities Section */}
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
                label="Well-maintained outdoor fields for various sports including cricket, football, and athletics."
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
                label="Modern indoor facilities for badminton, table tennis, chess, and other indoor games."
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
                label="Fully equipped gymnasium with professional trainers for strength and conditioning."
                className="text-[var(--RN-Base-70)]"
              />
            </RNCard>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <RNLabel
            variant="h3Bold"
            label="Join Our Sports Programs"
            className="mb-1 text-[var(--RN-Blue-90)]"
          />
          <br />
          <RNLabel
            variant="p1"
            label="Register now and be part of our sporting excellence"
            className="mb-6 text-[var(--RN-Base-70)]"
          />
          <div className="flex gap-4 justify-center">
            <RNButton variant="solid" size="lg">
              <RNLabel variant="p1Bold" label="Register Now" />
            </RNButton>
            <RNButton variant="outline" size="lg">
              <RNLabel variant="p1Bold" label="View Schedule" />
            </RNButton>
          </div>
        </div>
      </div>
    </RNContainer>
  );
};

export default SportsPage;
