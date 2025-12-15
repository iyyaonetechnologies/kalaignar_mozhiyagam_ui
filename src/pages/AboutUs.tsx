import { RNNavbar } from '@/components/RNNavbar';
import { RNContainer } from '@/components/RNContainer';
import { RNFooter } from '@/components/RNFooter';
import { RNCard } from '@/components/RNCard';
import { RNImage } from '@/components/RNImage';
import { Target, Heart } from 'lucide-react';

export function AboutUs() {
  const teamMembers = [
    {
      name: 'Mia Ward',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
    },
    {
      name: 'Phoenix Baker',
      role: 'Head of Engineering',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=400',
    },
    {
      name: 'Lana Steiner',
      role: 'Chief Operating Officer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--RN-Base-0)]">
      <RNNavbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--RN-Blue-100)] to-[var(--RN-Blue-200)] text-white py-16">
        <RNContainer>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-white/90">
              Empowering businesses through innovative technology solutions
            </p>
          </div>
        </RNContainer>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <RNContainer>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <RNCard variant="elevated" padding="lg">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-12 h-12 text-[var(--RN-Blue-100)]" />

                <h2 className="flex-1 text-2xl font-bold text-[var(--RN-Base-100)] text-center">
                  Our Mission
                </h2>
              </div>

              <p className="text-[var(--RN-Base-60)]">
                To provide high-quality, cost-effective, and timely IT services
                that meet client expectations To leverage emerging technologies
                to build secure, scalable, and user-friendly solutions.
              </p>
            </RNCard>

            <RNCard variant="elevated" padding="lg">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-12 h-12 text-[var(--RN-Red-100)] mb-4" />

                <h2 className="flex-1 text-2xl font-bold mb-4 text-[var(--RN-Base-100)] text-center">
                  Our Vision
                </h2>
              </div>
              <p className="text-[var(--RN-Base-60)]">
                To become a globally trusted technology partner by delivering
                innovative, scalable, and intelligent IT solutions that
                transform businesses and create a smarter digital future.
              </p>
            </RNCard>
          </div>


        </RNContainer>
      </section>

      {/* Team Section */}
      <section className="bg-[var(--RN-Base-10)] py-16">
        <RNContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--RN-Base-100)] mb-4">
              Meet Our Team
            </h2>
            <p className="text-[var(--RN-Base-60)] max-w-2xl mx-auto">
              Our diverse team of experts is dedicated to delivering excellence and innovation in every project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="flex justify-center">
                <RNCard variant="elevated" padding="lg" className="w-full max-w-sm text-center transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--RN-Blue-100)] to-[var(--RN-Blue-200)] rounded-full opacity-20 transform scale-110"></div>
                      <RNImage
                        src={member.image}
                        alt={member.name}
                        className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--RN-Base-100)] mb-2">
                    {member.name}
                  </h3>
                  <p className="font-medium text-[var(--RN-Blue-100)] italic">
                    {member.role}
                  </p>
                </RNCard>
              </div>
            ))}
          </div>
        </RNContainer>
      </section>

      {/* About Content */}
      <div className="max-w-4xl mx-auto mt-8">
        <RNCard padding="xl">
          <h2 className="text-3xl font-bold mb-6 text-[var(--RN-Base-100)]">
            IyyaOne Technologies
          </h2>
          <div className="space-y-4 text-[var(--RN-Base-70)]">
            <p>
              To promote a culture of innovation, continuous learning, and
              excellence within our team.
            </p>
            <p>
              To deliver value-driven digital solutions that enhance
              productivity and business performance.
            </p>
            <p>
              To build long-term relationships with clients through
              transparency, trust, and commitment.
            </p>
          </div>
        </RNCard>
      </div>



      <RNFooter />
    </div>
  );
}
