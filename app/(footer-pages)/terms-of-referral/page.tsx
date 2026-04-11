import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { Gift, Users, TrendingUp, Percent } from 'lucide-react';

export default function TermsOfReferralPage() {
  return (
    <div className="min-h-screen bg-white">
      <Section background="brand">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
              Terms Of Referral and Condition
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Terms and conditions for our referral program
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Gift, title: 'Refer Friends', desc: 'Share your unique referral code with friends' },
                  { icon: Users, title: 'Both Get Rewards', desc: 'You and your friend both get discounts' },
                  { icon: TrendingUp, title: 'Unlimited Referrals', desc: 'No limit on how many friends you can refer' },
                  { icon: Percent, title: 'Earn Discounts', desc: 'Get 100 TK off for each successful referral' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 p-6 rounded-xl">
                      <Icon className="w-10 h-10 text-brand-primary mb-4" />
                      <h3 className="text-lg font-bold text-brand-secondary mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">1. How the Referral Program Works</h2>
                <p className="text-gray-700 mb-4">
                  When you refer a friend to FoodLab using your unique referral code, both you and your friend will receive rewards once your friend completes their first order.
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">2. Eligibility</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>You must be an active FoodLab user</li>
                  <li>Your friend must be a new user (never ordered before)</li>
                  <li>Your friend must use your referral code during signup</li>
                  <li>Your friend must complete their first order (minimum 300 TK)</li>
                </ul>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">3. Rewards</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Referrer:</strong> 100 TK discount code for each successful referral<br />
                  <strong>Referee:</strong> 150 TK discount on their first order
                </p>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">4. Reward Usage</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Rewards are credited within 24 hours of successful referral</li>
                  <li>Discount codes are valid for 30 days from issuance</li>
                  <li>Minimum order value of 300 TK to use referral discount</li>
                  <li>Cannot be combined with other promotional offers</li>
                </ul>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">5. Limitations</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                  <li>Maximum 10 successful referrals per user per month</li>
                  <li>Self-referrals or fraudulent activity will result in disqualification</li>
                  <li>FoodLab reserves the right to modify or terminate the program at any time</li>
                </ul>

                <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">6. Abuse Prevention</h2>
                <p className="text-gray-700 mb-4">
                  Any attempt to manipulate or abuse the referral program will result in immediate disqualification and potential account suspension.
                </p>

                <div className="bg-brand-primary/10 rounded-xl p-6 mt-8">
                  <p className="text-gray-700">
                    <strong>Questions?</strong> Contact us at <a href="mailto:support@foodlab.com" className="text-brand-primary hover:underline">support@foodlab.com</a> for any referral-related queries.
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
