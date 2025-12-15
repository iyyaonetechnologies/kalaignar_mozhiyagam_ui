import { RNNavbar } from '@/components/RNNavbar';
import { RNContainer } from '@/components/RNContainer';
import { RNFooter } from '@/components/RNFooter';
import { RNCard } from '@/components/RNCard';
import { BookOpen, GraduationCap, Award, Users } from 'lucide-react';

export function Education() {
  const programs = [
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: 'Web Development Training',
      description: 'Comprehensive courses in modern web technologies including React, Node.js, and more.',
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: 'Mobile App Development',
      description: 'Learn to build native and cross-platform mobile applications for iOS and Android.',
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Cloud & DevOps',
      description: 'Master cloud platforms, CI/CD pipelines, and modern deployment practices.',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Mentorship Programs',
      description: 'One-on-one guidance from industry experts to accelerate your tech career.',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--RN-Base-0)]">
      <RNNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--RN-Green-100)] to-[var(--RN-Green-200)] text-white py-16">
        <RNContainer>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Training & Development</h1>
            <p className="text-lg text-white/90">
              Empowering developers through quality training and skill development programs
            </p>
          </div>
        </RNContainer>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <RNContainer>
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--RN-Base-100)]">
            Our Training Programs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, idx) => (
              <RNCard key={idx} variant="elevated" padding="lg" hoverable>
                <div className="text-[var(--RN-Green-100)] mb-4">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--RN-Base-100)]">
                  {program.title}
                </h3>
                <p className="text-[var(--RN-Base-60)]">{program.description}</p>
              </RNCard>
            ))}
          </div>
        </RNContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--RN-Base-10)]">
        <RNContainer>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-[var(--RN-Base-100)]">
              Interested in Our Programs?
            </h2>
            <p className="text-lg text-[var(--RN-Base-60)] mb-6">
              Contact us to learn more about enrollment and upcoming courses.
            </p>
          </div>
        </RNContainer>
      </section>

      <RNFooter />
    </div>
  );
}
