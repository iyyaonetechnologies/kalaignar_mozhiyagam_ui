import { RNNavbar } from '@/components/RNNavbar';
import { RNContainer } from '@/components/RNContainer';
import { RNFooter } from '@/components/RNFooter';
import { RNCard } from '@/components/RNCard';
import { Trophy, Target, Medal, Users } from 'lucide-react';

export function Sports() {
  const activities = [
    {
      icon: <Trophy className="w-10 h-10" />,
      title: 'Hackathons',
      description: 'Competitive coding events and innovation challenges for all skill levels.',
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: 'Tech Talks',
      description: 'Knowledge sharing sessions and discussions on emerging technologies.',
    },
    {
      icon: <Medal className="w-10 h-10" />,
      title: 'Team Building',
      description: 'Activities designed to strengthen collaboration and team spirit.',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Community Events',
      description: 'Social gatherings, outings, and recreational activities for the team.',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--RN-Base-0)]">
      <RNNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--RN-Orange-100)] to-[var(--RN-Orange-200)] text-white py-16">
        <RNContainer>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Team Activities</h1>
            <p className="text-lg text-white/90">
              Building strong teams through collaboration, innovation, and excellence
            </p>
          </div>
        </RNContainer>
      </section>

      {/* Activities Section */}
      <section className="py-16">
        <RNContainer>
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--RN-Base-100)]">
            Our Team Activities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, idx) => (
              <RNCard key={idx} variant="elevated" padding="lg" hoverable>
                <div className="text-[var(--RN-Orange-100)] mb-4">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--RN-Base-100)]">
                  {activity.title}
                </h3>
                <p className="text-[var(--RN-Base-60)]">{activity.description}</p>
              </RNCard>
            ))}
          </div>
        </RNContainer>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-[var(--RN-Base-10)]">
        <RNContainer>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[var(--RN-Base-100)]">
              Our Achievements
            </h2>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-[var(--RN-Orange-100)] mb-2">25+</div>
                <div className="text-sm text-[var(--RN-Base-60)]">Events Organized</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[var(--RN-Orange-100)] mb-2">100+</div>
                <div className="text-sm text-[var(--RN-Base-60)]">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[var(--RN-Orange-100)] mb-2">5+</div>
                <div className="text-sm text-[var(--RN-Base-60)]">Years of Excellence</div>
              </div>
            </div>
          </div>
        </RNContainer>
      </section>

      <RNFooter />
    </div>
  );
}
