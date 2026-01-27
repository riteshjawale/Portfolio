import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import FloatingCTA from '../../components/ui/FloatingCTA';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import TimelineSection from './components/TimelineSection';
import SkillsProgressSection from './components/SkillsProgressSection';
import ToolsSection from './components/ToolsSection';
import BehindScenesSection from './components/BehindScenesSection';
import CTASection from './components/CTASection';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <HeroSection />
          <PhilosophySection />
          <TimelineSection />
          <SkillsProgressSection />
          <ToolsSection />
          <BehindScenesSection />
          <CTASection />
        </div>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default About;