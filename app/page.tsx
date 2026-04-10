import { Logo } from '@/components/shared/Logo';
import { Section } from '@/components/shared/Section';
import { brandColors, gradients } from '@/lib/utils';

export default function Home() {
  return (
    <main>
      {/* Brand Colors Demo */}
      <Section background="white">
        <div className="space-y-8">
          <Logo size="lg" />
          
          <div className="space-y-4">
            <h1 className="text-brand-primary">Brand Primary Color</h1>
            <h2 className="text-foodi-orange">Foodi Orange Color</h2>
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-brand-primary rounded-lg"></div>
              <div className="w-20 h-20 bg-brand-secondary rounded-lg"></div>
              <div className="w-20 h-20 bg-brand-accent rounded-lg"></div>
            </div>
          </div>
          
          <div className={gradients.primary + " p-8 rounded-xl text-white"}>
            <h3>Gradient Primary</h3>
            <p>This is a beautiful gradient background</p>
          </div>
        </div>
      </Section>
    </main>
  );
}