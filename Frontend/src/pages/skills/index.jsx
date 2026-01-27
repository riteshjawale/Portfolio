import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import FloatingCTA from '../../components/ui/FloatingCTA';
import Icon from '../../components/AppIcon';
import SkillCategory from './components/SkillCategory';
import CodePlayground from './components/CodePlayground';
import CertificationCard from './components/CertificationCard';
import TechnologyStack from './components/TechnologyStack';
import SkillAssessment from './components/SkillAssessment';
import LearningPath from './components/LearningPath';

const Skills = () => {
  const skillCategories = [
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: [
    {
      id: 1,
      name: "React.js",
      proficiency: 95,
      experience: "5+ years",
      certified: true,
      description: "Expert in building scalable React applications with modern patterns including hooks, context, and custom hooks. Specialized in performance optimization and component architecture.",
      projects: [
      "E-commerce platform with 100k+ daily users",
      "Real-time collaboration tool with WebSocket integration",
      "Design system library used across 15+ applications"]

    },
    {
      id: 2,
      name: "Next.js",
      proficiency: 90,
      experience: "3+ years",
      certified: true,
      description: "Proficient in server-side rendering, static site generation, and API routes. Experience with App Router and Server Components.",
      projects: [
      "SEO-optimized marketing website with 40% faster load times",
      "Multi-tenant SaaS application with dynamic routing"]

    },
    {
      id: 3,
      name: "TypeScript",
      proficiency: 88,
      experience: "4+ years",
      certified: false,
      description: "Strong typing skills with advanced generics, utility types, and type inference. Focus on type safety and developer experience.",
      projects: [
      "Type-safe API client library",
      "Complex form validation system with Zod integration"]

    },
    {
      id: 4,
      name: "Tailwind CSS",
      proficiency: 92,
      experience: "3+ years",
      certified: false,
      description: "Expert in utility-first CSS with custom design systems, responsive design, and dark mode implementation.",
      projects: [
      "Component library with 50+ reusable components",
      "Responsive dashboard with complex grid layouts"]

    }]

  },
  {
    category: "Backend Development",
    icon: "Server",
    skills: [
    {
      id: 5,
      name: "Node.js",
      proficiency: 85,
      experience: "4+ years",
      certified: true,
      description: "Experienced in building RESTful APIs, microservices, and real-time applications with Express and Fastify.",
      projects: [
      "High-performance API handling 10k requests/second",
      "WebSocket server for real-time chat application"]

    },
    {
      id: 6,
      name: "PostgreSQL",
      proficiency: 80,
      experience: "3+ years",
      certified: false,
      description: "Proficient in database design, query optimization, and complex joins. Experience with Prisma ORM.",
      projects: [
      "Multi-tenant database architecture",
      "Data migration system for legacy applications"]

    },
    {
      id: 7,
      name: "GraphQL",
      proficiency: 75,
      experience: "2+ years",
      certified: false,
      description: "Skilled in building GraphQL APIs with Apollo Server, implementing subscriptions and optimizing queries.",
      projects: [
      "Unified API gateway for microservices",
      "Real-time data synchronization system"]

    }]

  },
  {
    category: "DevOps & Tools",
    icon: "Settings",
    skills: [
    {
      id: 8,
      name: "Docker",
      proficiency: 78,
      experience: "3+ years",
      certified: true,
      description: "Experienced in containerization, multi-stage builds, and Docker Compose for local development.",
      projects: [
      "Containerized microservices architecture",
      "Development environment with 12 interconnected services"]

    },
    {
      id: 9,
      name: "Git & GitHub",
      proficiency: 93,
      experience: "6+ years",
      certified: false,
      description: "Expert in version control, branching strategies, and CI/CD workflows with GitHub Actions.",
      projects: [
      "Automated deployment pipeline with zero-downtime releases",
      "Code review system with automated quality checks"]

    },
    {
      id: 10,
      name: "AWS",
      proficiency: 70,
      experience: "2+ years",
      certified: false,
      description: "Working knowledge of EC2, S3, Lambda, and CloudFront. Experience with serverless architectures.",
      projects: [
      "Serverless image processing pipeline",
      "Static website hosting with CDN optimization"]

    }]

  }];


  const certifications = [
  {
    id: 1,
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "January 2025",
    expiryDate: "January 2028",
    credentialId: "AWS-DEV-2025-001",
    verified: true,
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_155b69cf7-1764671097554.png",
    logoAlt: "AWS certification badge with orange and white cloud logo on dark background",
    skills: ["AWS Lambda", "DynamoDB", "S3", "CloudFormation"],
    verificationUrl: "https://aws.amazon.com/verification"
  },
  {
    id: 2,
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Facebook)",
    date: "November 2024",
    credentialId: "META-FE-2024-456",
    verified: true,
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_13405cc64-1764663120006.png",
    logoAlt: "Meta company logo with blue gradient background and white text",
    skills: ["React", "JavaScript", "HTML/CSS", "UI/UX"],
    verificationUrl: "https://coursera.org/verify"
  },
  {
    id: 3,
    name: "MongoDB Certified Developer Associate",
    issuer: "MongoDB University",
    date: "August 2024",
    expiryDate: "August 2027",
    credentialId: "MONGO-DEV-2024-789",
    verified: true,
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_14f5c244f-1766597613017.png",
    logoAlt: "MongoDB leaf logo in green color on white circular background",
    skills: ["MongoDB", "Aggregation", "Indexing", "Schema Design"],
    verificationUrl: "https://university.mongodb.com/verify"
  },
  {
    id: 4,
    name: "Google Cloud Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "June 2024",
    expiryDate: "June 2026",
    credentialId: "GCP-DEV-2024-321",
    verified: true,
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1696a4234-1764661522844.png",
    logoAlt: "Google Cloud logo with multicolor cloud icon and text on white background",
    skills: ["GCP", "Cloud Functions", "Cloud Run", "Kubernetes"],
    verificationUrl: "https://cloud.google.com/certification/verify"
  }];


  const technologyStacks = [
  {
    category: "Frontend Ecosystem",
    icon: "Layers",
    description: "Modern UI development tools and frameworks",
    technologies: [
    {
      id: 1,
      name: "React",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_12aac6fe8-1767817749042.png",
      logoAlt: "React logo with blue atom symbol on dark background",
      proficiency: 5,
      experience: "5+ years",
      description: "Component-based UI library for building interactive interfaces"
    },
    {
      id: 2,
      name: "Next.js",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_158c01ea3-1764675849265.png",
      logoAlt: "Next.js logo with black and white minimalist design",
      proficiency: 5,
      experience: "3+ years",
      description: "React framework with server-side rendering and static generation"
    },
    {
      id: 3,
      name: "Tailwind",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f5ebfc80-1764676013098.png",
      logoAlt: "Tailwind CSS logo with teal and blue gradient wave design",
      proficiency: 5,
      experience: "3+ years",
      description: "Utility-first CSS framework for rapid UI development"
    },
    {
      id: 4,
      name: "Vite",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1c6b755c8-1766757338813.png",
      logoAlt: "Vite logo with purple and yellow lightning bolt design",
      proficiency: 4,
      experience: "2+ years",
      description: "Next-generation frontend build tool with instant HMR"
    },
    {
      id: 5,
      name: "Redux",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_109fd5792-1766853487648.png",
      logoAlt: "Redux logo with purple atom symbol on white background",
      proficiency: 4,
      experience: "4+ years",
      description: "Predictable state container for JavaScript applications"
    }]

  },
  {
    category: "Backend & Database",
    icon: "Database",
    description: "Server-side technologies and data management",
    technologies: [
    {
      id: 6,
      name: "Node.js",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1aff299a7-1765633973849.png",
      logoAlt: "Node.js logo with green hexagon and white text",
      proficiency: 4,
      experience: "4+ years",
      description: "JavaScript runtime for building scalable server applications"
    },
    {
      id: 7,
      name: "Express",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1e3b4ed5f-1764675849826.png",
      logoAlt: "Express.js logo with minimalist black text on white background",
      proficiency: 4,
      experience: "4+ years",
      description: "Fast, minimalist web framework for Node.js"
    },
    {
      id: 8,
      name: "PostgreSQL",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_160347104-1764658016622.png",
      logoAlt: "PostgreSQL elephant logo in blue color on white background",
      proficiency: 4,
      experience: "3+ years",
      description: "Advanced open-source relational database system"
    },
    {
      id: 9,
      name: "MongoDB",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_14f5c244f-1766597613017.png",
      logoAlt: "MongoDB leaf logo in green color on dark background",
      proficiency: 4,
      experience: "3+ years",
      description: "NoSQL database for modern application development"
    },
    {
      id: 10,
      name: "Prisma",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_11f38c345-1768131552687.png",
      logoAlt: "Prisma logo with geometric shapes in blue and white",
      proficiency: 3,
      experience: "2+ years",
      description: "Next-generation ORM for Node.js and TypeScript"
    }]

  },
  {
    category: "DevOps & Cloud",
    icon: "Cloud",
    description: "Deployment, hosting, and infrastructure tools",
    technologies: [
    {
      id: 11,
      name: "Docker",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_19331ecd5-1764987651033.png",
      logoAlt: "Docker whale logo in blue color carrying containers",
      proficiency: 4,
      experience: "3+ years",
      description: "Platform for developing and running containerized applications"
    },
    {
      id: 12,
      name: "AWS",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_104ef975a-1766538012498.png",
      logoAlt: "AWS logo with orange smile arrow and black text",
      proficiency: 3,
      experience: "2+ years",
      description: "Comprehensive cloud computing platform by Amazon"
    },
    {
      id: 13,
      name: "Vercel",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1cc175c33-1764807041079.png",
      logoAlt: "Vercel triangle logo in black on white background",
      proficiency: 5,
      experience: "3+ years",
      description: "Platform for frontend deployment with instant global CDN"
    },
    {
      id: 14,
      name: "GitHub",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1825f97c0-1767268217805.png",
      logoAlt: "GitHub octocat logo in black silhouette on white background",
      proficiency: 5,
      experience: "6+ years",
      description: "Version control and collaboration platform for developers"
    },
    {
      id: 15,
      name: "Nginx",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_16882a695-1765085731158.png",
      logoAlt: "Nginx logo with green text and geometric design",
      proficiency: 3,
      experience: "2+ years",
      description: "High-performance web server and reverse proxy"
    }]

  }];


  const skillAssessments = [
  {
    id: 1,
    title: "React (Advanced)",
    platform: "HackerRank",
    score: 95,
    date: "December 2024",
    percentile: 5,
    skills: ["React Hooks", "Context API", "Performance Optimization"],
    highlights: [
    "Scored in top 5% globally",
    "Perfect score on component lifecycle questions",
    "Completed advanced optimization challenges"],

    certificateUrl: "https://hackerrank.com/certificates/react-advanced"
  },
  {
    id: 2,
    title: "JavaScript (Expert)",
    platform: "Codility",
    score: 92,
    date: "November 2024",
    percentile: 8,
    skills: ["ES6+", "Async Programming", "Data Structures"],
    highlights: [
    "100% on algorithm challenges",
    "Optimal solutions for all problems",
    "Fastest completion time in cohort"],

    certificateUrl: "https://codility.com/certificates/javascript"
  },
  {
    id: 3,
    title: "TypeScript Fundamentals",
    platform: "LinkedIn Learning",
    score: 88,
    date: "October 2024",
    skills: ["Type System", "Generics", "Advanced Types"],
    highlights: [
    "Completed all practical exercises",
    "Built type-safe API client",
    "Mastered utility types"]

  },
  {
    id: 4,
    title: "Node.js Backend Development",
    platform: "Pluralsight",
    score: 85,
    date: "September 2024",
    percentile: 15,
    skills: ["Express.js", "REST APIs", "Authentication"],
    highlights: [
    "Built production-ready API",
    "Implemented JWT authentication",
    "Optimized database queries"],

    certificateUrl: "https://pluralsight.com/certificates/nodejs"
  }];


  return (
    <>
      <Helmet>
        <title>Skills & Expertise - Ritesh Jawale</title>
        <meta
          name="description"
          content="Explore my technical skills, certifications, and continuous learning journey in web development. Interactive demonstrations of React, JavaScript, TypeScript, and modern web technologies." />

      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-2">
          {/* <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                  <Icon name="Sparkles" size={16} />
                  <span>Technical Expertise</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono">
                  Skills & Capabilities
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                  A comprehensive showcase of my technical skills, certifications, and continuous learning journey. 
                  Explore interactive demonstrations and real-world applications of modern web technologies.
                </p>
              </div>
            </div>
          </section> */}

          <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <div className="max-w-7xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
                {/* <div className="text-center space-y-3">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono">
                    Interactive Code Playground
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                    Experiment with live code examples demonstrating my technical capabilities
                  </p>
                </div>

                <CodePlayground /> */}

                <div className="text-center space-y-3 pt-8">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono">
                    Core Competencies
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                    Detailed breakdown of my technical skills with proficiency levels and real-world experience
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  {skillCategories?.map((category) =>
                  <SkillCategory
                    key={category?.category}
                    category={category?.category}
                    skills={category?.skills}
                    icon={category?.icon} />

                  )}
                </div>

                <div className="text-center space-y-3 pt-8">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono">
                    Technology Stack
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                    Tools and frameworks I use to build modern web applications
                  </p>
                </div>

                <div className="space-y-6 md:space-y-8">
                  {technologyStacks?.map((stack) =>
                  <TechnologyStack key={stack?.category} stack={stack} />
                  )}
                </div>

                <div className="text-center space-y-3 pt-8">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono">
                    Professional Certifications
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                    Verified credentials and professional development achievements
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {certifications?.map((cert) =>
                  <CertificationCard key={cert?.id} certification={cert} />
                  )}
                </div>

                <div className="text-center space-y-3 pt-8">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono">
                    Skill Assessments
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                    Verified technical assessments from leading platforms
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {skillAssessments?.map((assessment) =>
                  <SkillAssessment key={assessment?.id} assessment={assessment} />
                  )}
                </div>

                <div className="text-center space-y-3 pt-8">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono">
                    Continuous Learning
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                    My ongoing journey to master new technologies and deepen existing expertise
                  </p>
                </div>

                <LearningPath />

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg text-center space-y-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <Icon name="Rocket" size={32} color="var(--color-primary)" />
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-mono">
                    Ready to Build Something Amazing?
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                    Let's discuss how my skills can help bring your project to life. 
                    I'm always excited to tackle new challenges and learn new technologies.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <a
                      href="/contact"
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-primary-foreground rounded-lg font-medium hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">

                      <Icon name="MessageSquare" size={20} />
                      <span>Start a Conversation</span>
                    </a>
                    <a
                      href="/portfolio"
                      className="px-6 py-3 bg-card border border-border rounded-lg font-medium hover:bg-muted transition-colors duration-200 flex items-center gap-2">

                      <Icon name="Briefcase" size={20} />
                      <span>View My Work</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingCTA />
      </div>
    </>);

};

export default Skills;