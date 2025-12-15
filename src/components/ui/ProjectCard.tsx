import React from 'react';
import { RNLabel } from '@/components/RNLabel';
import { RNButton } from '@/components/RNButton';

export interface CardProps {
  imageSrc: string;
}

const ProjectCard: React.FC<CardProps> = ({ imageSrc }) => (
  <section className="bg-base-0 border-2 border-[var(--RN-Base-60)] rounded-lg shadow-lg p-8 max-w-md mx-auto relative overflow-hidden">
    {/* Decorative triangles */}
    <div className="absolute top-0 left-0 w-0 h-0 border-l-[70px] border-l-blue-60 border-t-[50px] border-t-transparent"></div>
    <div className="absolute top-0 right-0 w-0 h-0 border-r-[70px] border-r-blue-60 border-t-[50px] border-t-transparent"></div>
    {/* Profile image */}
    <div className="flex justify-center">
      <img
        src={imageSrc}
        alt="Educational Assistance children"
        className="w-32 h-32 rounded-full border-4 border-[var(--RN-Base-0)]  object-cover"
      />
    </div>
    {/* Title */}
    <header className="flex justify-center mt-4">
      <RNLabel variant="h2Bold">Educational Assistance</RNLabel>
    </header>
    {/* Description */}
    <div className="flex justify-center mt-2">
      <RNLabel variant="p2" className="text-center">
        MTCT tries to mobilize funds for their support. Join us in the journey of building a better
        nation by sponsoring school fees and donating for education. Join with us to help these
        children.
      </RNLabel>
    </div>
    {/* Call to Action */}
    <footer className="flex justify-center mt-6">
      <RNButton size="md" variant="solid">
        Read More
      </RNButton>
    </footer>
  </section>
);

export default ProjectCard;
