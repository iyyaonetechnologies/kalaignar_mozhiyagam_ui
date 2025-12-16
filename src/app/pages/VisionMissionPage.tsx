import React from 'react';
import { RNLabel } from '@/components/RNLabel';
import { RNCard } from '@/components/RNCard';
import { RNContainer } from '@/components/RNContainer';

const VisionMissionPage: React.FC = () => {
  const objectives = [
    'Provide quality education to underprivileged children',
    'Empower women through skill development and entrepreneurship',
    'Ensure access to healthcare for marginalized communities',
    'Support disaster relief and rehabilitation efforts',
    'Promote environmental conservation and sustainability',
    'Create livelihood opportunities for youth',
    'Advocate for social justice and human rights',
    'Foster community development through collaborative initiatives',
  ];

  return (
    <RNContainer>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <RNLabel
              variant="h1Bold"
              label="Vision & Mission"
              className="text-[var(--RN-Blue-90)]"
            />
          </div>
          <div>
            <RNLabel
              variant="p1"
              label="Guiding principles that drive our commitment to social transformation"
              className="text-[var(--RN-Base-80)] max-w-3xl mx-auto"
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="mb-12">
          <RNCard className="p-8 bg-gradient-to-r from-[var(--RN-Blue-10)] to-[var(--RN-Blue-20)]">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-8xl flex-shrink-0">🎯</div>
              <div className="flex-1">
                <RNLabel
                  variant="h2Bold"
                  label="Our Vision"
                  className="mb-4 text-[var(--RN-Blue-90)]"
                />
                <RNLabel
                  variant="p1"
                  label="To create a compassionate and inclusive society where every individual has access to opportunities for growth, dignity, and prosperity. We envision a world where poverty, inequality, and social injustice are eliminated through collective effort and sustainable development."
                  className="text-[var(--RN-Base-80)] leading-relaxed"
                />
              </div>
            </div>
          </RNCard>
        </div>

        {/* Mission Section */}
        <div className="mb-12">
          <RNCard className="p-8 bg-gradient-to-r from-[var(--RN-Blue-20)] to-[var(--RN-Blue-10)]">
            <div className="flex flex-col md:flex-row-reverse items-center gap-6">
              <div className="text-8xl flex-shrink-0">🚀</div>
              <div className="flex-1">
                <RNLabel
                  variant="h2Bold"
                  label="Our Mission"
                  className="mb-4 text-[var(--RN-Blue-90)]"
                />
                <RNLabel
                  variant="p1"
                  label="To empower marginalized communities through education, healthcare, livelihood programs, and advocacy. We are committed to working with compassion, integrity, and excellence to create sustainable change that transforms lives and builds stronger, more resilient communities."
                  className="text-[var(--RN-Base-80)] leading-relaxed"
                />
              </div>
            </div>
          </RNCard>
        </div>

        {/* Strategic Objectives */}
        <div className="mb-12">
          <RNLabel
            variant="h2Bold"
            label="Strategic Objectives"
            className="text-center mb-8 text-[var(--RN-Blue-90)]"
          />
          <RNCard className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start gap-3 p-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--RN-Blue-80)] text-[var(--RN-Base-0)] flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <RNLabel
                    variant="p1"
                    label={objective}
                    className="text-[var(--RN-Base-80)] flex-1"
                  />
                </div>
              ))}
            </div>
          </RNCard>
        </div>

        {/* Impact Statement */}
        <div className="bg-[var(--RN-Blue-80)] text-[var(--RN-Base-0)] rounded-[18px] p-8 text-center">
          <RNLabel variant="h2Bold" label="Our Commitment" className="mb-4" />
          <RNLabel
            variant="p1"
            label="We are dedicated to making a lasting difference in the lives of those we serve. Through unwavering commitment, collaborative partnerships, and innovative solutions, we continue to work towards a more equitable and just society for all."
            className="max-w-4xl mx-auto leading-relaxed"
          />
        </div>
      </div>
    </RNContainer>
  );
};

export default VisionMissionPage;
