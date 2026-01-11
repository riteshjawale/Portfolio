import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedProjects = () => {
  const navigate = useNavigate();
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Full Stack Development',
    description: 'Built a scalable e-commerce platform handling 10,000+ daily transactions with real-time inventory management, payment gateway integration, and advanced analytics dashboard.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d6ec7e4a-1764660533966.png",
    imageAlt: 'Modern e-commerce website dashboard displaying colorful product analytics graphs and sales metrics on large desktop monitor with clean white interface',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    metrics: [
    { label: 'Performance', value: '98/100', icon: 'Gauge' },
    { label: 'Uptime', value: '99.9%', icon: 'Activity' },
    { label: 'Users', value: '50K+', icon: 'Users' }],

    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/riteshjawale'
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    category: 'Enterprise Solution',
    description: 'Developed HIPAA-compliant healthcare management system with patient records, appointment scheduling, telemedicine integration, and automated billing workflows.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1764b2c2a-1764663845672.png",
    imageAlt: 'Professional healthcare dashboard interface showing patient appointment calendar, medical records, and health monitoring charts on modern tablet device in clinical setting',
    technologies: ['Next.js', 'PostgreSQL', 'Docker', 'Redis', 'WebRTC'],
    metrics: [
    { label: 'Security', value: 'A+', icon: 'Shield' },
    { label: 'Response', value: '<200ms', icon: 'Zap' },
    { label: 'Hospitals', value: '25+', icon: 'Building2' }],

    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/riteshjawale'
  },
  {
    id: 3,
    title: 'Real-Time Analytics Dashboard',
    category: 'Data Visualization',
    description: 'Created interactive analytics dashboard processing millions of data points in real-time with custom visualizations, predictive insights, and automated reporting.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11b6b117c-1767258777980.png",
    imageAlt: 'Sophisticated data analytics dashboard with multiple colorful charts including line graphs, bar charts, and pie charts displaying business metrics on large widescreen monitor',
    technologies: ['React', 'D3.js', 'WebSocket', 'Python', 'Kubernetes'],
    metrics: [
    { label: 'Data Points', value: '10M+', icon: 'Database' },
    { label: 'Latency', value: '<50ms', icon: 'Timer' },
    { label: 'Accuracy', value: '99.5%', icon: 'Target' }],

    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/riteshjawale'
  }];


  const currentProject = projects?.[activeProject];

  const handlePrevious = () => {
    setActiveProject((prev) => prev === 0 ? projects?.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setActiveProject((prev) => prev === projects?.length - 1 ? 0 : prev + 1);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world solutions that combine technical excellence with business impact
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-lg shadow-xl border border-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-80 lg:h-auto min-h-[400px] overflow-hidden">
                <Image
                  src={currentProject?.image}
                  alt={currentProject?.imageAlt}
                  className="w-full h-full object-cover" />

                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {currentProject?.category}
                </div>
              </div>

              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{currentProject?.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {currentProject?.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {currentProject?.technologies?.map((tech, index) =>
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted text-foreground rounded-full text-xs font-mono">

                        {tech}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {currentProject?.metrics?.map((metric, index) =>
                    <div key={index} className="text-center">
                        <div className="flex justify-center mb-2">
                          <Icon name={metric?.icon} size={20} className="text-primary" />
                        </div>
                        <div className="text-lg md:text-xl font-bold">{metric?.value}</div>
                        <div className="text-xs text-muted-foreground">{metric?.label}</div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Button
                    variant="default"
                    iconName="ExternalLink"
                    iconPosition="right"
                    onClick={() => window.open(currentProject?.liveUrl, '_blank')}
                    className="flex-1">

                    View Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    iconName="Github"
                    iconPosition="left"
                    onClick={() => window.open(currentProject?.githubUrl, '_blank')}
                    className="flex-1">

                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6 md:mt-8">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors duration-200"
              aria-label="Previous project">

              <Icon name="ChevronLeft" size={20} />
            </button>

            <div className="flex items-center gap-2">
              {projects?.map((_, index) =>
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                index === activeProject ? 'w-8 bg-primary' : 'w-2 bg-muted'}`
                }
                aria-label={`Go to project ${index + 1}`} />

              )}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors duration-200"
              aria-label="Next project">

              <Icon name="ChevronRight" size={20} />
            </button>
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              iconName="Grid"
              iconPosition="left"
              onClick={() => navigate('/portfolio')}>

              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default FeaturedProjects;