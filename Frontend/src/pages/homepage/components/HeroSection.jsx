import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const codeSnippets = [
    `const developer = {\n  name: "Ritesh Jawale",\n  role: "Full Stack Developer",\n  passion: "Building digital experiences"\n};`,
    `const skills = [\n  "React", "Node.js", "TypeScript",\n  "MongoDB", "AWS", "Docker"\n];`,
    `function createImpact() {\n  return code + creativity + dedication;\n}`
  ];

  useEffect(() => {
    const currentSnippet = codeSnippets?.[currentCodeIndex];
    let charIndex = 0;

    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (charIndex <= currentSnippet?.length) {
          setDisplayedCode(currentSnippet?.slice(0, charIndex));
          charIndex++;
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets?.length);
            setDisplayedCode('');
            setIsTyping(true);
          }, 2000);
          clearInterval(typingInterval);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [currentCodeIndex, isTyping]);

  const visitorTypes = [
    {
      icon: 'Briefcase',
      title: 'Hiring Managers',
      description: 'Explore my technical expertise and project portfolio',
      action: 'View Portfolio',
      path: '/portfolio',
      color: 'var(--color-primary)'
    },
    {
      icon: 'Rocket',
      title: 'Potential Clients',
      description: 'Start your next digital project with confidence',
      action: 'Start Project',
      path: '/contact',
      color: 'var(--color-secondary)'
    },
    {
      icon: 'Code2',
      title: 'Fellow Developers',
      description: 'Dive into code examples and technical insights',
      action: 'Explore Code',
      path: '/blog',
      color: 'var(--color-accent)'
    }
  ];

  return (
    <section className="relative py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono">
              <Icon name="Sparkles" size={16} />
              <span>Available for new opportunities</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Building Digital
              <span className="block text-primary mt-2">Experiences That Matter</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl">
              Full-stack developer specializing in React, Node.js, and cloud architecture. I transform complex problems into elegant, scalable solutions that users love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Briefcase"
                iconPosition="left"
                onClick={() => navigate('/portfolio')}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Mail"
                iconPosition="left"
                onClick={() => navigate('/contact')}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={20} className="text-success" />
                <span className="text-sm text-muted-foreground">50+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Star" size={20} className="text-warning" />
                <span className="text-sm text-muted-foreground">98% Client Satisfaction</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-code-bg rounded-lg p-6 md:p-8 shadow-2xl border border-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-error" />
                <div className="w-3 h-3 rounded-full bg-warning" />
                <div className="w-3 h-3 rounded-full bg-success" />
                <span className="ml-auto text-xs text-code-comment font-mono">portfolio.js</span>
              </div>
              
              <pre className="font-mono text-sm text-code-text overflow-x-auto">
                <code>{displayedCode}<span className="animate-pulse">|</span></code>
              </pre>
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
          </div>
        </div>

        <div className="mt-12 lg:mt-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-mono mb-4">
              Find What You're Looking For
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're looking to hire, start a project, or explore technical content, I've got you covered with tailored experiences for every visitor.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visitorTypes?.map((type, index) => (
              <div
                key={index}
                onClick={() => navigate(type?.path)}
                className={`group relative overflow-hidden rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                  index === 0 
                    ? 'bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 hover:from-blue-100 hover:to-blue-200'
                    : index === 1
                    ? 'bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 hover:from-emerald-100 hover:to-emerald-200'
                    : 'bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 hover:from-purple-100 hover:to-purple-200'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                  index === 0 
                    ? 'from-blue-400 to-cyan-400'
                    : index === 1
                    ? 'from-emerald-400 to-teal-400'
                    : 'from-purple-400 to-pink-400'
                }`} />
                
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${
                  index === 0 
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg'
                    : index === 1
                    ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg'
                    : 'bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg'
                }`}>
                  <Icon name={type?.icon} size={24} />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2">{type?.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{type?.description}</p>
                  <div className={`flex items-center gap-2 text-sm font-medium group-hover:${
                      index === 0 
                        ? 'text-blue-600'
                        : index === 1
                        ? 'text-emerald-600'
                        : 'text-purple-600'
                    } transition-colors duration-200`}>
                    <span>{type?.action}</span>
                    <Icon name="ArrowRight" size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;