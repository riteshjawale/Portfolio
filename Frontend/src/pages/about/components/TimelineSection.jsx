import { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const [activeYear, setActiveYear] = useState(2025);

  const timeline = [
    {
      year: 2025,
      title: 'Senior Full Stack Architect',
      company: 'TechVision Solutions',
      type: 'Current Role',
      description: 'Leading architecture decisions for enterprise-scale applications, mentoring development teams, and driving technical innovation across multiple product lines.',
      achievements: [
        'Architected microservices platform serving 2M+ users',
        'Reduced deployment time by 60% through CI/CD optimization',
        'Led team of 8 developers on flagship product redesign',
        'Implemented comprehensive testing strategy achieving 95% coverage'
      ],
      technologies: ['React 18', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'GraphQL'],
      icon: 'Rocket',
      color: 'primary'
    },
    {
      year: 2023,
      title: 'Lead Frontend Developer',
      company: 'Digital Innovations Inc',
      type: 'Leadership',
      description: 'Spearheaded frontend architecture transformation, established coding standards, and built high-performing development team.',
      achievements: [
        'Migrated legacy codebase to modern React architecture',
        'Improved application performance by 45%',
        'Established component library used across 12 projects',
        'Mentored 5 junior developers to mid-level positions'
      ],
      technologies: ['React', 'Redux', 'Tailwind CSS', 'Jest', 'Webpack'],
      icon: 'Users',
      color: 'secondary'
    },
    {
      year: 2021,
      title: 'Full Stack Developer',
      company: 'StartupHub Technologies',
      type: 'Growth Phase',
      description: 'Built and scaled multiple SaaS products from concept to production, working across the entire technology stack.',
      achievements: [
        'Developed 3 successful SaaS products from scratch',
        'Implemented real-time features using WebSockets',
        'Optimized database queries reducing load time by 70%',
        'Contributed to open-source projects gaining 500+ stars'
      ],
      technologies: ['React', 'Express.js', 'MongoDB', 'Redis', 'Socket.io'],
      icon: 'Zap',
      color: 'accent'
    },
    {
      year: 2019,
      title: 'Frontend Developer',
      company: 'Creative Digital Agency',
      type: 'Foundation',
      description: 'Crafted responsive web applications for diverse clients, mastering modern frontend technologies and best practices.',
      achievements: [
        'Delivered 25+ client projects with 100% satisfaction rate',
        'Specialized in complex UI animations and interactions',
        'Achieved perfect Lighthouse scores on multiple projects',
        'Won agency "Developer of the Year" award'
      ],
      technologies: ['JavaScript', 'React', 'SASS', 'Git', 'Figma'],
      icon: 'Palette',
      color: 'warning'
    },
    {
      year: 2018,
      title: 'Junior Developer',
      company: 'Tech Learning Labs',
      type: 'Beginning',
      description: 'Started professional journey, learning fundamentals and contributing to team projects while building solid foundation.',
      achievements: [
        'Completed intensive full-stack bootcamp program',
        'Built first production application serving 1000+ users',
        'Learned agile methodologies and team collaboration',
        'Contributed to 10+ projects across different domains'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
      icon: 'GraduationCap',
      color: 'success'
    }
  ];

  const activeTimeline = timeline?.find(t => t?.year === activeYear);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Icon name="Clock" size={16} color="var(--color-accent)" />
            <span className="text-sm font-mono text-accent">Professional Journey</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Technical Evolution
            <span className="block text-primary mt-2">Timeline</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            From junior developer to senior architect - a journey of continuous learning, growth, and impact.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative mb-8 md:mb-12">
            <div className="flex items-center justify-between overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex items-center gap-2 md:gap-4 min-w-max mx-auto">
                {timeline?.map((item, index) => (
                  <div key={item?.year} className="flex items-center">
                    <button
                      onClick={() => setActiveYear(item?.year)}
                      className={`relative flex flex-col items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeYear === item?.year
                          ? 'bg-primary text-primary-foreground scale-110 shadow-lg'
                          : 'bg-card text-muted-foreground hover:bg-muted'
                      }`}
                    >
                      <span className="text-lg md:text-xl font-bold font-mono">{item?.year}</span>
                      <span className="text-xs whitespace-nowrap">{item?.type}</span>
                    </button>
                    {index < timeline?.length - 1 && (
                      <div className="w-8 md:w-12 h-0.5 bg-border mx-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {activeTimeline && (
            <div className="bg-card rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 border border-border">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-${activeTimeline?.color}/10 rounded-2xl flex items-center justify-center`}>
                    <Icon name={activeTimeline?.icon} size={32} color={`var(--color-${activeTimeline?.color})`} />
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{activeTimeline?.title}</h3>
                      <span className={`px-3 py-1 bg-${activeTimeline?.color}/10 text-${activeTimeline?.color} text-xs font-mono rounded-full`}>
                        {activeTimeline?.year}
                      </span>
                    </div>
                    <p className="text-base md:text-lg text-primary font-semibold mb-3">{activeTimeline?.company}</p>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {activeTimeline?.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Icon name="Award" size={16} />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {activeTimeline?.achievements?.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <Icon name="CheckCircle2" size={16} className="text-success mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Icon name="Code2" size={16} />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeTimeline?.technologies?.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-muted text-foreground text-xs font-mono rounded-lg border border-border hover:border-primary/50 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
            <Icon name="TrendingUp" size={24} color="var(--color-primary)" />
            <div className="text-left">
              <div className="text-2xl md:text-3xl font-bold text-foreground">8+ Years</div>
              <div className="text-sm text-muted-foreground">of continuous growth and learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;