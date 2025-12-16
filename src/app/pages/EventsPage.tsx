import { RNButton } from '@/components/RNButton';
import { RNCard } from '@/components/RNCard';
import { RNContainer } from '@/components/RNContainer';
import { RNLabel } from '@/components/RNLabel';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventsPage: React.FC = () => {
  const navigate = useNavigate();

  const upcomingEvents = [
    {
      title: 'Cultural Festival',
      date: 'January 10, 2026',
      location: 'Community Center',
      description: 'Celebrating diversity through music, dance, and art.',
      status: 'Coming Soon',
    },
    {
      title: 'Skill Development Workshop',
      date: 'December 20, 2025',
      location: 'Training Center',
      description: 'Free workshop on digital skills and entrepreneurship.',
      status: 'Registration Open',
    },
  ];

  const pastEvents = [
    {
      title: 'Blood Donation Camp',
      date: 'September 5, 2025',
      location: 'City Hospital',
      description: 'Collected 300+ units of blood for emergency needs.',
      attendees: '300+ Donors',
    },
    {
      title: 'Tree Plantation Drive',
      date: 'August 20, 2025',
      location: 'Community Parks',
      description: 'Planted 1000+ saplings across the city.',
      attendees: '200+ Volunteers',
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
              label="Events & Activities"
              className="text-[var(--RN-Blue-90)]"
            />
          </div>
          <div>
            <RNLabel
              variant="p1"
              label="Join us in making a difference through our community events and programs"
              className="text-[var(--RN-Base-80)] max-w-3xl mx-auto"
            />
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="mb-12">
          <RNLabel
            variant="h2Bold"
            label="Upcoming Events"
            className="mb-6 text-[var(--RN-Blue-90)]"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <RNCard key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <RNLabel
                    variant="h3Bold"
                    label={event.title}
                    className="text-[var(--RN-Blue-80)]"
                  />
                  <span className="text-xs px-2 py-1 bg-[var(--RN-Blue-10)] text-[var(--RN-Blue-80)] rounded-full text-center">
                    {event.status}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📅</span>
                    <RNLabel variant="p2" label={event.date} className="text-[var(--RN-Base-70)]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📍</span>
                    <RNLabel
                      variant="p2"
                      label={event.location}
                      className="text-[var(--RN-Base-70)]"
                    />
                  </div>
                </div>
                <RNLabel
                  variant="p2"
                  label={event.description}
                  className="text-[var(--RN-Base-70)] mb-4"
                />
                <RNButton variant="solid" size="sm" className="w-full">
                  <RNLabel variant="p2Bold" label="Register Now" />
                </RNButton>
              </RNCard>
            ))}
          </div>
        </div>

        {/* Past Events Section */}
        <div className="mb-12">
          <RNLabel variant="h2Bold" label="Past Events" className="mb-6 text-[var(--RN-Blue-90)]" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <RNCard key={index} className="p-6 bg-[var(--RN-Base-5)]">
                <RNLabel
                  variant="h3Bold"
                  label={event.title}
                  className="mb-3 text-[var(--RN-Blue-80)]"
                />
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📅</span>
                    <RNLabel variant="p2" label={event.date} className="text-[var(--RN-Base-70)]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📍</span>
                    <RNLabel
                      variant="p2"
                      label={event.location}
                      className="text-[var(--RN-Base-70)]"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">👥</span>
                    <RNLabel
                      variant="p2"
                      label={event.attendees}
                      className="text-[var(--RN-Base-70)]"
                    />
                  </div>
                </div>
                <RNLabel
                  variant="p2"
                  label={event.description}
                  className="text-[var(--RN-Base-70)]"
                />
              </RNCard>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[var(--RN-Blue-10)] rounded-[18px] p-8 text-center">
          <RNLabel
            variant="h2Bold"
            label="Want to Organize an Event?"
            className="mb-1 text-[var(--RN-Blue-90)]"
          />
          <br />
          <RNLabel
            variant="p1"
            label="Partner with us to create meaningful community events that make a real impact"
            className="mb-2 text-[var(--RN-Base-70)]"
          />
          <br />
          <RNButton variant="solid" size="lg" onClick={() => navigate('/contact')}>
            <RNLabel variant="p1Bold" label="Contact Us" />
          </RNButton>
        </div>
      </div>
    </RNContainer>
  );
};

export default EventsPage;
