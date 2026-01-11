import { useState } from 'react';
import Icon from '../../../components/AppIcon';

const PhilosophySection = () => {
  const [activeTab, setActiveTab] = useState('approach');

  const philosophyTabs = [
    { id: 'approach', label: 'My Approach', icon: 'Compass' },
    { id: 'values', label: 'Core Values', icon: 'Heart' },
    { id: 'process', label: 'Work Process', icon: 'Workflow' }
  ];

  const philosophyContent = {
    approach: {
      title: 'Clean Code, Creative Solutions',
      description: 'I believe in writing code that not only works but tells a story. Every line should have purpose, every function should be clear, and every solution should be elegant. My approach combines technical rigor with creative problem-solving to deliver experiences that users love and developers can maintain.',
      principles: [
        {
          icon: 'Code2',
          title: 'Code as Craft',
          description: 'Writing maintainable, scalable code that stands the test of time'
        },
        {
          icon: 'Users',
          title: 'User-Centered Thinking',
          description: 'Every technical decision considers the end-user experience'
        },
        {
          icon: 'Lightbulb',
          title: 'Innovation Mindset',
          description: 'Constantly exploring new technologies and better solutions'
        },
        {
          icon: 'Shield',
          title: 'Quality First',
          description: 'Comprehensive testing and attention to detail in every project'
        }
      ]
    },
    values: {
      title: 'Building with Integrity',
      description: 'My work is guided by principles that ensure not just technical excellence, but meaningful impact. These values shape every project I undertake and every line of code I write.',
      principles: [
        {
          icon: 'Target',
          title: 'Purpose-Driven Development',
          description: 'Technology should solve real problems and create genuine value'
        },
        {
          icon: 'MessageSquare',
          title: 'Transparent Communication',
          description: 'Clear, honest dialogue with clients and team members'
        },
        {
          icon: 'TrendingUp',
          title: 'Continuous Growth',
          description: 'Committed to learning and evolving with the industry'
        },
        {
          icon: 'Handshake',
          title: 'Collaborative Spirit',
          description: 'Best solutions emerge from diverse perspectives working together'
        }
      ]
    },
    process: {
      title: 'From Concept to Completion',
      description: 'My development process is structured yet flexible, ensuring quality outcomes while adapting to project needs. Each phase builds upon the last, creating a solid foundation for success.',
      principles: [
        {
          icon: 'Search',
          title: 'Discovery & Research',
          description: 'Understanding requirements, users, and technical constraints'
        },
        {
          icon: 'Palette',
          title: 'Design & Architecture',
          description: 'Planning scalable solutions with clean architecture patterns'
        },
        {
          icon: 'Code',
          title: 'Development & Testing',
          description: 'Building with TDD approach and comprehensive test coverage'
        },
        {
          icon: 'Rocket',
          title: 'Deploy & Iterate',
          description: 'Continuous deployment with monitoring and improvements'
        }
      ]
    }
  };

  const activeContent = philosophyContent?.[activeTab];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <Icon name="Sparkles" size={16} color="var(--color-secondary)" />
            <span className="text-sm font-mono text-secondary">Development Philosophy</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Where Technical Expertise Meets
            <span className="block text-primary mt-2">User-Centered Thinking</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            My philosophy is simple: great code is both functional art and problem-solving craft. Here's what guides my work.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 md:gap-4 mb-8 justify-center">
            {philosophyTabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab?.id
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <Icon name={tab?.icon} size={18} />
                <span className="text-sm md:text-base">{tab?.label}</span>
              </button>
            ))}
          </div>

          <div className="bg-card rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 border border-border">
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">{activeContent?.title}</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {activeContent?.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeContent?.principles?.map((principle, index) => (
                <div
                  key={index}
                  className="p-6 bg-muted/50 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon name={principle?.icon} size={24} color="var(--color-primary)" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{principle?.title}</h4>
                  <p className="text-sm text-muted-foreground">{principle?.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block p-6 md:p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
            <blockquote className="text-lg md:text-xl font-medium text-foreground mb-4">
              "The best code is code that solves real problems elegantly,\n scales effortlessly, and brings joy to those who maintain it."
            </blockquote>
            <cite className="text-sm text-muted-foreground font-mono">- Ritesh Jawale</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;