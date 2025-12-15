import React from 'react';
import { RNLabel } from '@/components/RNLabel';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Bitcoin } from 'lucide-react';

const iconMap = [
  { icon: Facebook, url: 'https://facebook.com' },
  { icon: Twitter, url: 'https://twitter.com' },
  { icon: Instagram, url: 'https://instagram.com' },
  { icon: Linkedin, url: 'https://linkedin.com' },
  { icon: Youtube, url: 'https://youtube.com' },
  { icon: Bitcoin, url: 'https://bitcoin.org' },
];

const SocialCircleBar: React.FC = () => (
  <div className="flex space-x-2 bg-[var(--RN-Blue-300)] py-6 justify-center ">
    {iconMap.map(({ icon: Icon, url }, idx) => (
      <a
        key={idx}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="
          rounded-full
          bg-[var(--RN-Base-0)]
          w-5
          h-5
          flex
          items-center
          justify-center
          shadow
          transition
          hover:bg-[var(--RN-Blue-20)]
        "
      >
        <Icon className="text-[var(--RN-Blue-300)]" size={16} />
      </a>
    ))}
  </div>
);

const Footer: React.FC = () => (
  <footer className="bg-[var(--RN-Blue-300)] pt-12 pb-6 text-[var(--RN-Base-0)]">
    <div className=" px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <RNLabel
          label="Site Navigation"
          variant="h2Bold"
          color="var(--RN-Blue-10)"
          className="mb-2"
        />
        <ul className="space-y-1 text-sm">
          <li>
            <RNLabel
              label="Mother Teresa’s 114th Birth Anniversary & Award Ceremony"
              variant="p2"
            />
          </li>
          <li>
            <RNLabel label="Online Donation" variant="p2" />
          </li>
          <li>
            <RNLabel label="Offline Donation" variant="p2" />
          </li>
          <li>
            <RNLabel label="Become A Member" variant="p2" />
          </li>
          <li>
            <RNLabel label="Mother Teresa’s Golden Words" variant="p2" />
          </li>
          <li>
            <RNLabel label="Mother Teresa’s Life & living" variant="p2" />
          </li>
          <li>
            <RNLabel label="Mother Teresa an Angel" variant="p2" />
          </li>
        </ul>
      </div>
      <div>
        <RNLabel
          label="Public Request"
          variant="h2Bold"
          color="var(--RN-Blue-10)"
          className="mb-2"
        />
        <ul className="space-y-1 text-sm">
          <li>
            <RNLabel label="Education Assistance" variant="p2" />
          </li>
          <li>
            <RNLabel label="Medical Assistance" variant="p2" />
          </li>
          <li>
            <RNLabel label="General Help" variant="p2" />
          </li>
        </ul>
      </div>
      <div>
        <RNLabel
          label="News & Events"
          variant="h2Bold"
          color="var(--RN-Blue-10)"
          className="mb-2"
        />
        <ul className="space-y-1 text-sm">
          <li>
            <RNLabel label="Karate Training (Low Fees)" variant="p2" />
          </li>
          <li>
            <RNLabel label="Computer Graphic Designing Training (Low Fees)" variant="p2" />
          </li>
          <li>
            <RNLabel label="Spoken English Classes" variant="p2" />
          </li>
          <li>
            <RNLabel
              label="Free legal counselling (For Adolescents and Elderly people)"
              variant="p2"
            />
          </li>
          <li className="ml-4">
            <RNLabel label="Dance Class" variant="p2" />
          </li>
          <li className="ml-4">
            <RNLabel label="Beautician Courses" variant="p2" />
          </li>
          <li className="ml-4">
            <RNLabel label="Free food distribution" variant="p2" />
          </li>
        </ul>
        <div className="flex space-x-3 mt-6 text-xl text-[var(--RN-Blue-10)]">
          <SocialCircleBar />
        </div>
      </div>
      <div>
        <RNLabel label="Contact Info" variant="h2Bold" color="var(--RN-Blue-10)" className="mb-2" />
        <div className="font-medium">
          <RNLabel label="Nobel Laureate Mother Theresa Charitable Trust," variant="p2Bold" />
        </div>
        <div className="text-sm">
          <RNLabel
            label={
              '"Mother\'s Castle" No:40, Thiruvengadapuram Main Road, Choolaimedu, Chennai - 600094, India.'
            }
            variant="p2"
          />
        </div>
        <div className="mt-2 text-sm">
          <span className="text-[var(--RN-Blue-40)] font-bold">
            <RNLabel label="PHONE :" variant="p2Bold" color="var(--RN-Blue-40)" />
          </span>
          <RNLabel label="+91 44 23743883," variant="p2" />
          <br />
          <RNLabel label="+91 44 23742699" variant="p2" />
        </div>
        <div className="text-sm mt-1">
          <span className="text-[var(--RN-Green-100)] font-bold">
            <RNLabel label="WHATSAPP :" variant="p2Bold" color="var(--RN-Green-100)" />
          </span>
          <RNLabel label="+91 8939300227" variant="p2" />
          <br />
          <span className="text-[var(--RN-Green-100)] font-bold">
            <RNLabel label="WHATSAPP :" variant="p2Bold" color="var(--RN-Green-100)" />
          </span>
          <RNLabel label="+91 7710230320" variant="p2" />
        </div>
        <div className="text-sm mt-1">
          <span className="text-[var(--RN-Blue-60)] font-bold">
            <RNLabel label="MAIL :" variant="p2Bold" color="var(--RN-Blue-60)" />
          </span>
          <a href="mailto:mtct1997@yahoo.co.in" className="ml-1">
            <RNLabel label="mtct1997@yahoo.co.in" variant="p2" />
          </a>
          ,<br />
          <a href="mailto:mtct1997@gmail.com">
            <RNLabel label="mtct1997@gmail.com" variant="p2" />
          </a>
        </div>
      </div>
    </div>
    <div className="bg-[var(--RN-Base-100)] text-[var(--RN-Base-40)] text-sm mt-8 py-4 px-4 flex flex-col md:flex-row items-center justify-between">
      <div className="mb-2 md:mb-0">
        <RNLabel
          label="Terms & Privacy Policy | © 2025 Nobel Laureate Mother Theresa Charitable Trust. All Rights Reserved."
          variant="p3"
          color="var(--RN-Base-40)"
        />
      </div>
      <div className="space-x-6">
        <a href="#" className="hover:text-[var(--RN-Blue-90)]">
          <RNLabel label="Home" variant="p3" color="var(--RN-Base-40)" />
        </a>
        <a href="#" className="hover:text-[var(--RN-Blue-90)]">
          <RNLabel label="Donation" variant="p3" color="var(--RN-Base-40)" />
        </a>
        <a href="#" className="hover:text-[var(--RN-Blue-90)]">
          Contact Us
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
