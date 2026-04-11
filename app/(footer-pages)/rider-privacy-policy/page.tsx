import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { Shield, Bike } from 'lucide-react';

export default function RiderPrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Section background="brand">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
              Rider Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Privacy policy specific to our delivery partners
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center">
                  <Bike className="w-6 h-6 text-brand-accent" />
                </div>
                <p className="text-sm text-gray-500">Last updated: January 1, 2026</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  This Rider Privacy Policy explains how FoodLab collects, uses, and protects the personal information of our delivery partners (riders).
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">1. Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We collect the following information from our delivery partners:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Full name, contact number, and email address</li>
                  <li>National ID or passport information</li>
                  <li>Vehicle registration and license details</li>
                  <li>Bank account information for payment processing</li>
                  <li>Location data during active delivery shifts</li>
                  <li>Delivery performance metrics</li>
                </ul>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use rider information to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Verify identity and eligibility</li>
                  <li>Process payments and incentives</li>
                  <li>Assign delivery orders based on location</li>
                  <li>Monitor performance and ensure quality</li>
                  <li>Communicate important updates</li>
                  <li>Ensure safety and security</li>
                </ul>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">3. Location Tracking</h2>
                <p className="text-gray-700 mb-4">
                  We collect location data only when you are on an active delivery shift. This helps us assign orders efficiently and track delivery progress.
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">4. Data Protection</h2>
                <p className="text-gray-700 mb-4">
                  We implement strict security measures to protect your personal information. Access is limited to authorized personnel only.
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">5. Data Retention</h2>
                <p className="text-gray-700 mb-4">
                  We retain rider information for the duration of your partnership and for 2 years after termination for legal and administrative purposes.
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">6. Your Rights</h2>
                <p className="text-gray-700 mb-4">
                  You have the right to access, update, or request deletion of your personal data. Contact us at rider-support@foodlab.com.
                </p>

                <div className="bg-brand-accent/10 rounded-xl p-6 mt-8">
                  <p className="text-gray-700">
                    <strong>Contact:</strong> For privacy-related questions, email us at <a href="mailto:rider-support@foodlab.com" className="text-brand-accent hover:underline">rider-support@foodlab.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}
