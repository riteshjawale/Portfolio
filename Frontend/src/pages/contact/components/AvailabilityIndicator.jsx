import Icon from '../../../components/AppIcon';

const AvailabilityIndicator = ({ status, message, responseTime }) => {
  const statusConfig = {
    available: {
      color: 'text-success',
      bgColor: 'bg-success/10',
      icon: 'CheckCircle2',
      iconColor: 'var(--color-success)',
    },
    limited: {
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      icon: 'Clock',
      iconColor: 'var(--color-warning)',
    },
    unavailable: {
      color: 'text-error',
      bgColor: 'bg-error/10',
      icon: 'XCircle',
      iconColor: 'var(--color-error)',
    },
  };

  const config = statusConfig?.[status] || statusConfig?.available;

  return (
    <div className={`p-4 md:p-6 rounded-lg border border-border ${config?.bgColor}`}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <Icon name={config?.icon} size={24} color={config?.iconColor} />
        </div>
        <div className="flex-1 min-w-0">
          <p className={`font-semibold text-sm md:text-base mb-1 ${config?.color}`}>
            {message}
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">
            Typical response time: {responseTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityIndicator;