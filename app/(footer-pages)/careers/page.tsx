import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { Briefcase, Mail, Heart, TrendingUp, Lightbulb, Users, Clock, Shield } from 'lucide-react';

export default function CareersPage() {
  const benefits = [
    { icon: Heart, title: 'Culture of Collaboration', description: 'Work with talented individuals in a supportive environment' },
    { icon: TrendingUp, title: 'Opportunities for Growth', description: 'Continuous learning and career advancement opportunities' },
    { icon: Lightbulb, title: 'Innovation', description: 'Be part of cutting-edge food technology solutions' },
    { icon: Users, title: 'Impactful Work', description: 'Make a real difference in millions of customers lives' },
    { icon: Shield, title: 'Good Environment', description: 'Safe, inclusive, and respectful workplace culture' },
    { icon: Clock, title: 'Work-Life Balance', description: '9:30 AM to 6:30 PM, 5 days a week (Sunday-Thursday)' },
  ];

  const departments = [
    'Operations',
    'Content Management',
    'Customer Service',
    'Business Development',
    'HR & Admin',
    'IT & Engineering',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <Section background="brand">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
              Careers at FoodLab
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our team and help revolutionize food delivery in Bangladesh
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-8 h-8 text-brand-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-secondary mb-4">Join Our Team</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    We're looking for talented individuals who are passionate about food, technology, and making a difference. Join FoodLab and be part of a dynamic team that's transforming the way Bangladesh eats.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-xl p-6 mt-6">
                <h3 className="text-xl font-bold text-brand-secondary mb-3">Send Your CV</h3>
                <p className="text-gray-700 mb-4">
                  Interested in joining our team? Send your CV and cover letter to:
                </p>
                <a
                  href="mailto:hr@foodlab.com"
                  className="inline-block bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors"
                >
                  hr@foodlab.com
                </a>
              </div>
            </div>

            {/* Departments */}
            <div>
              <h3 className="text-2xl font-bold text-brand-secondary mb-6">Open Departments</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {departments.map((dept) => (
                  <div
                    key={dept}
                    className="bg-gray-50 p-6 rounded-xl hover:bg-brand-primary/5 transition-colors border-2 border-transparent hover:border-brand-primary"
                  >
                    <h4 className="font-semibold text-brand-secondary text-lg">{dept}</h4>
                    <p className="text-sm text-gray-600 mt-2">View open positions</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-brand-secondary mb-6">Why Join Us?</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={benefit.title}
                      className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                    >
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-brand-primary" />
                      </div>
                      <h4 className="font-bold text-brand-secondary mb-2">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
