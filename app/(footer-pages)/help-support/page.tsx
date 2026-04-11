import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { LifeBuoy, Mail, Phone, MessageCircle, Clock } from 'lucide-react';

export default function HelpSupportPage() {
  const faqs = [
    {
      question: 'How do I place an order?',
      answer: 'Simply browse restaurants, select your items, add to cart, and checkout. You can pay via cash, card, or mobile wallet.',
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is confirmed, you can track it in real-time through the app with live updates on your delivery status.',
    },
    {
      question: 'What is the delivery time?',
      answer: 'Average delivery time is 30 minutes, but it may vary depending on restaurant preparation time and distance.',
    },
    {
      question: 'How do I cancel my order?',
      answer: 'You can cancel your order within 2 minutes of placing it. After that, please contact our support team.',
    },
    {
      question: 'What payment methods are available?',
      answer: 'We accept cash on delivery, credit/debit cards, bKash, Nagad, and other mobile wallets.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <Section background="brand">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
              Help & Support
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're here to help you 24/7 with any questions or concerns
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Contact Options */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <LifeBuoy className="w-8 h-8 text-brand-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-secondary mb-4">Need Assistance?</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Our customer support team is available 24/7 to help you with your orders, deliveries, and any questions you may have.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 p-6 rounded-xl">
                  <Mail className="w-10 h-10 text-brand-primary mb-4" />
                  <h3 className="font-bold text-brand-secondary mb-2">Email Support</h3>
                  <a href="mailto:support@foodlab.com" className="text-brand-primary hover:underline">
                    support@foodlab.com
                  </a>
                </div>

                <div className="bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 p-6 rounded-xl">
                  <Phone className="w-10 h-10 text-brand-accent mb-4" />
                  <h3 className="font-bold text-brand-secondary mb-2">Hotline</h3>
                  <a href="tel:+8801234567890" className="text-brand-accent hover:underline">
                    +880 1234-567890
                  </a>
                </div>

                <div className="bg-gradient-to-br from-brand-secondary/10 to-brand-secondary/5 p-6 rounded-xl">
                  <MessageCircle className="w-10 h-10 text-brand-secondary mb-4" />
                  <h3 className="font-bold text-brand-secondary mb-2">Live Chat</h3>
                  <p className="text-sm text-gray-600">Available in the app</p>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6 bg-brand-warning/10 p-4 rounded-lg">
                <Clock className="w-6 h-6 text-brand-warning flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">Support Hours:</span> 24/7 - We're always here to help!
                </p>
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h3 className="text-2xl font-bold text-brand-secondary mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                  >
                    <h4 className="font-bold text-brand-secondary text-lg mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}
