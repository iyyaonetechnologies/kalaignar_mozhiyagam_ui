import { RNBadge } from '@/components/RNBadge';
import { RNButton } from '@/components/RNButton';
import { RNCard } from '@/components/RNCard';
import { RNContainer } from '@/components/RNContainer';
import { useNavigate } from 'react-router-dom';

const trustBoard = [
  {
    name: 'V Jayabalan',
    position: 'Chairman & Founder',
    experience: '30+ years in Social Service',
    description: 'Greatest Politician',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
];

const milestones = [
  {
    year: '2009',
    event: 'Trust Established',
    description: 'Kalaignar Mozhiyagam Trust founded with mission to preserve Tamil heritage',
  },
  {
    year: '2012',
    event: 'First Educational Program',
    description: 'Launched scholarship program for underprivileged students',
  },
  {
    year: '2015',
    event: 'Healthcare Initiative',
    description: 'Started mobile medical camps in rural areas',
  },
  {
    year: '2018',
    event: 'Digital Library',
    description: 'Established digital archive of Tamil literature',
  },
  {
    year: '2020',
    event: 'COVID Relief',
    description: 'Provided emergency support during pandemic',
  },
  { year: '2023', event: 'Cultural Center', description: 'Opened Tamil Cultural Heritage Center' },
];

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <RNContainer className="py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[var(--RN-Blue-100)] mb-4">
          About Kalaignar Mozhiyagam Trust
        </h1>
        <p className="text-xl text-[var(--RN-Base-70)] max-w-3xl mx-auto leading-relaxed">
          Dedicated to preserving Tamil language, culture, and heritage while empowering communities
          through education, healthcare, and social development since 2009.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <RNCard className="p-8 border-l-4 border-[var(--RN-Blue-100)]">
            <h2 className="text-2xl font-bold text-[var(--RN-Blue-100)] mb-4">Our Mission</h2>
            <p className="text-[var(--RN-Base-70)] leading-relaxed">
              To preserve and promote Tamil language, literature, and culture while empowering
              communities through comprehensive social development programs that create lasting
              positive impact in education, healthcare, and community welfare.
            </p>
          </RNCard>
          <RNCard className="p-8 border-l-4 border-[var(--RN-Green-100)]">
            <h2 className="text-2xl font-bold text-[var(--RN-Green-100)] mb-4">Our Vision</h2>
            <p className="text-[var(--RN-Base-70)] leading-relaxed">
              A society where Tamil heritage thrives alongside modern development, creating
              opportunities for education, healthcare, and cultural expression for all, ensuring no
              one is left behind in our journey toward progress.
            </p>
          </RNCard>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--RN-Base-90)] text-center mb-8">
          Leadership Team
        </h2>
        <div className="flex justify-center">
          {trustBoard.map((member, index) => (
            <RNCard key={index} className="p-6 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-[var(--RN-Base-90)] mb-2">{member.name}</h3>
              <RNBadge variant="primary" className="mb-3">
                {member.position}
              </RNBadge>
              <p className="text-sm text-[var(--RN-Orange-100)] font-medium mb-3">
                {member.experience}
              </p>
              <p className="text-sm text-[var(--RN-Base-70)]">{member.description}</p>
            </RNCard>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--RN-Base-90)] text-center mb-8">
          Our Journey
        </h2>
        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[var(--RN-Blue-100)] text-white rounded-full flex items-center justify-center font-bold">
                  {milestone.year.slice(-2)}
                </div>
              </div>
              <RNCard className="flex-1 p-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <span className="text-lg font-semibold text-[var(--RN-Blue-100)]">
                    {milestone.year}
                  </span>
                  <RNBadge variant="success">{milestone.event}</RNBadge>
                </div>
                <p className="text-[var(--RN-Base-70)]">{milestone.description}</p>
              </RNCard>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="mb-12">
        <h2 className="text-3xl font-bold text-[var(--RN-Base-90)] text-center mb-8">
          Frequently Asked Questions
        </h2> */}
      {/* <RNAccordion
          items={[
            {
              title: 'How can I contribute to the trust?',
              content: (
                <div className="space-y-4">
                  <p className="text-[var(--RN-Base-70)]">
                    There are several ways to contribute to Kalaignar Mozhiyagam Trust:
                  </p>
                  <ul className="list-disc pl-6 text-[var(--RN-Base-70)] space-y-2">
                    <li>
                      <strong>Financial Donations:</strong> One-time or recurring donations to
                      support our programs
                    </li>
                    <li>
                      <strong>Volunteer Services:</strong> Share your skills and time with our
                      community initiatives
                    </li>
                    <li>
                      <strong>Corporate Partnerships:</strong> Collaborate with us on community
                      development projects
                    </li>
                    <li>
                      <strong>In-kind Donations:</strong> Educational materials, medical supplies,
                      or equipment
                    </li>
                  </ul>
                  <div className="flex gap-3 mt-4">
                    <RNButton variant="solid" size="sm" className="bg-[var(--RN-Blue-100)]">
                      Donate Now
                    </RNButton>
                    <RNButton
                      variant="outline"
                      size="sm"
                      className="border-[var(--RN-Green-100)] text-[var(--RN-Green-100)]"
                    >
                      Volunteer
                    </RNButton>
                  </div>
                </div>
              ),
            },
            {
              title: 'What programs does the trust currently run?',
              content: (
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-[var(--RN-Blue-100)] mb-2">
                        Education Programs
                      </h4>
                      <ul className="list-disc pl-6 text-[var(--RN-Base-70)] text-sm space-y-1">
                        <li>Scholarship programs</li>
                        <li>Tamil language courses</li>
                        <li>Digital literacy training</li>
                        <li>Vocational skill development</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--RN-Green-100)] mb-2">
                        Healthcare Initiatives
                      </h4>
                      <ul className="list-disc pl-6 text-[var(--RN-Base-70)] text-sm space-y-1">
                        <li>Mobile medical camps</li>
                        <li>Health awareness programs</li>
                        <li>Mental health support</li>
                        <li>Emergency medical assistance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              title: 'How do I apply for assistance from the trust?',
              content: (
                <div className="space-y-4">
                  <p className="text-[var(--RN-Base-70)]">
                    To apply for assistance from our trust, follow these steps:
                  </p>
                  <ol className="list-decimal pl-6 text-[var(--RN-Base-70)] space-y-2">
                    <li>Review our current programs and eligibility criteria</li>
                    <li>Complete the online application form or visit our office</li>
                    <li>Submit required documents and verification materials</li>
                    <li>Attend the interview process if shortlisted</li>
                    <li>Receive notification of application status within 30 days</li>
                  </ol>
                  <RNButton variant="solid" size="sm" className="bg-[var(--RN-Orange-100)] mt-4">
                    Start Application
                  </RNButton>
                </div>
              ),
            },
          ]}
        /> */}
      {/* </section> */}

      {/* Contact Section */}
      <section className="bg-[var(--RN-Blue-10)] rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-[var(--RN-Blue-100)] mb-4">Get in Touch</h2>
        <p className="text-[var(--RN-Base-70)] mb-6 max-w-2xl mx-auto">
          Have questions about our programs or want to learn more about how you can contribute? We'd
          love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <RNButton
            variant="solid"
            size="lg"
            className="bg-[var(--RN-Blue-100)] hover:bg-[var(--RN-Blue-200)]"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </RNButton>
          <RNButton
            variant="outline"
            size="lg"
            className="border-[var(--RN-Blue-100)] text-[var(--RN-Blue-100)]"
          >
            Visit Our Office
          </RNButton>
        </div>
      </section>
    </RNContainer>
  );
}
