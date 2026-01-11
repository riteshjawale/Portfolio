import Icon from '../../../components/AppIcon';

const PopularTopics = ({ topics, onTopicClick }) => {
  return (
    <div className="bg-card rounded-lg border border-border p-4 md:p-6">
      <div className="flex items-center gap-2 mb-4">
        <Icon name="TrendingUp" size={20} className="text-primary" />
        <h3 className="text-lg md:text-xl font-bold font-mono text-foreground">Popular Topics</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {topics?.map((topic, index) => (
          <button
            key={index}
            onClick={() => onTopicClick(topic?.name)}
            className="inline-flex items-center gap-2 px-3 py-2 bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary rounded-lg transition-all duration-200 text-sm group"
          >
            <span className="font-medium">#{topic?.name}</span>
            <span className="px-2 py-0.5 bg-background rounded-full text-xs font-semibold group-hover:bg-primary/20">
              {topic?.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PopularTopics;