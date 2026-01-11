import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TechnologyStack = ({ projects }) => {
  const techCount = projects?.reduce((acc, project) => {
    project?.technologies?.forEach((tech) => {
      acc[tech] = (acc?.[tech] || 0) + 1;
    });
    return acc;
  }, {});

  const sortedTech = Object.entries(techCount)?.sort(([, a], [, b]) => b - a)?.slice(0, 12);

  const maxCount = Math.max(...sortedTech?.map(([, count]) => count));

  const techIcons = {
    'React': 'Code2',
    'Next.js': 'Layers',
    'TypeScript': 'FileCode',
    'Node.js': 'Server',
    'MongoDB': 'Database',
    'PostgreSQL': 'Database',
    'Tailwind CSS': 'Palette',
    'GraphQL': 'Network',
    'AWS': 'Cloud',
    'Docker': 'Box',
    'Redux': 'GitBranch',
    'Express': 'Zap'
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon name="Layers" size={20} className="text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-mono text-foreground">Technology Stack</h3>
          <p className="text-sm text-muted-foreground">Most used technologies across projects</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sortedTech?.map(([tech, count], index) => {
          const percentage = (count / maxCount) * 100;
          return (
            <motion.div
              key={tech}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon
                    name={techIcons?.[tech] || 'Code'}
                    size={16}
                    className="text-primary"
                  />
                  <span className="text-sm font-mono font-medium text-foreground">{tech}</span>
                </div>
                <span className="text-xs text-muted-foreground font-mono">
                  {count} {count === 1 ? 'project' : 'projects'}
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TechnologyStack;