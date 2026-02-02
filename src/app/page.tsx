import Hero from '@/components/Hero';
import Features from '@/components/Features';
import DashboardPreview from '@/components/DashboardPreview';
import Specs from '@/components/Specs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <DashboardPreview />
      <Specs />
      <Footer />
    </main>
  );
}
