import React, { useState } from 'react';
import { RNLabel } from '@/components/RNLabel';
import { RNCard } from '@/components/RNCard';
import { RNButton } from '@/components/RNButton';
import { RNContainer } from '@/components/RNContainer';

const ContentPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Content' },
    { id: 'blog', label: 'Blog Posts' },
    { id: 'news', label: 'News' },
    { id: 'stories', label: 'Success Stories' },
    { id: 'media', label: 'Media Coverage' },
  ];

  const contentItems = [
    {
      category: 'blog',
      title: 'The Importance of Education in Rural Areas',
      date: 'October 25, 2025',
      author: 'Dr. Rajesh Kumar',
      excerpt:
        'Education is the cornerstone of development. Learn how our initiatives are transforming rural education...',
      image: '📖',
    },
    {
      category: 'news',
      title: 'New Healthcare Center Inaugurated',
      date: 'October 20, 2025',
      author: 'News Team',
      excerpt:
        'We are proud to announce the opening of our 5th healthcare center in underserved communities...',
      image: '🏥',
    },
    {
      category: 'stories',
      title: "From Struggles to Success: Priya's Journey",
      date: 'October 15, 2025',
      author: 'Success Stories Team',
      excerpt:
        'How a young girl from a remote village overcame challenges to become a software engineer...',
      image: '⭐',
    },
    {
      category: 'media',
      title: 'Featured in National Television',
      date: 'October 10, 2025',
      author: 'Media Relations',
      excerpt:
        'Our food distribution program was highlighted in a national TV documentary on social welfare...',
      image: '📺',
    },
    {
      category: 'blog',
      title: 'Women Empowerment Through Skill Development',
      date: 'October 5, 2025',
      author: 'Meena Sharma',
      excerpt:
        'Discover how vocational training programs are empowering women to achieve financial independence...',
      image: '💪',
    },
    {
      category: 'news',
      title: '10,000+ Trees Planted This Year',
      date: 'September 30, 2025',
      author: 'Environmental Team',
      excerpt:
        'Our environmental initiatives have led to the plantation of over 10,000 trees across the region...',
      image: '🌳',
    },
    {
      category: 'stories',
      title: 'Community Transformed Through Education',
      date: 'September 25, 2025',
      author: 'Field Stories',
      excerpt:
        'The inspiring story of how an entire village community embraced education for their children...',
      image: '🎓',
    },
    {
      category: 'media',
      title: 'Award Recognition in National Media',
      date: 'September 20, 2025',
      author: 'PR Team',
      excerpt: 'Multiple news outlets covered our recent award for excellence in social service...',
      image: '🏆',
    },
  ];

  const filteredContent =
    selectedCategory === 'all'
      ? contentItems
      : contentItems.filter((item) => item.category === selectedCategory);

  return (
    <RNContainer>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <RNLabel
              variant="h1Bold"
              label="Content & Resources"
              className="text-[var(--RN-Blue-90)]"
            />
          </div>
          <div>
            <RNLabel
              variant="p1"
              label="Stay updated with our latest news, stories, and insights"
              className="text-[var(--RN-Base-80)] max-w-3xl mx-auto"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-[var(--RN-Blue-80)] text-[var(--RN-Base-0)]'
                  : 'bg-[var(--RN-Base-10)] text-[var(--RN-Base-80)] hover:bg-[var(--RN-Blue-10)]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredContent.map((item, index) => (
            <RNCard key={index} className="p-6 hover:shadow-xl transition-shadow flex flex-col">
              <div className="text-6xl text-center mb-4">{item.image}</div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-1 bg-[var(--RN-Blue-10)] text-[var(--RN-Blue-80)] rounded-full uppercase font-semibold">
                    {item.category}
                  </span>
                </div>
                <RNLabel
                  variant="h3Bold"
                  label={item.title}
                  className="mb-3 text-[var(--RN-Blue-80)]"
                />
                <div className="flex items-center gap-2 mb-3 text-sm text-[var(--RN-Base-60)]">
                  <span>📅 {item.date}</span>
                  <span>•</span>
                  <span>✍️ {item.author}</span>
                </div>
                <RNLabel
                  variant="p2"
                  label={item.excerpt}
                  className="text-[var(--RN-Base-70)] mb-4"
                />
              </div>
              <RNButton variant="outline" size="sm" className="w-full mt-auto">
                <RNLabel variant="p2Bold" label="Read More" />
              </RNButton>
            </RNCard>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-[var(--RN-Blue-10)] rounded-[18px] p-8 text-center">
          <div className="mb-4">
            <RNLabel variant="h2Bold" label="Stay Connected" className="text-[var(--RN-Blue-90)]" />
          </div>
          <div>
            <RNLabel
              variant="p1"
              label="Subscribe to our newsletter to receive the latest updates and stories"
              className="mb-6 text-[var(--RN-Base-70)]"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg border border-[var(--RN-Base-30)] w-full sm:flex-1 focus:outline-none focus:ring-2 focus:ring-[var(--RN-Blue-60)]"
            />
            <RNButton variant="solid" size="md">
              <RNLabel variant="p1Bold" label="Subscribe" />
            </RNButton>
          </div>
        </div>
      </div>
    </RNContainer>
  );
};

export default ContentPage;
