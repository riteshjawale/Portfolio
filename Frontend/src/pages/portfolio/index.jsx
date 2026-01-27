import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import FloatingCTA from '../../components/ui/FloatingCTA';
import Icon from '../../components/AppIcon';
import ProjectCard from './components/ProjectCard';
import FilterBar from './components/FilterBar';
import ProjectTimeline from './components/ProjectTimeline';
import TechnologyStack from './components/TechnologyStack';
import StatsOverview from './components/StatsOverview';
import ViewToggle from './components/ViewToggle';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [currentView, setCurrentView] = useState('grid');

  const projects = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    description: "Complete overhaul of a legacy e-commerce system with modern React architecture, implementing micro-frontends and improving performance by 300%. Integrated advanced search, real-time inventory, and personalized recommendations.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12d7de71f-1764676026833.png",
    imageAlt: "Modern e-commerce website dashboard showing product listings with clean white interface and blue accent colors on desktop monitor",
    category: "web",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Redis", "Stripe"],
    year: 2026,
    duration: "6 months",
    linesOfCode: "45K+",
    difficulty: "Advanced",
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/example/ecommerce",
    stars: "234",
    isNew: true
  },
  {
    id: 2,
    title: "Healthcare Dashboard System",
    description: "HIPAA-compliant patient management system with real-time data visualization, appointment scheduling, and telemedicine integration. Built with security-first architecture and comprehensive audit logging.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1644aff77-1764659451775.png",
    imageAlt: "Healthcare dashboard interface displaying patient data charts and medical records with blue and white color scheme on laptop screen",
    category: "web",
    technologies: ["React", "TypeScript", "GraphQL", "PostgreSQL", "AWS", "Docker"],
    year: 2025,
    duration: "8 months",
    linesOfCode: "52K+",
    difficulty: "Expert",
    liveUrl: "https://example-healthcare.com",
    githubUrl: "https://github.com/example/healthcare",
    stars: "189"
  },
  {
    id: 3,
    title: "Real-Time Collaboration Tool",
    description: "Slack-inspired team collaboration platform with WebSocket-powered real-time messaging, file sharing, video calls, and project management features. Supports 1000+ concurrent users per workspace.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dd3f3a79-1767871228879.png",
    imageAlt: "Team collaboration software showing chat interface with multiple channels and user avatars in modern purple and white design",
    category: "web",
    technologies: ["React", "Node.js", "Socket.io", "Redis", "MongoDB", "WebRTC"],
    year: 2025,
    duration: "10 months",
    linesOfCode: "68K+",
    difficulty: "Expert",
    liveUrl: "https://example-collab.com",
    githubUrl: "https://github.com/example/collab",
    stars: "412"
  },
  {
    id: 4,
    title: "Financial Analytics Platform",
    description: "Enterprise-grade financial data visualization and reporting system with advanced charting, predictive analytics, and automated report generation. Processes millions of transactions daily.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e2f784e5-1766498706828.png",
    imageAlt: "Financial analytics dashboard displaying stock market graphs and trading data with dark theme and green accent colors",
    category: "web",
    technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Kafka"],
    year: 2025,
    duration: "7 months",
    linesOfCode: "41K+",
    difficulty: "Advanced",
    liveUrl: "https://example-finance.com",
    githubUrl: "https://github.com/example/finance",
    stars: "156"
  },
  {
    id: 5,
    title: "Social Media Management Suite",
    description: "Multi-platform social media scheduling and analytics tool supporting Instagram, Twitter, Facebook, and LinkedIn. Features AI-powered content suggestions and engagement optimization.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12e76516e-1766566337720.png",
    imageAlt: "Social media management interface showing post scheduler with multiple platform icons and content calendar in bright colorful design",
    category: "web",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "OpenAI"],
    year: 2024,
    duration: "5 months",
    linesOfCode: "38K+",
    difficulty: "Intermediate",
    liveUrl: "https://example-social.com",
    githubUrl: "https://github.com/example/social",
    stars: "278"
  },
  {
    id: 6,
    title: "Learning Management System",
    description: "Comprehensive online education platform with video streaming, interactive quizzes, progress tracking, and certification management. Supports 50,000+ concurrent students.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_146254e45-1764672099813.png",
    imageAlt: "Online learning platform showing video lecture interface with course materials and student dashboard in blue and orange theme",
    category: "web",
    technologies: ["React", "Node.js", "Express", "MongoDB", "AWS S3", "Cloudflare"],
    year: 2024,
    duration: "9 months",
    linesOfCode: "55K+",
    difficulty: "Advanced",
    liveUrl: "https://example-lms.com",
    githubUrl: "https://github.com/example/lms",
    stars: "321"
  },
  {
    id: 7,
    title: "Restaurant Ordering System",
    description: "Mobile-first food ordering and delivery platform with real-time order tracking, payment processing, and restaurant management dashboard. Handles 10,000+ daily orders.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1df2e6c90-1767793957066.png",
    imageAlt: "Restaurant food ordering app interface showing menu items with appetizing food photos and shopping cart in warm orange design",
    category: "mobile",
    technologies: ["React", "React Native", "Node.js", "PostgreSQL", "Stripe", "Google Maps"],
    year: 2024,
    duration: "6 months",
    linesOfCode: "42K+",
    difficulty: "Intermediate",
    liveUrl: "https://example-food.com",
    githubUrl: "https://github.com/example/food",
    stars: "198"
  },
  {
    id: 8,
    title: "Fitness Tracking Application",
    description: "Comprehensive fitness and wellness app with workout planning, nutrition tracking, progress analytics, and social features. Integrates with major wearable devices.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c29d13b2-1764639853707.png",
    imageAlt: "Fitness tracking mobile app showing workout statistics and exercise progress charts with vibrant green and black interface",
    category: "mobile",
    technologies: ["React Native", "TypeScript", "Firebase", "HealthKit", "Google Fit"],
    year: 2024,
    duration: "4 months",
    linesOfCode: "32K+",
    difficulty: "Intermediate",
    liveUrl: "https://example-fitness.com",
    githubUrl: "https://github.com/example/fitness",
    stars: "267"
  },
  {
    id: 9,
    title: "Property Management Portal",
    description: "End-to-end property management solution for landlords and tenants with rent collection, maintenance requests, document storage, and communication tools.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13cca0fa6-1766911110743.png",
    imageAlt: "Real estate property management dashboard showing building listings and tenant information with professional blue and gray design",
    category: "web",
    technologies: ["React", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "AWS"],
    year: 2023,
    duration: "7 months",
    linesOfCode: "48K+",
    difficulty: "Advanced",
    liveUrl: "https://example-property.com",
    githubUrl: "https://github.com/example/property",
    stars: "143"
  },
  {
    id: 10,
    title: "Event Management Platform",
    description: "Complete event planning and ticketing system with attendee management, virtual event support, networking features, and detailed analytics dashboard.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a7c045d3-1768131554866.png",
    imageAlt: "Event management platform interface displaying conference schedule and attendee registration with modern purple and white design",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Zoom API", "SendGrid"],
    year: 2023,
    duration: "5 months",
    linesOfCode: "36K+",
    difficulty: "Intermediate",
    liveUrl: "https://example-events.com",
    githubUrl: "https://github.com/example/events",
    stars: "187"
  },
  {
    id: 11,
    title: "Inventory Management System",
    description: "Enterprise inventory tracking and warehouse management solution with barcode scanning, automated reordering, and multi-location support for retail chains.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12ce4ac9b-1764658762607.png",
    imageAlt: "Warehouse inventory management system showing stock levels and product tracking interface with clean organized layout",
    category: "web",
    technologies: ["React", "TypeScript", "GraphQL", "PostgreSQL", "Redis", "Docker"],
    year: 2023,
    duration: "8 months",
    linesOfCode: "51K+",
    difficulty: "Advanced",
    githubUrl: "https://github.com/example/inventory",
    stars: "165"
  },
  {
    id: 12,
    title: "Travel Booking Platform",
    description: "Comprehensive travel planning and booking system with flight, hotel, and activity reservations. Features AI-powered itinerary suggestions and price tracking.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15922ff59-1767581891966.png",
    imageAlt: "Travel booking website showing destination photos and flight search interface with vibrant blue sky and beach imagery",
    category: "web",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Amadeus API", "Stripe"],
    year: 2023,
    duration: "6 months",
    linesOfCode: "44K+",
    difficulty: "Advanced",
    liveUrl: "https://example-travel.com",
    githubUrl: "https://github.com/example/travel",
    stars: "298"
  }];


  const categories = [
  { value: 'all', label: 'All Projects', count: projects?.length },
  { value: 'web', label: 'Web Apps', count: projects?.filter((p) => p?.category === 'web')?.length },
  { value: 'mobile', label: 'Mobile Apps', count: projects?.filter((p) => p?.category === 'mobile')?.length }];


  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects;

    if (selectedCategory !== 'all') {
      filtered = filtered?.filter((project) => project?.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery?.toLowerCase();
      filtered = filtered?.filter((project) =>
      project?.title?.toLowerCase()?.includes(query) ||
      project?.description?.toLowerCase()?.includes(query) ||
      project?.technologies?.some((tech) => tech?.toLowerCase()?.includes(query))
      );
    }

    const sorted = [...filtered]?.sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return b?.year - a?.year;
        case 'popular':
          return parseInt(b?.stars || 0) - parseInt(a?.stars || 0);
        case 'alphabetical':
          return a?.title?.localeCompare(b?.title);
        default:
          return 0;
      }
    });

    return sorted;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <>
      <Helmet>
        <title>Portfolio - Ritesh Jawale | React Developer Projects & Case Studies</title>
        <meta name="description" content="Explore my comprehensive portfolio of web and mobile applications. View live demos, technical breakdowns, and detailed case studies showcasing React, TypeScript, and full-stack development expertise." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <FloatingCTA />

        <main className="flex-1 pt-16">
          

          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12 lg:py-16">
            <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 mb-8">
              <div className="flex-1 w-full">
                <FilterBar
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  sortBy={sortBy}
                  onSortChange={setSortBy} />

              </div>
              <ViewToggle currentView={currentView} onViewChange={setCurrentView} />
            </div>

            {filteredAndSortedProjects?.length === 0 ?
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 md:py-20">

                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Icon name="Search" size={32} className="text-muted-foreground" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-mono text-foreground mb-2">
                  No projects found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters or search query
                </p>
              </motion.div> :

            <>
                {currentView === 'grid' ?
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                    {filteredAndSortedProjects?.map((project, index) =>
                <ProjectCard key={project?.id} project={project} index={index} />
                )}
                  </div> :

              <div className="mb-12">
                    <ProjectTimeline projects={filteredAndSortedProjects} />
                  </div>
              }
              </>
            }

            <TechnologyStack projects={projects} />
          </div>

          {/* <div className="bg-gradient-to-b from-primary/5 to-transparent py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto mb-8 md:mb-12">

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-mono font-semibold mb-4">
                  <Icon name="Briefcase" size={16} />
                  <span>Project Showcase</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-foreground mb-4">
                  Portfolio & Case Studies
                </h1>
                <p className="text-base md:text-lg text-muted-foreground">
                  Explore my journey through {projects?.length} production-ready projects. Each showcases clean code, creative problem-solving, and user-centered design principles.
                </p>
              </motion.div>

              <StatsOverview projects={projects} />
            </div>
          </div> */}

          {/* <div className="bg-gradient-to-t from-primary/5 to-transparent py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center">

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono text-foreground mb-4">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-8">
                  Let's collaborate on your next project. I bring technical expertise, creative problem-solving, and a commitment to excellence.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="/contact" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-primary-foreground rounded-lg font-mono font-semibold hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300">
                      Start a Project
                    </button>
                  </a>
                  <a href="https://github.com/riteshjawale" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-8 py-3 bg-card border border-border text-foreground rounded-lg font-mono font-semibold hover:border-primary/50 transition-colors duration-200 flex items-center justify-center gap-2">
                      <Icon name="Github" size={20} />
                      <span>View GitHub</span>
                    </button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div> */}
        </main>

        <Footer />
      </div>
    </>);

};

export default Portfolio;