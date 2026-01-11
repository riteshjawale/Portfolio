import Icon from '../../../components/AppIcon';

const BudgetRangeCard = ({ range, description, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 md:p-5 lg:p-6 rounded-lg border-2 transition-all duration-300 text-left ${
        isSelected
          ? 'border-primary bg-primary/5' :'border-border bg-card hover:border-primary/50'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="font-mono font-semibold text-sm md:text-base mb-1">{range}</p>
          <p className="text-xs md:text-sm text-muted-foreground">{description}</p>
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

export default BudgetRangeCard;