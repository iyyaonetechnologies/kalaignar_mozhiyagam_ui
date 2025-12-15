import { RNNavbar } from "@/components/RNNavbar";
import { RNContainer } from "@/components/RNContainer";
import { RNFooter } from "@/components/RNFooter";
import { RNCard } from "@/components/RNCard";
import { RNButton } from "@/components/RNButton";
import { Briefcase, TrendingUp, Users, Heart } from "lucide-react";

export function Careers() {
  const openings = [
    {
      title: "Intern Graduate Trainee",
      location: "Remote",
      type: "Full-time",
      experience: "0+ years",
      skills: ["React", "Node.js"],
    },
    // {
    //   title: 'React Native Developer',
    //   location: 'Hybrid',
    //   type: 'Full-time',
    //   experience: '3+ years',
    //   skills: ['React Native', 'JavaScript', 'Mobile UI/UX', 'Redux'],
    // },
    // {
    //   title: 'DevOps Engineer',
    //   location: 'On-site',
    //   type: 'Full-time',
    //   experience: '4+ years',
    //   skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS/Azure'],
    // },
    // {
    //   title: 'UI/UX Designer',
    //   location: 'Remote',
    //   type: 'Full-time',
    //   experience: '2+ years',
    //   skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    // },
  ];

  const benefits = [
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Flexible Work",
      description:
        "Remote and hybrid options available for better work-life balance.",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Career Growth",
      description: "Clear career progression paths and learning opportunities.",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Great Team",
      description:
        "Work with talented professionals in a collaborative environment.",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Health Benefits",
      description: "Comprehensive health insurance and wellness programs.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--RN-Base-0)]">
      <RNNavbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--RN-Green-100)] to-[var(--RN-Blue-100)] text-white py-16">
        <RNContainer>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join Our Team
            </h1>
            <p className="text-lg text-white/90">
              Build your career with a team that values innovation, growth, and
              excellence
            </p>
          </div>
        </RNContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <RNContainer>
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--RN-Base-100)]">
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <RNCard
                key={idx}
                variant="elevated"
                padding="lg"
                className="text-center"
              >
                <div className="text-[var(--RN-Blue-100)] mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--RN-Base-100)]">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[var(--RN-Base-60)]">
                  {benefit.description}
                </p>
              </RNCard>
            ))}
          </div>
        </RNContainer>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-[var(--RN-Base-10)]">
        <RNContainer>
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--RN-Base-100)]">
            Open Positions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {openings.map((job, idx) => (
              <RNCard key={idx} variant="elevated" padding="lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-[var(--RN-Base-100)] text-left">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-[var(--RN-Base-60)] mb-3">
                      <span>📍 {job.location}</span>
                      <span>💼 {job.type}</span>
                      <span>⏱️ {job.experience}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-1 bg-[var(--RN-Blue-10)] text-[var(--RN-Blue-100)] text-xs rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <RNButton
                    variant="solid"
                    className="!bg-gradient-to-r !from-green-500 !to-green-700 !text-white"
                  >
                    View Description
                  </RNButton>
                  <RNButton variant="solid">Apply Now</RNButton>
                </div>
              </RNCard>
            ))}
          </div>
        </RNContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <RNContainer>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-[var(--RN-Base-100)]">
              Don't See Your Role?
            </h2>
            <p className="text-lg text-[var(--RN-Base-60)] mb-6">
              We're always looking for talented individuals. Send us your resume
              and we'll keep you in mind for future opportunities.
            </p>
            <RNButton size="lg">Send Your Resume</RNButton>
          </div>
        </RNContainer>
      </section>

      <RNFooter />
    </div>
  );
}
