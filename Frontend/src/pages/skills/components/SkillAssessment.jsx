import Icon from '../../../components/AppIcon';

const SkillAssessment = ({ assessment }) => {
  const getScoreColor = (score) => {
    if (score >= 90) return 'text-accent';
    if (score >= 75) return 'text-primary';
    if (score >= 60) return 'text-secondary';
    return 'text-muted-foreground';
  };

  const getScoreBgColor = (score) => {
    if (score >= 90) return 'bg-accent/10';
    if (score >= 75) return 'bg-primary/10';
    if (score >= 60) return 'bg-secondary/10';
    return 'bg-muted';
  };

  return (
    <div className="bg-card rounded-lg border border-border p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-base md:text-lg font-semibold mb-1 line-clamp-2">{assessment?.title}</h3>
          <p className="text-xs md:text-sm text-muted-foreground">{assessment?.platform}</p>
        </div>
        <div className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full ${getScoreBgColor(assessment?.score)} flex items-center justify-center`}>
          <span className={`text-xl md:text-2xl font-bold font-mono ${getScoreColor(assessment?.score)}`}>
            {assessment?.score}
          </span>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs md:text-sm">
          <Icon name="Calendar" size={16} className="text-muted-foreground flex-shrink-0" />
          <span className="text-muted-foreground">Completed: {assessment?.date}</span>
        </div>

        {assessment?.percentile && (
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <Icon name="TrendingUp" size={16} className="text-muted-foreground flex-shrink-0" />
            <span className="text-muted-foreground">
              Top {assessment?.percentile}% of test takers
            </span>
          </div>
        )}

        {assessment?.skills && assessment?.skills?.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {assessment?.skills?.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {assessment?.highlights && assessment?.highlights?.length > 0 && (
          <div className="pt-3 border-t border-border space-y-2">
            <p className="text-xs font-medium">Key Highlights:</p>
            <ul className="space-y-1">
              {assessment?.highlights?.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <Icon name="CheckCircle2" size={12} className="mt-0.5 text-accent flex-shrink-0" />
                  <span className="line-clamp-2">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {assessment?.certificateUrl && (
          <a
            href={assessment?.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-2"
          >
            <span>View Certificate</span>
            <Icon name="ExternalLink" size={12} />
          </a>
        )}
      </div>
    </div>
  );
};

export default SkillAssessment;