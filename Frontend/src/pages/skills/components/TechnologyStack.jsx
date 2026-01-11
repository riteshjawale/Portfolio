import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TechnologyStack = ({ stack }) => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="bg-card rounded-lg border border-border p-4 md:p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-4 md:mb-6">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
          <Icon name={stack?.icon} size={24} color="var(--color-secondary)" />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-mono">{stack?.category}</h2>
          <p className="text-xs md:text-sm text-muted-foreground">{stack?.description}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
        {stack?.technologies?.map((tech) => (
          <div
            key={tech?.id}
            className="relative group"
            onMouseEnter={() => setHoveredTech(tech?.id)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <div className="bg-muted/50 rounded-lg p-3 md:p-4 flex flex-col items-center gap-2 hover:bg-muted transition-colors duration-200 cursor-pointer h-full">
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                <Image
                  src={tech?.logo}
                  alt={tech?.logoAlt}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs md:text-sm font-medium text-center line-clamp-2">{tech?.name}</span>
              <div className="flex items-center gap-1">
                {[...Array(5)]?.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-1.5 h-1.5 rounded-full ${
                      idx < tech?.proficiency ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>

            {hoveredTech === tech?.id && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-popover border border-border rounded-lg shadow-lg z-10 animate-fade-in">
                <p className="text-xs text-popover-foreground mb-2">{tech?.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Experience:</span>
                  <span className="font-medium">{tech?.experience}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyStack;