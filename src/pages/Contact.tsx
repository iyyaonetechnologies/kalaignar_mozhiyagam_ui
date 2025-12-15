import { RNNavbar } from '@/components/RNNavbar';
import { RNContainer } from '@/components/RNContainer';
import { RNFooter } from '@/components/RNFooter';
import { RNCard } from '@/components/RNCard';
import { RNToast } from '@/components/RNToast';
import { RNDynamicForm, type FormField } from '@/components/RNDynamicForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [showToast, setShowToast] = useState(false);

  const contactFormFields: FormField[] = [
    { name: 'name', type: 'text', placeholder: 'Your Name', required: true },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Your Email',
      required: true,
      validationRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMessage: 'Please enter a valid email address'
    },
    { name: 'subject', type: 'text', placeholder: 'Subject', required: true },
    { name: 'message', type: 'textarea', placeholder: 'Your Message', required: true, rows: 6 },
  ];

  const handleFormSubmit = (data: Record<string, string>) => {
    // Simulate API call
    console.log('Form submitted:', data);
    setShowToast(true);

    // Hide toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[var(--RN-Base-0)]">
      <RNNavbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--RN-Blue-100)] to-[var(--RN-Light-Blue-100)] text-white py-16">
        <RNContainer>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-white/90">
              Let's discuss how we can help transform your business with technology
            </p>
          </div>
        </RNContainer>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <RNContainer>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[var(--RN-Base-100)]">
                Contact Information
              </h2>
              <p className="text-[var(--RN-Base-60)] mb-8">
                Have a question or ready to start a project? We'd love to hear from you.
              </p>

              <div className="space-y-6 text-left">
                <div className="flex items-start gap-4">
                  <div className="text-[var(--RN-Blue-100)] flex-shrink-0 mt-1">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--RN-Base-100)]">Email</h3>
                    <p className="text-[var(--RN-Base-60)] mt-1">Support@iyyaone.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-[var(--RN-Blue-100)] flex-shrink-0 mt-1">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--RN-Base-100)]">Phone</h3>
                    <p className="text-[var(--RN-Base-60)] mt-1">+91 9876543210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-[var(--RN-Blue-100)] flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--RN-Base-100)]">Office</h3>
                    <p className="text-[var(--RN-Base-60)] leading-relaxed mt-1">
                      123 Government School opp<br />
                      Surandai, Tenkasi, 627859.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-[var(--RN-Blue-100)] flex-shrink-0 mt-1">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--RN-Base-100)]">Business Hours</h3>
                    <p className="text-[var(--RN-Base-60)] leading-relaxed mt-1">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <RNCard variant="elevated" padding="xl">
                <h2 className="text-2xl font-bold mb-6 text-[var(--RN-Base-100)]">
                  Send Us a Message
                </h2>
                <RNDynamicForm
                  fields={contactFormFields}
                  onSubmit={handleFormSubmit}
                  submitLabel="Send Message"
                />
              </RNCard>
            </div>
          </div>
        </RNContainer>
      </section>

      {showToast && (
        <RNToast>
          Message sent successfully! We'll get back to you soon.
        </RNToast>
      )}

      {/* Map Section (placeholder) */}
      <section className="py-16 bg-[var(--RN-Base-10)]">
        <RNContainer>
          <div className="bg-[var(--RN-Base-20)] h-96 rounded-lg flex items-center justify-center">
            <p className="text-[var(--RN-Base-60)]">Map Location</p>
          </div>
        </RNContainer>
      </section>

      <RNFooter />
    </div>
  );
}
