import { useState } from 'react';
import Icon from '../../../components/AppIcon';

const LearningPath = () => {
  const [activePath, setActivePath] = useState('frontend');

  const learningPaths = [
    {
      id: 'frontend',
      name: 'Frontend Mastery',
      icon: 'Layout',
      description: 'Advanced React patterns and modern web development',
      currentLevel: 'Advanced',
      progress: 85,
      milestones: [
        { id: 1, title: 'React Fundamentals', completed: true, date: '2024-01' },
        { id: 2, title: 'Advanced Hooks & Context', completed: true, date: '2024-03' },
        { id: 3, title: 'Performance Optimization', completed: true, date: '2024-06' },
        { id: 4, title: 'Server Components', completed: false, inProgress: true },
        { id: 5, title: 'Micro-Frontend Architecture', completed: false }
      ],
      nextSteps: [
        'Complete Next.js 14 certification',
        'Build production-scale SSR application',
        'Master Web Vitals optimization'
      ]
    },
    {
      id: 'backend',
      name: 'Backend Development',
      icon: 'Server',
      description: 'Node.js, APIs, and database architecture',
      currentLevel: 'Intermediate',
      progress: 65,
      milestones: [
        { id: 1, title: 'Node.js Basics', completed: true, date: '2024-02' },
        { id: 2, title: 'RESTful API Design', completed: true, date: '2024-04' },
        { id: 3, title: 'Database Management', completed: false, inProgress: true },
        { id: 4, title: 'Microservices Architecture', completed: false },
        { id: 5, title: 'GraphQL Implementation', completed: false }
      ],
      nextSteps: [
        'Learn PostgreSQL advanced queries',
        'Implement caching strategies',
        'Study distributed systems'
      ]
    },
    {
      id: 'devops',
      name: 'DevOps & Cloud',
      icon: 'Cloud',
      description: 'CI/CD, containerization, and cloud platforms',
      currentLevel: 'Beginner',
      progress: 40,
      milestones: [
        { id: 1, title: 'Docker Fundamentals', completed: true, date: '2024-05' },
        { id: 2, title: 'CI/CD Pipelines', completed: false, inProgress: true },
        { id: 3, title: 'Kubernetes Basics', completed: false },
        { id: 4, title: 'AWS Services', completed: false },
        { id: 5, title: 'Infrastructure as Code', completed: false }
      ],
      nextSteps: [
        'Complete AWS Solutions Architect course',
        'Set up production Kubernetes cluster',
        'Learn Terraform basics'
      ]
    }
  ];

  const activeLearningPath = learningPaths?.find(path => path?.id === activePath);

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 md:p-6 border-b border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/20 flex items-center justify-center">
            <Icon name="Target" size={24} color="var(--color-primary)" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-mono">Learning Paths</h2>
            <p className="text-xs md:text-sm text-muted-foreground">Continuous skill development journey</p>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {learningPaths?.map((path) => (
            <button
              key={path?.id}
              onClick={() => setActivePath(path?.id)}
              className={`px-3 py-2 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 flex items-center gap-2 whitespace-nowrap flex-shrink-0 ${
                activePath === path?.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card hover:bg-muted'
              }`}
            >
              <Icon name={path?.icon} size={16} />
              <span>{path?.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="p-4 md:p-6 lg:p-8 space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">{activeLearningPath?.name}</h3>
              <p className="text-sm text-muted-foreground">{activeLearningPath?.description}</p>
            </div>
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs md:text-sm rounded-full whitespace-nowrap">
              {activeLearningPath?.currentLevel}
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Overall Progress</span>
              <span className="font-mono font-semibold">{activeLearningPath?.progress}%</span>
            </div>
            <div className="relative h-3 bg-muted rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out rounded-full"
                style={{ width: `${activeLearningPath?.progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm md:text-base font-semibold">Learning Milestones</h4>
          <div className="space-y-3">
            {activeLearningPath?.milestones?.map((milestone, idx) => (
              <div key={milestone?.id} className="flex items-start gap-3">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      milestone?.completed
                        ? 'bg-accent text-white'
                        : milestone?.inProgress
                        ? 'bg-primary text-white' :'bg-muted text-muted-foreground'
                    }`}
                  >
                    {milestone?.completed ? (
                      <Icon name="Check" size={16} />
                    ) : milestone?.inProgress ? (
                      <Icon name="Loader" size={16} />
                    ) : (
                      <span className="text-xs font-mono">{idx + 1}</span>
                    )}
                  </div>
                  {idx < activeLearningPath?.milestones?.length - 1 && (
                    <div className={`w-0.5 h-8 ${milestone?.completed ? 'bg-accent' : 'bg-muted'}`} />
                  )}
                </div>

                <div className="flex-1 min-w-0 pt-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className={`text-sm md:text-base ${milestone?.completed ? 'line-through text-muted-foreground' : 'font-medium'}`}>
                      {milestone?.title}
                    </p>
                    {milestone?.date && (
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{milestone?.date}</span>
                    )}
                  </div>
                  {milestone?.inProgress && (
                    <span className="inline-flex items-center gap-1 text-xs text-primary mt-1">
                      <Icon name="Clock" size={12} />
                      In Progress
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-border space-y-3">
          <h4 className="text-sm md:text-base font-semibold">Next Steps</h4>
          <ul className="space-y-2">
            {activeLearningPath?.nextSteps?.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Icon name="ArrowRight" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;