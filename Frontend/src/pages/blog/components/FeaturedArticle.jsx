import { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedArticle = ({ article }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleReadArticle = () => {
    console.log(`Reading featured article: ${article?.id}`);
  };

  return (
    <div
      className="relative bg-card rounded-xl border border-border overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="relative h-64 md:h-80 lg:h-full overflow-hidden">
          <Image
            src={article?.image}
            alt={article?.imageAlt}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:hidden"></div>
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-mono font-semibold">
              <Icon name="Star" size={16} />
              Featured
            </span>
          </div>
        </div>

        <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold ${article?.categoryColor}`}>
              <Icon name={article?.categoryIcon} size={14} />
              {article?.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Icon name="Calendar" size={14} />
              <time dateTime={article?.date}>{article?.dateFormatted}</time>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono mb-4 text-foreground">
            {article?.title}
          </h2>

          <p className="text-base md:text-lg text-muted-foreground mb-6 line-clamp-4">
            {article?.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {article?.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-muted text-muted-foreground text-sm rounded-md hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={article?.authorAvatar}
                alt={article?.authorAvatarAlt}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm md:text-base font-semibold text-foreground">{article?.author}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{article?.readTime} read</p>
              </div>
            </div>

            <Button
              variant="default"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              onClick={handleReadArticle}
            >
              Read Article
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;