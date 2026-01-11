import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProjectTimeline = ({ projects }) => {
  const timelineData = projects?.sort((a, b) => b?.year - a?.year)?.reduce((acc, project) => {
      const year = project?.year;
      if (!acc?.[year]) {
        acc[year] = [];
      }
      acc?.[year]?.push(project);
      return acc;
    }, {});

  return (
    <div className="relative">
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border" />
      <div className="space-y-8 md:space-y-12">
        {Object.entries(timelineData)?.map(([year, yearProjects], yearIndex) => (
          <motion.div
            key={year}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: yearIndex * 0.1 }}
            className="relative"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative z-10 w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center">
                <Icon name="Calendar" size={16} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-mono text-foreground">{year}</h3>
              <div className="flex-1 h-px bg-border" />
              <span className="text-sm text-muted-foreground font-mono">
                {yearProjects?.length} {yearProjects?.length === 1 ? 'project' : 'projects'}
              </span>
            </div>

            <div className="ml-12 md:ml-20 space-y-4">
              {yearProjects?.map((project, projectIndex) => (
                <motion.div
                  key={project?.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: projectIndex * 0.05 }}
                  className="p-4 md:p-5 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="text-base md:text-lg font-semibold font-mono text-foreground">
                      {project?.title}
                    </h4>
                    <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">
                      {project?.duration}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {project?.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {project?.technologies?.slice(0, 4)?.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-mono bg-muted text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTimeline;