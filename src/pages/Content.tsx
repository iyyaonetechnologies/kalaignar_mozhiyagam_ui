import { RNNavbar } from '@/components/RNNavbar';
import { RNContainer } from '@/components/RNContainer';
import { RNFooter } from '@/components/RNFooter';
import { RNCard } from '@/components/RNCard';
import { FileText, Video, Image, BookOpen } from 'lucide-react';

export function Content() {
  const contentTypes = [
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Tech Blog',
      description: 'Read our latest articles on technology trends, best practices, and insights.',
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: 'Tutorial Videos',
      description: 'Watch tutorials, demos, and presentations on various technologies.',
    },
    {
      icon: <Image className="w-10 h-10" />,
      title: 'Project Gallery',
      description: 'Browse through our portfolio of successful projects and case studies.',
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: 'Documentation',
      description: 'Access technical documentation, API guides, and development resources.',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--RN-Base-0)]">
      <RNNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--RN-Light-Blue-100)] to-[var(--RN-Blue-100)] text-white py-16">
        <RNContainer>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
            <p className="text-lg text-white/90">
              A trained workforce to support business operations and innovation
            </p>
          </div>
        </RNContainer>
      </section>

      {/* Content Types */}
      <section className="py-16">
        <RNContainer>
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--RN-Base-100)]">
            Explore Our Content
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTypes.map((content, idx) => (
              <RNCard key={idx} variant="elevated" padding="lg" hoverable>
                <div className="text-[var(--RN-Light-Blue-100)] mb-4">
                  {content.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--RN-Base-100)]">
                  {content.title}
                </h3>
                <p className="text-[var(--RN-Base-60)]">{content.description}</p>
              </RNCard>
            ))}
          </div>
        </RNContainer>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-[var(--RN-Base-10)]">
        <RNContainer>
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--RN-Base-100)]">
            Featured Content
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <RNCard variant="elevated" padding="lg">
              <div className="aspect-video bg-[var(--RN-Base-20)] rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold mb-2 text-[var(--RN-Base-100)]">
                React Development Guide
              </h3>
              <p className="text-sm text-[var(--RN-Base-60)]">
                Comprehensive guide to building modern web applications with React.
              </p>
            </RNCard>
            
            <RNCard variant="elevated" padding="lg">
              <div className="aspect-video bg-[var(--RN-Base-20)] rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold mb-2 text-[var(--RN-Base-100)]">
                API Documentation
              </h3>
              <p className="text-sm text-[var(--RN-Base-60)]">
                Complete API reference and integration guides for developers.
              </p>
            </RNCard>
            
            <RNCard variant="elevated" padding="lg">
              <div className="aspect-video bg-[var(--RN-Base-20)] rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold mb-2 text-[var(--RN-Base-100)]">
                Latest Tech News
              </h3>
              <p className="text-sm text-[var(--RN-Base-60)]">
                Stay updated with the latest technology trends and industry news.
              </p>
            </RNCard>
          </div>
        </RNContainer>
      </section>

      <RNFooter />
    </div>
  );
}
