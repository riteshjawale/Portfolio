import Icon from '../../../components/AppIcon';

const ProjectTypeCard = ({ icon, title, description, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full p-6 rounded-lg border-2 transition-all duration-300 text-left ${
        isSelected
          ? 'border-primary bg-primary/5' :'border-border bg-card hover:border-primary/50'
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
            isSelected ? 'bg-primary/20' : 'bg-muted'
          }`}
        >
          <Icon
            name={icon}
            size={24}
            color={isSelected ? 'var(--color-primary)' : 'var(--color-muted-foreground)'}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-mono font-semibold text-base mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isSelected ? 'border-primary bg-primary' : 'border-muted-foreground'
          }`}
        >
          {isSelected && <Icon name="Check" size={14} color="white" />}
        </div>
      </div>
    </button>
  );
};

export default ProjectTypeCard;