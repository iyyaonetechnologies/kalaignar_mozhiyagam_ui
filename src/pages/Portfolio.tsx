import { RNNavbar } from '@/components/RNNavbar';
import { RNContainer } from '@/components/RNContainer';
import { RNFooter } from '@/components/RNFooter';
import { RNCard } from '@/components/RNCard';
import { RNBadge } from '@/components/RNBadge';
import { RNImage } from '@/components/RNImage';

export function Portfolio() {
  const projects = [
    {
      title: 'Blue Flag Beach',
      category: 'Mobile Application',
      description: 'Blue Flag Beach is a government-initiated project, and we developed the app for it.',
      technologies: ['React', 'NodeJS', 'MySQL', 'AWS', 'CloudFlare'],
      image: 'src/assets/Blue-Flag.jpg',
    },
    {
      title: 'Kalaignar Mozhiyagam Trust',
      category: 'Web Application',
      description: 'Comprehensive website for Kalaignar Mozhiyagam Trust with event management and other features.',
      technologies: ['React', 'NodeJS', 'MySQL', 'AWS',],
      image: 'src/assets/Kalaignar Mozhiyagam.jpg',
    },

    //  {
    //    title: 'E-Commerce Platform',
    //   category: 'Web Application',
    //   description: 'A full-featured online shopping platform with payment integration and inventory management.',
    //    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    //    image: 'bg-gradient-to-br from-blue-500 to-purple-600',
    //  },
  ]
  // {
  //   title: 'Healthcare Management System',
  //   category: 'Enterprise Software',
  //   description: 'Comprehensive hospital management system with patient records, appointments, and billing.',
  //   technologies: ['Next.js', 'PostgreSQL', 'AWS', 'TypeScript'],
  //   image: 'bg-gradient-to-br from-green-500 to-teal-600',
  // },
  // {
  //   title: 'Mobile Banking App',
  //   category: 'Mobile Application',
  //   description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
  //   technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
  //   image: 'bg-gradient-to-br from-orange-500 to-red-600',
  // },
  // {
  //   title: 'Real Estate Portal',
  
  //   category: 'Web Application',
  //   description: 'Property listing and management platform with advanced search and virtual tours.',
  //   technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL'],
  //   image: 'bg-gradient-to-br from-indigo-500 to-blue-600',
  // },
  // {
  //   title: 'Food Delivery Platform',
  //   category: 'Mobile & Web',
  //   description: 'Multi-vendor food delivery system with real-time tracking and payment processing.',
  //   technologies: ['Flutter', 'Express.js', 'Redis', 'MySQL'],
  //   image: 'bg-gradient-to-br from-yellow-500 to-orange-600',
  // },
  // {
  //   title: 'CRM Solution',
  //   category: 'Enterprise Software',
  //   description: 'Customer relationship management system with sales pipeline and analytics.',
  //   technologies: ['Angular', 'Java', 'Spring Boot', 'Oracle'],
  //   image: 'bg-gradient-to-br from-purple-500 to-pink-600',
  // },
  // ];

  return (
    <div className="min-h-screen bg-[var(--RN-Base-0)]">
      <RNNavbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--RN-Purple-100)] to-[var(--RN-Blue-100)] text-white py-16">
        <RNContainer>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-lg text-white/90">
              Explore our successful projects and the innovative solutions we've delivered
            </p>
          </div>
        </RNContainer>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <RNContainer>
          <div className="flex flex-wrap justify-center gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.34rem)] flex justify-center">
                <RNCard variant="elevated" padding="none" hoverable className="w-full h-full">
                  <div className="h-48 rounded-t-lg flex items-center justify-center overflow-hidden bg-gray-100">
                    <RNImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <RNBadge variant="primary" size="sm" className="mb-4">
                      {project.category}
                    </RNBadge>
                    <h3 className="text-xl font-bold mb-2 text-[var(--RN-Base-100)]">
                      {project.title}
                    </h3>
                    <p className="text-[var(--RN-Base-60)] mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.technologies.map((tech, tIdx) => (
                        <RNBadge key={tIdx} variant="default" size="sm">
                          {tech}
                        </RNBadge>
                      ))}
                    </div>
                  </div>
                </RNCard>
              </div>
            ))}
          </div>
        </RNContainer>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[var(--RN-Base-10)]">
        <RNContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[var(--RN-Blue-100)] mb-2">2</div>
              <div className="text-sm text-[var(--RN-Base-60)]">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--RN-Blue-100)] mb-2">2</div>
              <div className="text-sm text-[var(--RN-Base-60)]">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--RN-Blue-100)] mb-2">99%</div>
              <div className="text-sm text-[var(--RN-Base-60)]">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--RN-Blue-100)] mb-2">1+</div>
              <div className="text-sm text-[var(--RN-Base-60)]">Years Experience</div>
            </div>
          </div>
        </RNContainer>
      </section>

      <RNFooter />
    </div>
  );
}
