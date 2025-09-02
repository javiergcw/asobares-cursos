import HeroSection from '@/components/home/HeroSection';
import AboutCompany from '@/components/home/AboutCompany';
import ServicesSection from '@/components/home/ServicesSection';
import WorkProcessSection from '@/components/home/WorkProcessSection';
import VideoHeroSection from '@/components/home/VideoHeroSection';
import PartnersSection from '@/components/home/PartnersSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutCompany />
      <ServicesSection />
      <WorkProcessSection />
      <VideoHeroSection />
      <PartnersSection />
  
    </main>
  );
}