import { RNNavbar } from '@/components/RNNavbar';
import { RNContainer } from '@/components/RNContainer';
import { RNFooter } from '@/components/RNFooter';
import { RNCard } from '@/components/RNCard';
import { Eye, Target, Heart, Lightbulb } from 'lucide-react';

export function VisionMission() {
  return (
    <div className="min-h-screen bg-[var(--RN-Base-0)]">
      <RNNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--RN-Blue-100)] to-[var(--RN-Purple-100)] text-white py-16">
        <RNContainer>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Vision & Mission</h1>
            <p className="text-lg text-white/90">
              Our commitment to technological excellence and innovation
            </p>
          </div>
        </RNContainer>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <RNContainer>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            <RNCard variant="elevated" padding="xl">
              <Eye className="w-16 h-16 text-[var(--RN-Blue-100)] mb-6" />
              <h2 className="text-3xl font-bold mb-6 text-[var(--RN-Base-100)]">Our Vision</h2>
              <p className="text-lg text-[var(--RN-Base-70)] leading-relaxed">
                To be a globally recognized technology partner, driving digital transformation through 
                innovative solutions and cutting-edge expertise. We envision a future where businesses 
                thrive with our technology solutions, creating lasting value and competitive advantages 
                in the digital landscape.
              </p>
            </RNCard>
            
            <RNCard variant="elevated" padding="xl">
              <Target className="w-16 h-16 text-[var(--RN-Green-100)] mb-6" />
              <h2 className="text-3xl font-bold mb-6 text-[var(--RN-Base-100)]">Our Mission</h2>
              <p className="text-lg text-[var(--RN-Base-70)] leading-relaxed">
                To deliver exceptional software solutions that drive business growth and digital 
                transformation. We empower organizations through innovative web and mobile applications, 
                cloud solutions, and expert consulting services. Our commitment to quality, agility, 
                and customer success defines everything we do.
              </p>
            </RNCard>
          </div>

          {/* Core Values */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[var(--RN-Base-100)]">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <RNCard padding="lg">
                <Heart className="w-10 h-10 text-[var(--RN-Red-100)] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-[var(--RN-Base-100)]">
                  Customer First
                </h3>
                <p className="text-[var(--RN-Base-60)]">
                  Putting client success and satisfaction at the heart of everything we do.
                </p>
              </RNCard>

              <RNCard padding="lg">
                <Lightbulb className="w-10 h-10 text-[var(--RN-Yellow-100)] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-[var(--RN-Base-100)]">
                  Excellence
                </h3>
                <p className="text-[var(--RN-Base-60)]">
                  Striving for the highest standards in all our programs and initiatives.
                </p>
              </RNCard>

              <RNCard padding="lg">
                <Target className="w-10 h-10 text-[var(--RN-Blue-100)] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-[var(--RN-Base-100)]">
                  Integrity
                </h3>
                <p className="text-[var(--RN-Base-60)]">
                  Operating with transparency, honesty, and ethical principles in all endeavors.
                </p>
              </RNCard>
            </div>
          </div>
        </RNContainer>
      </section>

      {/* Goals Section */}
      <section className="py-16 bg-[var(--RN-Base-10)]">
        <RNContainer>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-[var(--RN-Base-100)]">
              Our Goals
            </h2>
            <RNCard padding="xl">
              <ul className="space-y-4 text-[var(--RN-Base-70)]">
                <li className="flex gap-3">
                  <span className="text-[var(--RN-Blue-100)] font-bold">•</span>
                  <span>Expand our service offerings to include emerging technologies like AI and blockchain</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--RN-Blue-100)] font-bold">•</span>
                  <span>Build a world-class development center with cutting-edge infrastructure</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--RN-Blue-100)] font-bold">•</span>
                  <span>Strengthen partnerships with leading technology companies and startups</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--RN-Blue-100)] font-bold">•</span>
                  <span>Deliver innovative solutions that drive digital transformation for businesses globally</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--RN-Blue-100)] font-bold">•</span>
                  <span>Foster a culture of continuous learning and professional development for our team</span>
                </li>
              </ul>
            </RNCard>
          </div>
        </RNContainer>
      </section>

      <RNFooter />
    </div>
  );
}
