import React, { useState } from 'react';
import { RNLabel } from '@/components/RNLabel';
import { RNButton } from '@/components/RNButton';

const sideNavItems = [
  {
    label: 'Women Empowerment',
    icon: '/icons/women-empowerment.jpg',
    description: 'Description for Women Empowerment ...',
  },
  {
    label: 'Handicapped',
    icon: '/icons/handicapped.jpg',
    description: 'Description for Handicapped ...',
  },
  {
    label: 'Education Help',
    icon: '/icons/education-help.jpg',
    description: 'Description for Education Help ...',
  },
  {
    label: 'Natural Calamities',
    icon: '/icons/natural-calamities.jpg',
    description: 'Description for Natural Calamities ...',
  },
  {
    label: 'Housing the Poor',
    icon: '/icons/housing-poor.jpg',
    description: 'Description for Housing the Poor ...',
  },
  // {
  //   label: 'Poor Feeding',
  //   icon: '/icons/poor-feeding.jpg',
  //   description: `
  // One in eight women, men and children go to bed hungry every night and by 2025 nearly a billion young people will face poverty because of the damage done to them now through hunger and malnutrition. Hunger remains the No.1 cause of death in the world. There are 820 million chronically hungry people in the world. Million Indians survive on less than Rs. 20/- a day. Over 20 crores Indians will sleep hungry one night. Over 7000 Indians die of hunger every day and over 25 lakh Indians die of hunger every year. Despite substantial improvement in health since independence and a growth rate of 8 percent in recent years, under-nutrition remains a silent emergency in India, with almost 50 percent of Indian children underweight and more than 70 percent of the women and children with serious nutritional deficiencies as anemia. The number of hungry people in India is always more than the number of people below official poverty line. Mother Teresa charitable trust and its execution wing volunteers try to help this section of society in various parts of the country. Support us so that we can alleviate poverty and try to provide food for this fragile section of the society. Join Now...
  // `.trim(),
  // },
];

const GoalsPanel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = sideNavItems[activeIndex];

  return (
    <div className="flex flex-col lg:flex-row lg:items-start max-w-6xl mx-auto mt-8 gap-6 lg:gap-0">
      <aside className="w-full lg:w-72 rounded-[18px] border border-[var(--RN-Base-20)] bg-[var(--RN-Base-0)] overflow-hidden shadow">
        <nav className="flex flex-col md:flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible">
          {sideNavItems.map((item, i) => (
            <button
              key={item.label}
              type="button"
              className={`flex items-center gap-4 px-5 py-4 transition whitespace-nowrap md:whitespace-normal lg:whitespace-normal ${
                activeIndex === i
                  ? 'bg-[var(--RN-Blue-90)] text-[var(--RN-Base-100)] font-semibold'
                  : 'bg-[var(--RN-Base-0)] hover:bg-[var(--RN-Blue-10)] text-[var(--RN-Blue-70)]'
              }`}
              onClick={() => setActiveIndex(i)}
              tabIndex={0}
            >
              <img
                src={item.icon}
                alt={item.label}
                className={`w-10 h-10 rounded-full object-cover border-2 flex-shrink-0 ${
                  activeIndex === i ? 'border-[var(--RN-Blue-100)]' : 'border-[var(--RN-Base-10)]'
                }`}
              />
              <span className="text-lg font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
      <main className="lg:ml-9 flex-1 flex-col rounded-[18px] border border-[var(--RN-Base-20)] bg-[var(--RN-Base-0)] shadow-lg p-8">
        <div className="flex flex-col">
          <RNLabel
            variant="h2Bold"
            label={activeItem.label}
            statusLabel="Standard"
            className="mb-2 pb-1 inline-block border-b-2 border-[var(--RN-Base-20)]"
          />
          <RNLabel
            className="text-[var(--RN-Base-100)] mt-2 leading-relaxed whitespace-pre-line"
            label={activeItem.description}
          />
        </div>
        <div className="mt-8">
          <RNButton variant="solid" size="md">
            <RNLabel variant="p2Bold" label="Join Now" />
          </RNButton>
        </div>
      </main>
    </div>
  );
};

export default GoalsPanel;
