import React from 'react';

interface RNQuoteCardProps {
  text: string;
  author: string;
}

export const RNQuoteCard: React.FC<RNQuoteCardProps> = ({ text, author }) => {
  return (
    <div
      className="relative max-w-lg rounded-lg shadow-xl p-8 border"
      style={{
        backgroundColor: 'var(--RN-Base-0)',
        color: 'var(--RN-Base-80)',
        borderColor: 'var(--RN-Base-30)',
      }}
    >
      {/* Folded corner using RN Blue shades */}
      <div
        className="absolute top-0 right-0 w-0 h-0 rounded-tr-lg"
        style={{
          borderTop: '60px solid var(--RN-Blue-100)',
          borderLeft: '60px solid transparent',
        }}
      ></div>

      {/* Opening quote mark */}
      <span
        className="absolute top-2 left-4 text-4xl font-serif select-none"
        style={{ color: 'var(--RN-Blue-70)' }}
      >
        “
      </span>

      {/* Quote text */}
      <p className="text-base sm:text-lg italic mt-6 leading-relaxed">{text}</p>

      {/* Author name */}
      <p className="text-right font-semibold mt-4" style={{ color: 'var(--RN-Blue-300)' }}>
        — {author}
      </p>

      {/* Closing quote mark */}
      <span
        className="absolute bottom-2 right-4 text-3xl font-serif select-none"
        style={{ color: 'var(--RN-Blue-50)' }}
      >
        ”
      </span>
    </div>
  );
};
