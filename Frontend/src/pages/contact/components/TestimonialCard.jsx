import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialCard = ({ name, role, company, image, imageAlt, testimonial, rating }) => {
  return (
    <div className="p-6 bg-card border border-border rounded-lg">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)]?.map((_, index) => (
          <Icon
            key={index}
            name="Star"
            size={16}
            color={index < rating ? 'var(--color-warning)' : 'var(--color-muted)'}
            className={index < rating ? 'fill-current' : ''}
          />
        ))}
      </div>
      <p className="text-sm md:text-base text-muted-foreground mb-6 line-clamp-4">{testimonial}</p>
      <div className="flex items-center gap-3">
        <Image
          src={image}
          alt={imageAlt}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm md:text-base">{name}</p>
          <p className="text-xs md:text-sm text-muted-foreground">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;