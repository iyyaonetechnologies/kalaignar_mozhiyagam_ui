import { RNNavbar } from '@/components/RNNavbar';
import { RNButton } from '@/components/RNButton';
import { RNCard } from '@/components/RNCard';
import { RNContainer } from '@/components/RNContainer';
import { RNFooter } from '@/components/RNFooter';
import { RNBadge } from '@/components/RNBadge';
import { RNLabel } from '@/components/RNLabel';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Shield, 
  Code, 
  Rocket, 
  Users, 
  Globe, 
  ArrowRight, 
  CheckCircle,
  Sparkles,
  TrendingUp,
  Target,
  Award
} from 'lucide-react';

export function Home() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Built with modern technology stack for optimal performance and speed.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee.',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Developer Friendly',
      description: 'Clean APIs and comprehensive documentation for seamless integration.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'Multi-language support with CDN for worldwide accessibility.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Collaboration',
      description: 'Built-in tools for seamless team communication and project management.',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Scalable Solution',
      description: 'Grows with your business from startup to enterprise scale.',
    },
  ];

  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
    { value: '150+', label: 'Countries' },
  ];

  const benefits = [
    'Advanced analytics and reporting',
    'Real-time collaboration tools',
    'Customizable workflows',
    'API access for integrations',
    'Priority customer support',
    'Regular feature updates',
  ];

  return (
    <div className="min-h-screen bg-[var(--RN-Base-0)]">
      {/* Navigation */}
      <RNNavbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--RN-Blue-100)] to-[var(--RN-Blue-200)] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <RNContainer className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex justify-center">
              <RNBadge variant="info" size="lg" rounded className="animate-pulse">
                <Sparkles className="w-4 h-4 mr-1" />
                Now Available
              </RNBadge>
            </div>
            
            <RNLabel variant="h1Bold">
              Build Amazing Things
              <br />
              <span className="text-[var(--RN-Light-Blue-80)]">Together</span>
            </RNLabel>
            
            <RNLabel variant="p1" className="text-white/90 max-w-2xl mx-auto">
              The all-in-one platform to transform your ideas into reality. 
              Powerful tools, seamless collaboration, and enterprise-grade security.
            </RNLabel>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <RNButton 
                size="lg" 
                variant="solid"
                className="bg-gradient-to-r from-[var(--RN-Green-100)] to-[var(--RN-Green-200)] text-white hover:from-[var(--RN-Green-200)] hover:to-[var(--RN-Green-300)] shadow-xl hover:shadow-2xl border-2 border-white/20"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Get Started Free
              </RNButton>
              <RNButton 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Watch Demo
              </RNButton>
            </div>

            <div className="pt-8 flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </RNContainer>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[var(--RN-Base-10)] border-y border-[var(--RN-Base-20)]">
        <RNContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <RNLabel variant="h2Bold" color="primary" className="mb-2">
                  {stat.value}
                </RNLabel>
                <RNLabel variant="p2" color="secondary">{stat.label}</RNLabel>
              </div>
            ))}
          </div>
        </RNContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28">
        <RNContainer>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <RNBadge variant="primary" size="lg" rounded className="mb-4">
              Features
            </RNBadge>
            <RNLabel variant="h2Bold" color="black" className="mb-4">
              Everything you need to succeed
            </RNLabel>
            <RNLabel variant="p1" color="secondary">
              Powerful features designed to help you work smarter, not harder.
            </RNLabel>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <RNCard 
                key={idx} 
                variant="default" 
                padding="lg"
                hoverable
                className="group"
              >
                <div className="text-[var(--RN-Blue-100)] mb-4 transform group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <RNLabel variant="h3Bold" color="black" className="mb-2">
                  {feature.title}
                </RNLabel>
                <RNLabel variant="p2" color="secondary">{feature.description}</RNLabel>
              </RNCard>
            ))}
          </div>
        </RNContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--RN-Blue-10)] to-[var(--RN-Light-Blue-10)]">
        <RNContainer>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <RNBadge variant="success" size="lg" rounded>
                <Target className="w-4 h-4 mr-1" />
                Why Choose Us
              </RNBadge>
              <RNLabel variant="h2Bold" color="black">
                Built for teams of all sizes
              </RNLabel>
              <RNLabel variant="p1" color="secondary">
                Whether you're a startup or an enterprise, our platform scales with your needs
                and provides the tools you need to succeed.
              </RNLabel>

              <div className="space-y-3 pt-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[var(--RN-Green-100)] flex-shrink-0 mt-0.5" />
                    <RNLabel variant="p1" color="black">{benefit}</RNLabel>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <RNButton size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Learn More
                </RNButton>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <RNCard variant="elevated" padding="lg" className="text-center">
                <TrendingUp className="w-12 h-12 text-[var(--RN-Green-100)] mx-auto mb-3" />
                <RNLabel variant="h2Bold" color="black" className="mb-1">200%</RNLabel>
                <RNLabel variant="p2" color="secondary">Growth Rate</RNLabel>
              </RNCard>
              
              <RNCard variant="elevated" padding="lg" className="text-center mt-8">
                <Award className="w-12 h-12 text-[var(--RN-Blue-100)] mx-auto mb-3" />
                <RNLabel variant="h2Bold" color="black" className="mb-1">15+</RNLabel>
                <RNLabel variant="p2" color="secondary">Awards Won</RNLabel>
              </RNCard>
              
              <RNCard variant="elevated" padding="lg" className="text-center -mt-8">
                <Users className="w-12 h-12 text-[var(--RN-Orange-100)] mx-auto mb-3" />
                <RNLabel variant="h2Bold" color="black" className="mb-1">50K+</RNLabel>
                <RNLabel variant="p2" color="secondary">Happy Clients</RNLabel>
              </RNCard>
              
              <RNCard variant="elevated" padding="lg" className="text-center">
                <Sparkles className="w-12 h-12 text-[var(--RN-Purple-100)] mx-auto mb-3" />
                <RNLabel variant="h2Bold" color="black" className="mb-1">4.9/5</RNLabel>
                <RNLabel variant="p2" color="secondary">User Rating</RNLabel>
              </RNCard>
            </div>
          </div>
        </RNContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <RNContainer>
          <RNCard 
            variant="filled" 
            padding="xl"
            className="bg-gradient-to-br from-[var(--RN-Blue-100)] to-[var(--RN-Blue-200)] text-white"
          >
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <RNLabel variant="h2Bold">
                Ready to get started?
              </RNLabel>
              <RNLabel variant="p1" className="text-white/90">
                Join thousands of teams already using our platform to build amazing products.
              </RNLabel>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <RNButton 
                  size="lg" 
                  className="bg-gradient-to-r from-[var(--RN-Orange-100)] to-[var(--RN-Orange-200)] text-white hover:from-[var(--RN-Orange-200)] hover:to-[var(--RN-Orange-300)] shadow-xl hover:shadow-2xl border-2 border-white/20"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Start Free Trial
                </RNButton>
                <RNButton 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  <Link to="./contact">Contact Sales</Link>
                </RNButton>
              </div>
            </div>
          </RNCard>
        </RNContainer>
      </section>

      {/* Footer */}
      <RNFooter />
    </div>
  );
}
