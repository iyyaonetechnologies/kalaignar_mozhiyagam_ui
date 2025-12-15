import { RNNavbar } from '@/components/RNNavbar';
import { RNContainer } from '@/components/RNContainer';
import { RNFooter } from '@/components/RNFooter';
import { RNCard } from '@/components/RNCard';
import { Calendar, Music, Users, Sparkles } from 'lucide-react';

export function Events() {
  const upcomingEvents = [
    {
      icon: <Music className="w-10 h-10" />,
      title: 'Tech Conference 2025',
      date: 'December 15, 2025',
      description: 'Annual technology conference featuring industry leaders and emerging trends.',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Developer Meetup',
      date: 'January 20, 2026',
      description: 'Networking event for developers to share knowledge and experiences.',
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: 'Product Launch Event',
      date: 'January 14, 2026',
      description: 'Unveiling our latest innovative solutions and product offerings.',
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: 'Technical Workshop',
      date: 'February 10, 2026',
      description: 'Hands-on sessions on cutting-edge technologies and best practices.',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--RN-Base-0)]">
      <RNNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--RN-Purple-100)] to-[var(--RN-Purple-200)] text-white py-16">
        <RNContainer>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
            <p className="text-lg text-white/90">
              Bringing the tech community together through knowledge sharing and innovation
            </p>
          </div>
        </RNContainer>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <RNContainer>
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--RN-Base-100)]">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, idx) => (
              <RNCard key={idx} variant="elevated" padding="lg" hoverable>
                <div className="flex gap-4">
                  <div className="text-[var(--RN-Purple-100)] flex-shrink-0">
                    {event.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[var(--RN-Base-100)]">
                      {event.title}
                    </h3>
                    <div className="text-sm text-[var(--RN-Blue-100)] font-semibold mb-2">
                      {event.date}
                    </div>
                    <p className="text-[var(--RN-Base-60)]">{event.description}</p>
                  </div>
                </div>
              </RNCard>
            ))}
          </div>
        </RNContainer>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-[var(--RN-Base-10)]">
        <RNContainer>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-[var(--RN-Base-100)]">
              Past Events
            </h2>
            <p className="text-lg text-[var(--RN-Base-60)]">
              Check out our gallery and highlights from previous events that fostered 
              collaboration and innovation in our tech community.
            </p>
          </div>
        </RNContainer>
      </section>

      <RNFooter />
    </div>
  );
}
