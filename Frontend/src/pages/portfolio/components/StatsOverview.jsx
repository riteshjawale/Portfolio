import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ projects }) => {
  const totalProjects = projects?.length;
  const totalLinesOfCode = projects?.reduce((sum, project) => {
    const lines = parseInt(project?.linesOfCode?.replace(/[^0-9]/g, ''));
    return sum + lines;
  }, 0);
  const averageRating = (projects?.filter((p) => p?.clientRating)?.reduce((sum, p) => sum + parseFloat(p?.clientRating), 0) / projects?.filter((p) => p?.clientRating)?.length)?.toFixed(1);
  const totalStars = projects?.reduce((sum, project) => {
    if (project?.stars) {
      return sum + parseInt(project?.stars);
    }
    return sum;
  }, 0);

  const stats = [
    {
      icon: 'Briefcase',
      label: 'Total Projects',
      value: totalProjects,
      suffix: '',
      color: 'text-primary'
    },
    {
      icon: 'Code2',
      label: 'Lines of Code',
      value: `${(totalLinesOfCode / 1000)?.toFixed(0)}K`,
      suffix: '+',
      color: 'text-secondary'
    },
    {
      icon: 'Star',
      label: 'Average Rating',
      value: averageRating,
      suffix: '/5.0',
      color: 'text-warning'
    },
    {
      icon: 'Github',
      label: 'GitHub Stars',
      value: totalStars,
      suffix: '',
      color: 'text-accent'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats?.map((stat, index) => (
        <motion.div
          key={stat?.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-card rounded-xl border border-border p-4 md:p-6 hover:border-primary/50 transition-colors duration-300"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-muted flex items-center justify-center ${stat?.color}`}>
              <Icon name={stat?.icon} size={20} />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-2xl md:text-3xl font-bold font-mono text-foreground">
              {stat?.value}
              <span className="text-base md:text-lg text-muted-foreground">{stat?.suffix}</span>
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">{stat?.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsOverview;