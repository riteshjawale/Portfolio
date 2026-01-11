import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RecentArticles = ({ articles, onArticleClick }) => {
  return (
    <div className="bg-card rounded-lg border border-border p-4 md:p-6">
      <div className="flex items-center gap-2 mb-4">
        <Icon name="Clock" size={20} className="text-primary" />
        <h3 className="text-lg md:text-xl font-bold font-mono text-foreground">Recent Articles</h3>
      </div>
      <div className="space-y-4">
        {articles?.map((article) => (
          <button
            key={article?.id}
            onClick={() => onArticleClick(article?.id)}
            className="flex gap-3 w-full text-left group"
          >
            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src={article?.image}
                alt={article?.imageAlt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-foreground line-clamp-2 mb-1 group-hover:text-primary transition-colors duration-200">
                {article?.title}
              </h4>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <time dateTime={article?.date}>{article?.dateFormatted}</time>
                <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                <span>{article?.readTime}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentArticles;