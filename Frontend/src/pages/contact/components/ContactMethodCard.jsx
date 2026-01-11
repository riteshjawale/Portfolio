import Icon from '../../../components/AppIcon';

const ContactMethodCard = ({ icon, title, value, link, description }) => {
  return (
    <a
      href={link}
      target={link?.startsWith('http') ? '_blank' : '_self'}
      rel={link?.startsWith('http') ? 'noopener noreferrer' : ''}
      className="group block p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon name={icon} size={24} color="var(--color-primary)" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-mono font-semibold text-base mb-1">{title}</h3>
          <p className="text-sm text-primary font-medium mb-2 break-all">{value}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Icon
          name="ExternalLink"
          size={16}
          className="text-muted-foreground group-hover:text-primary transition-colors duration-300 flex-shrink-0"
        />
      </div>
    </a>
  );
};

export default ContactMethodCard;