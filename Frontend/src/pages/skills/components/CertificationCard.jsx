import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificationCard = ({ certification }) => {
  return (
    <div className="bg-card rounded-lg border border-border p-4 md:p-6 hover:shadow-lg transition-all duration-300 group">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
          <Image
            src={certification?.logo}
            alt={certification?.logoAlt}
            className="w-full h-full object-contain p-2"
          />
        </div>

        <div className="flex-1 min-w-0 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base md:text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors duration-200">
              {certification?.name}
            </h3>
            {certification?.verified && (
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                <Icon name="BadgeCheck" size={16} color="var(--color-accent)" />
              </div>
            )}
          </div>

          <p className="text-sm text-muted-foreground">{certification?.issuer}</p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Icon name="Calendar" size={14} />
              <span className="whitespace-nowrap">{certification?.date}</span>
            </div>
            {certification?.expiryDate && (
              <div className="flex items-center gap-1">
                <Icon name="Clock" size={14} />
                <span className="whitespace-nowrap">Expires: {certification?.expiryDate}</span>
              </div>
            )}
            {certification?.credentialId && (
              <div className="flex items-center gap-1">
                <Icon name="Hash" size={14} />
                <span className="whitespace-nowrap">{certification?.credentialId}</span>
              </div>
            )}
          </div>

          {certification?.skills && certification?.skills?.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {certification?.skills?.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {certification?.verificationUrl && (
            <a
              href={certification?.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-2"
            >
              <span>Verify Credential</span>
              <Icon name="ExternalLink" size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;