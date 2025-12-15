import { RNAccordion } from '@/components/RNAccordion';
import { RNBadge } from '@/components/RNBadge';
import { RNButton } from '@/components/RNButton';
import { RNCard } from '@/components/RNCard';
import { RNCounterAnimation } from '@/components/RNCounterAnimation';
import Footer from '@/components/ui/Footer';

const HomePage = () => {
  return (
    <div className="space-y-12 px-4 py-6">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-[var(--RN-Blue-10)] to-[var(--RN-Light-Blue-10)] rounded-2xl">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--RN-Blue-100)] mb-6">
            கலைஞர் மொழியகம் அறக்கட்டளை
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--RN-Blue-80)] mb-4">
            KALAIGNAR MOZHIYAGAM TRUST
          </h2>
          <p className="text-lg text-[var(--RN-Base-70)] mb-8 leading-relaxed">
            Dedicated to preserving Tamil language, culture, and literature while empowering
            communities through education, healthcare, and social development initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RNButton
              variant="solid"
              size="lg"
              className="bg-[var(--RN-Blue-100)] hover:bg-[var(--RN-Blue-200)]"
            >
              Join Our Mission
            </RNButton>
            <RNButton
              variant="outline"
              size="lg"
              className="border-[var(--RN-Blue-100)] text-[var(--RN-Blue-100)]"
            >
              Learn More
            </RNButton>
          </div>
        </div>
      </section>

      {/* Trust Impact Statistics */}
      <section className="py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <RNCard className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-3xl font-bold text-[var(--RN-Blue-100)]">
              <RNCounterAnimation end={500} duration={2500} suffix="+" />
            </h3>
            <p className="text-[var(--RN-Base-70)] mt-2">Lives Impacted</p>
          </RNCard>
          <RNCard className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-3xl font-bold text-[var(--RN-Green-100)]">
              <RNCounterAnimation end={2.5} duration={2500} prefix="₹" suffix="Cr" decimals={1} />
            </h3>
            <p className="text-[var(--RN-Base-70)] mt-2">Funds Distributed</p>
          </RNCard>
          <RNCard className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-3xl font-bold text-[var(--RN-Orange-100)]">
              <RNCounterAnimation end={25} duration={2500} suffix="+" />
            </h3>
            <p className="text-[var(--RN-Base-70)] mt-2">Active Projects</p>
          </RNCard>
          <RNCard className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-3xl font-bold text-[var(--RN-Purple-100)]">
              <RNCounterAnimation end={15} duration={2500} />
            </h3>
            <p className="text-[var(--RN-Base-70)] mt-2">Years of Service</p>
          </RNCard>
        </div>
      </section>

      {/* Current Beneficiaries */}
      {/* <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[var(--RN-Base-90)] mb-4">
            Current Beneficiaries
          </h2>
          <p className="text-lg text-[var(--RN-Base-70)] max-w-2xl mx-auto">
            Meet the individuals and communities we're currently supporting through our various
            programs and initiatives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustMembers.map((member, key) => (
            <RNHelpRequestCard
              key={key}
              imageUrl={member.imageUrl}
              name={member.name}
              age={member.age}
              gender={member.gender}
              amountRequested={member.amountRequested}
              ailment={member.ailment}
              currency="INR"
            />
          ))}
        </div>
      </section> */}

      {/* Featured Projects */}
      {/* <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[var(--RN-Base-90)] mb-4">Our Active Projects</h2>
          <p className="text-lg text-[var(--RN-Base-70)] max-w-2xl mx-auto">
            Discover the impactful initiatives we're running to create positive change in
            communities across Tamil Nadu.
          </p>
        </div>
        <RNCarousel
          arrows={true}
          autoPlay={true}
          children={trustProjects.map((project, key) => (
            <div key={key} className="px-2">
              <ProjectCard imageSrc={project.imageSrc} />
            </div>
          ))}
        />
      </section> */}

      {/* Trust Information */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[var(--RN-Base-90)] mb-4">About Our Trust</h2>
        </div>
        <RNAccordion
          items={[
            {
              title: 'Our Mission & Vision',
              content: (
                <div className="space-y-4">
                  <p className="text-[var(--RN-Base-70)]">
                    <strong>Mission:</strong> To preserve and promote Tamil language, literature,
                    and culture while empowering communities through comprehensive social
                    development programs.
                  </p>
                  <p className="text-[var(--RN-Base-70)]">
                    <strong>Vision:</strong> A society where Tamil heritage thrives alongside modern
                    development, creating opportunities for education, healthcare, and cultural
                    expression for all.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <RNBadge variant="primary">Cultural Preservation</RNBadge>
                    <RNBadge variant="success">Education</RNBadge>
                    <RNBadge variant="info">Healthcare</RNBadge>
                    <RNBadge variant="warning">Community Development</RNBadge>
                  </div>
                </div>
              ),
            },
            {
              title: 'Our Programs & Services',
              content: (
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-[var(--RN-Blue-100)] mb-2">
                        Educational Programs
                      </h4>
                      <ul className="list-disc pl-6 text-[var(--RN-Base-70)] space-y-1">
                        <li>Scholarship programs for underprivileged students</li>
                        <li>Tamil language and literature courses</li>
                        <li>Digital literacy training</li>
                        <li>Vocational skill development</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--RN-Green-100)] mb-2">
                        Healthcare Initiatives
                      </h4>
                      <ul className="list-disc pl-6 text-[var(--RN-Base-70)] space-y-1">
                        <li>Free medical camps</li>
                        <li>Health awareness programs</li>
                        <li>Mental health support</li>
                        <li>Emergency medical assistance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              title: 'How to Get Involved',
              content: (
                <div className="space-y-4">
                  <p className="text-[var(--RN-Base-70)]">
                    Join us in our mission to create positive change. There are many ways you can
                    contribute to our trust's initiatives:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <RNCard className="p-4 text-center border-[var(--RN-Blue-20)]">
                      <h4 className="font-semibold text-[var(--RN-Blue-100)] mb-2">Volunteer</h4>
                      <p className="text-sm text-[var(--RN-Base-70)]">
                        Share your skills and time with our community programs
                      </p>
                    </RNCard>
                    {/* <RNCard className="p-4 text-center border-[var(--RN-Green-20)]">
                      <h4 className="font-semibold text-[var(--RN-Green-100)] mb-2">Donate</h4>
                      <p className="text-sm text-[var(--RN-Base-70)]">
                        Support our projects with financial contributions
                      </p>
                    </RNCard> */}
                    <RNCard className="p-4 text-center border-[var(--RN-Orange-20)]">
                      <h4 className="font-semibold text-[var(--RN-Orange-100)] mb-2">Partner</h4>
                      <p className="text-sm text-[var(--RN-Base-70)]">
                        Collaborate with us on community initiatives
                      </p>
                    </RNCard>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </section>

      {/* Call to Action */}
      {/* <section className="bg-[var(--RN-Blue-10)] rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-[var(--RN-Blue-100)] mb-4">
          Ready to Make a Difference?
        </h2>
        <p className="text-[var(--RN-Base-70)] mb-6 max-w-2xl mx-auto">
          Together, we can preserve our cultural heritage while building a brighter future for our
          communities. Every contribution makes a meaningful impact.
        </p>
        <RNAlert variant="info" className="mb-6">
          <strong>Tax Benefits Available:</strong> All donations to Kalaignar Mozhiyagam Trust are
          eligible for tax deductions under Section 80G of the Income Tax Act.
        </RNAlert>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <RNButton
            variant="solid"
            size="lg"
            className="bg-[var(--RN-Blue-100)] hover:bg-[var(--RN-Blue-200)]"
          >
            Donate Now
          </RNButton>
          <RNButton
            variant="outline"
            size="lg"
            className="border-[var(--RN-Blue-100)] text-[var(--RN-Blue-100)]"
          >
            Contact Us
          </RNButton>
        </div>
      </section> */}

      {/* <RNCard>
        <GoalsPanel />
      </RNCard> */}
      <Footer />
    </div>
  );
};

export default HomePage;
