import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { Shield, Lock, Key, Database, Eye } from 'lucide-react';

export default function SecurityPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Section background="brand">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
              Security Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to keeping your data and transactions secure
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                At FoodLab, security is our top priority. We implement multiple layers of security measures to protect your personal information, payment data, and transactions.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    icon: Lock,
                    title: 'Data Encryption',
                    description: 'All data is encrypted using AES-256 encryption both in transit and at rest.',
                    color: 'from-brand-primary to-brand-primary/70',
                  },
                  {
                    icon: Key,
                    title: 'Secure Authentication',
                    description: 'Multi-factor authentication and secure password policies protect your account.',
                    color: 'from-brand-accent to-brand-accent/70',
                  },
                  {
                    icon: Database,
                    title: 'Secure Infrastructure',
                    description: 'Our servers are hosted in secure data centers with 24/7 monitoring.',
                    color: 'from-brand-secondary to-brand-secondary/70',
                  },
                  {
                    icon: Eye,
                    title: 'Regular Audits',
                    description: 'We conduct regular security audits and penetration testing.',
                    color: 'from-brand-warning to-brand-warning/70',
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className={`bg-gradient-to-br ${item.color} text-white p-6 rounded-xl`}>
                      <Icon className="w-10 h-10 mb-4" />
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/90">{item.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Payment Security</h2>
                <p className="text-gray-700 mb-4">
                  We use PCI DSS compliant payment gateways to process all transactions. Your payment information is never stored on our servers.
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Data Protection</h2>
                <p className="text-gray-700 mb-4">
                  We implement strict access controls, regular backups, and disaster recovery plans to ensure your data is always protected.
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Incident Response</h2>
                <p className="text-gray-700 mb-4">
                  In the unlikely event of a security breach, we have an incident response team ready to act immediately and notify affected users within 72 hours.
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Security Best Practices</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Use strong, unique passwords</li>
                  <li>Enable two-factor authentication</li>
                  <li>Never share your account credentials</li>
                  <li>Report suspicious activity immediately</li>
                  <li>Keep your app updated to the latest version</li>
                </ul>

                <div className="bg-brand-primary/10 rounded-xl p-6 mt-8">
                  <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-brand-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-brand-secondary mb-2">Report Security Issues</h3>
                      <p className="text-gray-700">
                        If you discover any security vulnerabilities, please report them to our security team at <a href="mailto:security@foodlab.com" className="text-brand-primary hover:underline">security@foodlab.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}
