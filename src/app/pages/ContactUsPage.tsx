import React from 'react';
import { RNLabel } from '@/components/RNLabel';
import { RNCard } from '@/components/RNCard';
import { RNContainer } from '@/components/RNContainer';
import { RNButton } from '@/components/RNButton';
import { RNInput } from '@/components/RNInput';
import { RNTextarea } from '@/components/RNTextarea';

const ContactUsPage: React.FC = () => {
  return (
    <RNContainer>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <RNLabel variant="h1Bold" label="Contact Us" className="text-[var(--RN-Blue-90)]" />
          </div>
          <div>
            <RNLabel
              variant="p1"
              label="Get in touch with us. We'd love to hear from you!"
              className="text-[var(--RN-Base-80)] max-w-3xl mx-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div>
            <RNLabel
              variant="h2Bold"
              label="Contact Information"
              className="mb-6 text-[var(--RN-Blue-90)]"
            />

            <RNCard className="p-6 mb-6">
              <div className="space-y-4">
                <div>
                  <RNLabel
                    variant="h3Bold"
                    label="KALAIGNAR MOZHIYAGAM TRUST"
                    className="mb-2 text-[var(--RN-Blue-80)]"
                  />
                  <RNLabel
                    variant="p2"
                    label="No.148(2), 1-8th Street Surandai, Tenkasi – 627 859."
                    className="text-[var(--RN-Base-70)]"
                  />
                </div>

                <div className="border-t border-[var(--RN-Base-20)] pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">📞</span>
                    <RNLabel variant="p2Bold" label="Phone" className="text-[var(--RN-Blue-80)]" />
                  </div>
                  <RNLabel
                    variant="p2"
                    label="+91 93429 01107"
                    className="text-[var(--RN-Base-70)]"
                  />
                </div>

                <div className="border-t border-[var(--RN-Base-20)] pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">✉️</span>
                    <RNLabel variant="p2Bold" label="Email" className="text-[var(--RN-Blue-80)]" />
                  </div>
                  <a
                    href="mailto:contactus@kalaignarmozhiyagam.com"
                    className="text-[var(--RN-Blue-100)] hover:underline"
                  >
                    <RNLabel variant="p2" label="contactus@kalaignarmozhiyagam.com" />
                  </a>
                </div>

                <div className="border-t border-[var(--RN-Base-20)] pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">🌐</span>
                    <RNLabel
                      variant="p2Bold"
                      label="Follow Us"
                      className="text-[var(--RN-Blue-80)]"
                    />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="https://www.facebook.com/share/1MCAexoUdv/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:opacity-80"
                    >
                      📘
                    </a>
                    <a
                      href="https://x.com/mozhiyagam?s=21"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:opacity-80"
                    >
                      🐦
                    </a>
                    <a
                      href="https://www.instagram.com/kalaignarmozhiyagam?igsh=MWhpOGVrajN3Ymtrcg=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:opacity-80"
                    >
                      📷
                    </a>
                  </div>
                </div>
              </div>
            </RNCard>
          </div>

          {/* Contact Form */}
          <div>
            <RNLabel
              variant="h2Bold"
              label="Send Us a Message"
              className="mb-6 text-[var(--RN-Blue-90)]"
            />

            <RNCard className="p-6">
              <form className="space-y-4">
                <div>
                  <RNLabel
                    variant="p2Bold"
                    label="Name"
                    className="mb-2 text-[var(--RN-Base-80)]"
                  />
                  <RNInput placeholder="Your full name" className="w-full" />
                </div>

                <div>
                  <RNLabel
                    variant="p2Bold"
                    label="Email"
                    className="mb-2 text-[var(--RN-Base-80)]"
                  />
                  <RNInput type="email" placeholder="your.email@example.com" className="w-full" />
                </div>

                <div>
                  <RNLabel
                    variant="p2Bold"
                    label="Phone"
                    className="mb-2 text-[var(--RN-Base-80)]"
                  />
                  <RNInput type="tel" placeholder="Your phone number" className="w-full" />
                </div>

                <div>
                  <RNLabel
                    variant="p2Bold"
                    label="Subject"
                    className="mb-2 text-[var(--RN-Base-80)]"
                  />
                  <RNInput placeholder="What is this regarding?" className="w-full" />
                </div>

                <div>
                  <RNLabel
                    variant="p2Bold"
                    label="Message"
                    className="mb-2 text-[var(--RN-Base-80)]"
                  />
                  <RNTextarea placeholder="Your message here..." rows={5} className="w-full" />
                </div>

                <RNButton variant="solid" size="lg" className="w-full">
                  <RNLabel variant="p1Bold" label="Send Message" />
                </RNButton>
              </form>
            </RNCard>
          </div>
        </div>

        {/* Map or Additional Info */}
        <div className="bg-[var(--RN-Blue-10)] rounded-[18px] p-8 text-center">
          <RNLabel variant="h2Bold" label="Visit Us" className="mb-2 text-[var(--RN-Blue-90)]" />
          <br />
          <RNLabel
            variant="p1"
            label="We welcome you to visit our office during working hours: Monday to Friday, 9:00 AM - 5:00 PM"
            className="text-[var(--RN-Base-70)]"
          />
        </div>
      </div>
    </RNContainer>
  );
};

export default ContactUsPage;
