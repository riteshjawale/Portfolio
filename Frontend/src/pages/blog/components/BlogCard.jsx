import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BlogCard = ({ article }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleReadMore = () => {
    // Navigate to article detail page (mock functionality)
    console.log(`Navigating to article: ${article?.id}`);
  };

  return (
    <article
      className="bg-card rounded-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <Image
          src={article?.image}
          alt={article?.imageAlt}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold ${article?.categoryColor}`}>
            <Icon name={article?.categoryIcon} size={14} />
            {article?.category}
          </span>
        </div>
      </div>
      <div className="p-4 md:p-5 lg:p-6">
        <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Icon name="Calendar" size={14} />
            <time dateTime={article?.date}>{article?.dateFormatted}</time>
          </div>
          <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
          <div className="flex items-center gap-1.5">
            <Icon name="Clock" size={14} />
            <span>{article?.readTime}</span>
          </div>
        </div>

        <h3 className="text-lg md:text-xl font-bold font-mono mb-2 line-clamp-2 text-foreground">
          {article?.title}
        </h3>

        <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-3">
          {article?.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {article?.tags?.map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-3">
            <Image
              src={article?.authorAvatar}
              alt={article?.authorAvatarAlt}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-foreground">{article?.author}</span>
          </div>

          <Button
            variant="ghost"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={handleReadMore}
          >
            Read
          </Button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;