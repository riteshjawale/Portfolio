import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-4 left-4 right-4 space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              {project?.technologies?.slice(0, 3)?.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs font-mono bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded shadow-md"
                >
                  {tech}
                </span>
              ))}
              {project?.technologies?.length > 3 && (
                <span className="px-2 py-1 text-xs font-mono bg-gradient-to-r from-gray-600 to-gray-500 text-white rounded shadow-md">
                  +{project?.technologies?.length - 3}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {project?.liveUrl && (
                <Button
                  variant="default"
                  size="sm"
                  iconName="ExternalLink"
                  iconPosition="right"
                  onClick={() => window.open(project?.liveUrl, '_blank')}
                >
                  Live Demo
                </Button>
              )}
            </div>
          </div>
        </div>
        {project?.isNew && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-mono font-semibold rounded-full">
            NEW
          </div>
        )}
        {project?.difficulty && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-xs font-mono rounded-full shadow-lg border-0">
            {project?.difficulty}
          </div>
        )}
      </div>
      <div className="p-4 md:p-5 lg:p-6 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg md:text-xl font-bold font-mono text-foreground line-clamp-1">
            {project?.title}
          </h3>
          <div className="flex items-center gap-1 text-muted-foreground flex-shrink-0">
            <Icon name="Calendar" size={14} />
            <span className="text-xs font-mono whitespace-nowrap">{project?.year}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {project?.description}
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Icon name="Code2" size={16} />
              <span className="text-xs font-mono">{project?.linesOfCode}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Icon name="Clock" size={16} />
              <span className="text-xs font-mono">{project?.duration}</span>
            </div>
          </div>
          {project?.clientRating && (
            <div className="flex items-center gap-1">
              <Icon name="Star" size={16} className="text-warning fill-warning" />
              <span className="text-sm font-mono font-semibold">{project?.clientRating}</span>
            </div>
          )}
        </div>

        {project?.clientTestimonial && (
          <div className="pt-3 border-t border-border">
            <p className="text-xs text-muted-foreground italic line-clamp-2">
              "{project?.clientTestimonial}"
            </p>
            <p className="text-xs text-muted-foreground font-semibold mt-1">
              — {project?.clientName}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
