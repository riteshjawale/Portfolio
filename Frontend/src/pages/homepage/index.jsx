import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import FloatingCTA from '../../components/ui/FloatingCTA';
import HeroSection from './components/HeroSection';
import SkillsVisualization from './components/SkillsVisualization';
import FeaturedProjects from './components/FeaturedProjects';
import TestimonialsSection from './components/TestimonialsSection';
import GitHubActivity from './components/GitHubActivity';
import PerformanceMetrics from './components/PerformanceMetrics';
import CTASection from './components/CTASection';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Ritesh Jawale - Full Stack Developer | React & Node.js Expert</title>
        <meta
          name="description"
          content="Professional full-stack developer specializing in React, Node.js, and cloud architecture. Building scalable web applications with 8+ years of experience."
        />
        <meta
          name="keywords"
          content="full stack developer, react developer, nodejs developer, web development, portfolio, software engineer"
        />
        <meta property="og:title" content="Ritesh Jawale - Full Stack Developer Portfolio" />
        <meta
          property="og:description"
          content="Explore my portfolio of 50+ successful projects. Specializing in React, Node.js, and modern web technologies."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://devportfolio.com/homepage" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 pt-16">
          <HeroSection />
          <SkillsVisualization />
          <FeaturedProjects />
          <TestimonialsSection />
          <GitHubActivity />
          <PerformanceMetrics />
          <CTASection />
        </main>

        <Footer />
        <FloatingCTA />
      </div>
    </>
  );
};

export default Homepage;