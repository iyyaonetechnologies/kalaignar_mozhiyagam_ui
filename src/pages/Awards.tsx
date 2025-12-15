import { RNNavbar } from '@/components/RNNavbar';
import { RNContainer } from '@/components/RNContainer';
import { RNFooter } from '@/components/RNFooter';
import { RNCard } from '@/components/RNCard';
import { Award, Trophy, Star, Medal } from 'lucide-react';

export function Awards() {
  const recognitions = [
    {
      icon: <Trophy className="w-10 h-10" />,
      title: 'Innovation Excellence Award',
      year: '2024',
      description: 'Recognized for outstanding contribution to digital innovation and transformation.',
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Best Technology Solutions Provider',
      year: '2023',
      description: 'Awarded for delivering exceptional software solutions and client satisfaction.',
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: 'Top Employer Recognition',
      year: '2023',
      description: 'Honored for creating an outstanding workplace culture and employee development.',
    },
    {
      icon: <Medal className="w-10 h-10" />,
      title: 'Customer Success Award',
      year: '2022',
      description: 'Celebrated for exceptional customer service and project delivery excellence.',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--RN-Base-0)]">
      <RNNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--RN-Yellow-100)] to-[var(--RN-Orange-100)] text-white py-16">
        <RNContainer>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Awards & Recognition</h1>
            <p className="text-lg text-white/90">
              Celebrating excellence and innovation in technology solutions
            </p>
          </div>
        </RNContainer>
      </section>

      {/* Awards Section */}
      <section className="py-16">
        <RNContainer>
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--RN-Base-100)]">
            Our Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {recognitions.map((award, idx) => (
              <RNCard key={idx} variant="elevated" padding="lg" hoverable>
                <div className="flex gap-4">
                  <div className="text-[var(--RN-Yellow-100)] flex-shrink-0">
                    {award.icon}
                  </div>
                  <div>
                    <div className="text-sm text-[var(--RN-Blue-100)] font-semibold mb-1">
                      {award.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-[var(--RN-Base-100)]">
                      {award.title}
                    </h3>
                    <p className="text-[var(--RN-Base-60)]">{award.description}</p>
                  </div>
                </div>
              </RNCard>
            ))}
          </div>
        </RNContainer>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[var(--RN-Base-10)]">
        <RNContainer>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[var(--RN-Base-100)]">
              By The Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[var(--RN-Yellow-100)] mb-2">10+</div>
                <div className="text-sm text-[var(--RN-Base-60)]">Awards Won</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[var(--RN-Yellow-100)] mb-2">5+</div>
                <div className="text-sm text-[var(--RN-Base-60)]">Years of Excellence</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[var(--RN-Yellow-100)] mb-2">100+</div>
                <div className="text-sm text-[var(--RN-Base-60)]">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[var(--RN-Yellow-100)] mb-2">50+</div>
                <div className="text-sm text-[var(--RN-Base-60)]">Happy Clients</div>
              </div>
            </div>
          </div>
        </RNContainer>
      </section>

      <RNFooter />
    </div>
  );
}
