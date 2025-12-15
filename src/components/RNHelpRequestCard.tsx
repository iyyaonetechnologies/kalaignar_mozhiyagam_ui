import React from 'react';
import { RNImage } from './RNImage';
import { RNLabel } from './RNLabel';

type RNHelpRequestCardProps = {
  imageUrl: string;
  name: string;
  age: number | string;
  gender: string;
  amountRequested: number;
  ailment: string;
  currency?: string;
  className?: string;
};

const formatMoney = (amt: number, currency = 'INR') =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency, maximumFractionDigits: 0 }).format(
    amt
  );

export const RNHelpRequestCard: React.FC<RNHelpRequestCardProps> = ({
  imageUrl,
  name,
  age,
  gender,
  amountRequested,
  ailment,
  currency = 'INR',
  className = '',
}) => {
  return (
    <article
      className={`rounded-xl shadow-md border overflow-hidden ${className}`}
      style={{
        background: 'var(--RN-Base-0, #fff)',
        borderColor: 'var(--RN-Base-20, #e0e4e9)',
        color: 'var(--RN-Base-90, #1c2f40)',
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
        <div className="p-4 md:p-6">
          <RNImage
            src={imageUrl}
            alt={`Photo of ${name}`}
            className="w-full h-48 md:h-[220px] object-cover rounded-lg bg-[var(--RN-Base-10, #eef0f2)]"
          />
        </div>

        <div className="px-4 pb-4 md:p-6">
          <div className="space-y-4">
            <Field label="Name" value={name} />
            <Divider />
            <Field label="Age and Gender" value={`${age} / ${gender}`} />
            <Divider />
            <Field
              label="Amount Requested"
              value={formatMoney(amountRequested, currency)}
              strongValue
            />
          </div>

          <div className="mt-6 flex flex-col">
            <RNLabel
              className="font-semibold"
              style={{ color: 'var(--RN-Base-80, #354655)' }}
              variant="h3"
            >
              Nature of Ailment
            </RNLabel>
            <RNLabel className="mt-1 leading-relaxed">{ailment}</RNLabel>
          </div>
        </div>
      </div>
    </article>
  );
};

const Field: React.FC<{ label: string; value: string; strongValue?: boolean }> = ({
  label,
  value,
  strongValue,
}) => (
  <div className="grid grid-cols-1 gap-1">
    <span className="font-semibold" style={{ color: 'var(--RN-Base-80, #354655)' }}>
      {label}
    </span>
    <span className={strongValue ? 'font-semibold' : ''}>{value}</span>
  </div>
);

const Divider: React.FC = () => (
  <hr className="my-2" style={{ borderColor: 'var(--RN-Base-20, #e0e4e9)' }} />
);

export default RNHelpRequestCard;
