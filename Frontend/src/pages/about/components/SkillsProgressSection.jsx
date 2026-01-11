import { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsProgressSection = () => {
  const [animatedValues, setAnimatedValues] = useState({});

  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: 'Layout',
      color: 'primary',
      skills: [
        { name: 'React & Next.js', level: 95, years: 6 },
        { name: 'TypeScript', level: 90, years: 5 },
        { name: 'Tailwind CSS', level: 92, years: 4 },
        { name: 'State Management', level: 88, years: 6 },
        { name: 'Performance Optimization', level: 85, years: 5 }
      ]
    },
    {
      category: 'Backend Development',
      icon: 'Server',
      color: 'secondary',
      skills: [
        { name: 'Node.js & Express', level: 88, years: 6 },
        { name: 'RESTful APIs', level: 92, years: 7 },
        { name: 'GraphQL', level: 80, years: 3 },
        { name: 'Database Design', level: 85, years: 6 },
        { name: 'Authentication & Security', level: 87, years: 5 }
      ]
    },
    {
      category: 'DevOps & Tools',
      icon: 'Settings',
      color: 'accent',
      skills: [
        { name: 'Git & GitHub', level: 93, years: 8 },
        { name: 'Docker & Kubernetes', level: 78, years: 3 },
        { name: 'CI/CD Pipelines', level: 82, years: 4 },
        { name: 'AWS Services', level: 75, years: 3 },
        { name: 'Testing & QA', level: 88, years: 5 }
      ]
    },
    {
      category: 'Soft Skills',
      icon: 'Users',
      color: 'warning',
      skills: [
        { name: 'Team Leadership', level: 90, years: 4 },
        { name: 'Problem Solving', level: 95, years: 8 },
        { name: 'Communication', level: 92, years: 8 },
        { name: 'Project Management', level: 85, years: 5 },
        { name: 'Mentoring', level: 88, years: 4 }
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const values = {};
      skillCategories?.forEach(category => {
        category?.skills?.forEach(skill => {
          values[skill.name] = skill?.level;
        });
      });
      setAnimatedValues(values);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const getProgressColor = (color) => {
    const colors = {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      accent: 'bg-accent',
      warning: 'bg-warning'
    };
    return colors?.[color] || 'bg-primary';
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="BarChart3" size={16} color="var(--color-primary)" />
            <span className="text-sm font-mono text-primary">Skills & Expertise</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Technical Proficiency
            <span className="block text-primary mt-2">Progression</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive view of my technical capabilities and continuous growth across different domains.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {skillCategories?.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-card rounded-2xl shadow-lg p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 bg-${category?.color}/10 rounded-xl flex items-center justify-center`}>
                  <Icon name={category?.icon} size={24} color={`var(--color-${category?.color})`} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold">{category?.category}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category?.skills?.length} key competencies
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {category?.skills?.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{skill?.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{skill?.years}y exp</span>
                        <span className="text-sm font-bold text-foreground font-mono">
                          {animatedValues?.[skill?.name] || 0}%
                        </span>
                      </div>
                    </div>
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full ${getProgressColor(category?.color)} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${animatedValues?.[skill?.name] || 0}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Category Average</span>
                  <span className="font-bold text-foreground font-mono">
                    {Math.round(
                      category?.skills?.reduce((sum, skill) => sum + skill?.level, 0) / category?.skills?.length
                    )}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <Icon name="Award" size={32} className="mx-auto mb-3 text-primary" />
            <div className="text-3xl font-bold text-foreground mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Technologies Mastered</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <Icon name="TrendingUp" size={32} className="mx-auto mb-3 text-secondary" />
            <div className="text-3xl font-bold text-foreground mb-1">90%</div>
            <div className="text-sm text-muted-foreground">Average Proficiency</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <Icon name="BookOpen" size={32} className="mx-auto mb-3 text-accent" />
            <div className="text-3xl font-bold text-foreground mb-1">8+</div>
            <div className="text-sm text-muted-foreground">Years Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsProgressSection;