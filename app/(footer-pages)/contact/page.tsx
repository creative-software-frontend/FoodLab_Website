import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <Section background="brand">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're here to help! Get in touch with our team
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-brand-secondary mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-secondary mb-1">Corporate Office</h3>
                      <p className="text-gray-600">
                        House 123, Road 456<br />
                        Banani, Dhaka 1213<br />
                        Bangladesh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-secondary mb-1">Hotline</h3>
                      <a href="tel:+8801234567890" className="text-brand-primary hover:underline">
                        +880 1234-567890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-secondary mb-1">Email</h3>
                      <a href="mailto:support@foodlab.com" className="text-brand-primary hover:underline">
                        support@foodlab.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-secondary mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Sunday - Thursday: 9:30 AM - 6:30 PM<br />
                        Friday - Saturday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-brand-secondary mb-6">Follow Us</h2>
                <p className="text-gray-600 mb-6">
                  Stay connected with us on social media for the latest updates, offers, and food inspiration.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-white p-4 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                      <FaFacebookF className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-secondary">Facebook</h3>
                      <p className="text-sm text-gray-600">@FoodLabBD</p>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-white p-4 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center text-white">
                      <FaInstagram className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-secondary">Instagram</h3>
                      <p className="text-sm text-gray-600">@foodlab_bd</p>
                    </div>
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-white p-4 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center text-white">
                      <FaTwitter className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-secondary">Twitter</h3>
                      <p className="text-sm text-gray-600">@FoodLabBD</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-white p-4 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center text-white">
                      <FaLinkedinIn className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-secondary">LinkedIn</h3>
                      <p className="text-sm text-gray-600">FoodLab Express Limited</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}
