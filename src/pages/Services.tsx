import { RNNavbar } from '@/components/RNNavbar';
import { RNContainer } from '@/components/RNContainer';
import { RNFooter } from '@/components/RNFooter';
import { RNCard } from '@/components/RNCard';
import { RNButton } from '@/components/RNButton';
import { Code, Smartphone, Cloud, Database, Settings, Zap } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Custom web applications built with React, Next.js, Node.js, and modern frameworks.',
      features: ['Responsive Design', 'Progressive Web Apps', 'E-commerce Solutions', 'CMS Development'],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.',
      features: ['iOS & Android Apps', 'Cross-platform Solutions', 'UI/UX Design', 'App Store Deployment'],
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment using AWS, Azure, and Google Cloud.',
      features: ['Cloud Migration', 'DevOps & CI/CD', 'Infrastructure as Code', 'Serverless Architecture'],
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'Backend Development',
      description: 'Robust APIs and server-side solutions with Node.js, Python, and microservices architecture.',
      features: ['RESTful APIs', 'GraphQL', 'Database Design', 'Microservices'],
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: 'Custom Software',
      description: 'Tailored enterprise solutions designed to meet your specific business requirements.',
      features: ['Business Automation', 'ERP Systems', 'CRM Solutions', 'Workflow Management'],
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Consulting & Strategy',
      description: 'Technology consulting and digital transformation strategy for your business.',
      features: ['Tech Stack Selection', 'Architecture Design', 'Code Review', 'Performance Optimization'],
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--RN-Base-0)]">
      <RNNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--RN-Blue-100)] to-[var(--RN-Purple-100)] text-white py-16">
        <RNContainer>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-white/90">
              Comprehensive technology solutions tailored to drive your business forward
            </p>
          </div>
        </RNContainer>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <RNContainer>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <RNCard key={idx} variant="elevated" padding="lg" hoverable>
                <div className="text-[var(--RN-Blue-100)] mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[var(--RN-Base-100)]">
                  {service.title}
                </h3>
                <p className="text-[var(--RN-Base-60)] mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-sm text-[var(--RN-Base-70)] flex items-center gap-2">
                      <span className="text-[var(--RN-Green-100)]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-[var(--RN-Base-60)] mb-6">
              Let's discuss how we can help transform your business with technology.
            </p>
            <RNButton size="lg">Get in Touch</RNButton>
          </div>
        </RNContainer>
      </section>

      <RNFooter />
    </div>
  );
}
