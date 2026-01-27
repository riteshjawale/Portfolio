import { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsVisualization = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      icon: 'Layout',
      title: 'Frontend Development',
      color: 'var(--color-primary)',
      skills: [
        { name: 'React', level: 95, icon: 'Component' },
        { name: 'TypeScript', level: 90, icon: 'Code' },
        { name: 'Tailwind CSS', level: 92, icon: 'Palette' },
        { name: 'Next.js', level: 88, icon: 'Zap' },
        { name: 'Redux', level: 85, icon: 'Database' }
      ]
    },
    backend: {
      icon: 'Server',
      title: 'Backend Development',
      color: 'var(--color-secondary)',
      skills: [
        { name: 'Node.js', level: 93, icon: 'Cpu' },
        { name: 'Express', level: 90, icon: 'Route' },
        { name: 'MongoDB', level: 87, icon: 'Database' },
        { name: 'PostgreSQL', level: 85, icon: 'Table' },
        { name: 'REST APIs', level: 94, icon: 'Link' }
      ]
    },
    devops: {
      icon: 'Cloud',
      title: 'DevOps & Cloud',
      color: 'var(--color-accent)',
      skills: [
        { name: 'AWS', level: 88, icon: 'CloudCog' },
        { name: 'Docker', level: 86, icon: 'Container' },
        { name: 'CI/CD', level: 84, icon: 'GitBranch' },
        { name: 'Kubernetes', level: 78, icon: 'Network' },
        { name: 'Nginx', level: 82, icon: 'Server' }
      ]
    },
    tools: {
      icon: 'Wrench',
      title: 'Tools & Practices',
      color: 'var(--color-warning)',
      skills: [
        { name: 'Git', level: 96, icon: 'GitBranch' },
        { name: 'VS Code', level: 98, icon: 'Code2' },
        { name: 'Agile/Scrum', level: 90, icon: 'Users' },
        { name: 'Testing', level: 87, icon: 'CheckCircle' },
        { name: 'Performance', level: 89, icon: 'Gauge' }
      ]
    }
  };

  const currentCategory = skillCategories?.[activeCategory];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical Expertise
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
          {Object.entries(skillCategories)?.map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-card text-muted-foreground hover:bg-muted'
              }`}
            >
              <Icon name={category?.icon} size={18} />
              <span className="text-sm md:text-base">{category?.title}</span>
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-lg border border-border">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${currentCategory?.color}20` }}
              >
                <Icon name={currentCategory?.icon} size={24} color={currentCategory?.color} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">{currentCategory?.title}</h3>
            </div>

            <div className="space-y-6">
              {currentCategory?.skills?.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon name={skill?.icon} size={16} className="text-muted-foreground" />
                      <span className="font-medium text-sm md:text-base">{skill?.name}</span>
                    </div>
                    <span className="text-sm font-mono text-muted-foreground">{skill?.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill?.level}%`,
                        backgroundColor: currentCategory?.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12 max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-4 md:p-6 text-center border border-border">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">2+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="bg-card rounded-lg p-4 md:p-6 text-center border border-border">
            <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">8+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="bg-card rounded-lg p-4 md:p-6 text-center border border-border">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-2">8+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="bg-card rounded-lg p-4 md:p-6 text-center border border-border">
            <div className="text-2xl md:text-3xl font-bold text-warning mb-2">15+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsVisualization;