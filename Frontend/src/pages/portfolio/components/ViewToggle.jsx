import Button from '../../../components/ui/Button';

const ViewToggle = ({ currentView, onViewChange }) => {
  const views = [
    { value: 'grid', label: 'Grid View', icon: 'LayoutGrid' },
    { value: 'timeline', label: 'Timeline', icon: 'Clock' }
  ];

  return (
    <div className="flex items-center gap-2 p-1 bg-muted rounded-lg">
      {views?.map((view) => (
        <Button
          key={view?.value}
          variant={currentView === view?.value ? 'default' : 'ghost'}
          size="sm"
          iconName={view?.icon}
          iconPosition="left"
          onClick={() => onViewChange(view?.value)}
        >
          <span className="hidden sm:inline">{view?.label}</span>
        </Button>
      ))}
    </div>
  );
};

export default ViewToggle;