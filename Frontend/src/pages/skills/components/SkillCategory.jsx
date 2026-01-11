import { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillCategory = ({ category, skills, icon }) => {
  const [expandedSkill, setExpandedSkill] = useState(null);

  const getProficiencyColor = (level) => {
    if (level >= 90) return 'bg-accent';
    if (level >= 75) return 'bg-primary';
    if (level >= 60) return 'bg-secondary';
    return 'bg-muted-foreground';
  };

  const getProficiencyLabel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div className="bg-card rounded-lg border border-border p-4 md:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-3 mb-4 md:mb-6">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon name={icon} size={24} color="var(--color-primary)" />
        </div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-mono">{category}</h2>
      </div>
      <div className="space-y-4 md:space-y-6">
        {skills?.map((skill) => (
          <div key={skill?.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <span className="text-sm md:text-base font-medium truncate">{skill?.name}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground whitespace-nowrap">
                  {skill?.experience}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs md:text-sm font-mono text-muted-foreground whitespace-nowrap">
                  {skill?.proficiency}%
                </span>
                <button
                  onClick={() => setExpandedSkill(expandedSkill === skill?.id ? null : skill?.id)}
                  className="p-1 hover:bg-muted rounded transition-colors duration-200"
                  aria-label={expandedSkill === skill?.id ? 'Collapse details' : 'Expand details'}
                >
                  <Icon
                    name={expandedSkill === skill?.id ? 'ChevronUp' : 'ChevronDown'}
                    size={16}
                    className="text-muted-foreground"
                  />
                </button>
              </div>
            </div>

            <div className="relative h-2 bg-muted rounded-full overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-full ${getProficiencyColor(skill?.proficiency)} transition-all duration-1000 ease-out rounded-full`}
                style={{ width: `${skill?.proficiency}%` }}
              />
            </div>

            <div className="flex items-center gap-2">
              <span className={`text-xs px-2 py-0.5 rounded-full ${getProficiencyColor(skill?.proficiency)} text-white`}>
                {getProficiencyLabel(skill?.proficiency)}
              </span>
              {skill?.certified && (
                <div className="flex items-center gap-1 text-xs text-accent">
                  <Icon name="Award" size={14} />
                  <span>Certified</span>
                </div>
              )}
            </div>

            {expandedSkill === skill?.id && (
              <div className="mt-3 p-3 md:p-4 bg-muted/50 rounded-lg space-y-2 animate-fade-in">
                <p className="text-xs md:text-sm text-muted-foreground">{skill?.description}</p>
                {skill?.projects && skill?.projects?.length > 0 && (
                  <div className="space-y-1">
                    <p className="text-xs font-medium">Recent Projects:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {skill?.projects?.map((project, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={12} className="mt-0.5 text-accent flex-shrink-0" />
                          <span className="line-clamp-2">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;