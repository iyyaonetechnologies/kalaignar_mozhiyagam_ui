import React, { ReactNode } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/rn-carousel.css';

interface RNCarouselProps {
  children: ReactNode[];
  slidesToShow?: number;
  autoPlay?: boolean;
  dots?: boolean;
  arrows?: boolean;
  autoPlaySpeed?: number;
}

export const RNCarousel: React.FC<RNCarouselProps> = ({
  children,
  slidesToShow = 3,
  autoPlay = true,
  dots = true,
  arrows = true,
  autoPlaySpeed = 4000,
}) => {
  const settings: Settings = {
    dots,
    arrows,
    infinite: true,
    autoplay: autoPlay,
    autoplaySpeed: autoPlaySpeed,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    nextArrow: <Arrow dir="next" />,
    prevArrow: <Arrow dir="prev" />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: Math.min(slidesToShow, 2) } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div
      className="relative p-4 rounded-xl"
      style={{
        background: 'linear-gradient(90deg, var(--RN-Blue-10), var(--RN-Light-Blue-10))',
      }}
    >
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

/** Custom arrow buttons using RN theme */
const Arrow: React.FC<{ dir: 'next' | 'prev' }> = ({ dir, ...props }) => (
  <button
    {...props}
    aria-label={dir === 'next' ? 'Next' : 'Previous'}
    className={`!flex !items-center !justify-center !absolute z-10 
                !w-9 !h-9 !rounded-full !shadow-md 
                ${dir === 'prev' ? '!left-2' : '!right-2'} 
                !top-1/2 -translate-y-1/2`}
    style={{
      backgroundColor: 'var(--RN-Blue-100)',
      color: 'var(--RN-Base-0)',
      border: `1px solid var(--RN-Blue-200)`,
    }}
  >
    <span style={{ fontSize: 16 }}>{dir === 'prev' ? '‹' : '›'}</span>
  </button>
);
