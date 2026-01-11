import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const downloadOptions = [
    {
      format: 'PDF',
      icon: 'FileText',
      size: '245 KB',
      description: 'Standard format, best for printing'
    },
    {
      format: 'DOCX',
      icon: 'FileType',
      size: '180 KB',
      description: 'Editable format for ATS systems'
    },
    {
      format: 'TXT',
      icon: 'File',
      size: '12 KB',
      description: 'Plain text version'
    }
  ];

  const contactMethods = [
    {
      method: 'Email',
      value: 'jawaleritesh1@gmail.com',
      icon: 'Mail',
      action: 'mailto:jawaleritesh1@gmail.com'
    },
    {
      method: 'LinkedIn',
      value: '/in/RiteshJawale',
      icon: 'Linkedin',
      action: 'https://linkedin.com/in/RiteshJawale'
    },
    {
      method: 'GitHub',
      value: '@RiteshJawale',
      icon: 'Github',
      action: 'https://github.com/riteshjawale'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary via-primary to-secondary rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12 lg:p-16 text-center text-primary-foreground">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
                <Icon name="Sparkles" size={16} />
                <span className="text-sm font-mono">Let's Work Together</span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto mb-8">
                I'm always excited to take on new challenges and collaborate on innovative projects. Whether you have a specific idea or just want to explore possibilities, let's connect.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  variant="default"
                  size="lg"
                  iconName="MessageSquare"
                  iconPosition="left"
                  onClick={() => window.location.href = '/contact'}
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Start a Conversation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  onClick={() => window.open('https://calendly.com/RiteshJawale', '_blank')}
                  className="border-white text-white hover:bg-white/10"
                >
                  Schedule a Call
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                {contactMethods?.map((contact, index) => (
                  <a
                    key={index}
                    href={contact?.action}
                    target={contact?.method !== 'Email' ? '_blank' : undefined}
                    rel={contact?.method !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                  >
                    <Icon name={contact?.icon} size={24} className="mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-sm font-semibold mb-1">{contact?.method}</div>
                    <div className="text-xs opacity-80">{contact?.value}</div>
                  </a>
                ))}
              </div>

              <div className="border-t border-white/20 pt-8">
                <h3 className="text-xl font-bold mb-6">Download My Resume</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  {downloadOptions?.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => window.open(`/assets/resume.${option?.format?.toLowerCase()}`, '_blank')}
                      className="p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group text-left"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Icon name={option?.icon} size={24} className="group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <div className="font-bold">{option?.format}</div>
                          <div className="text-xs opacity-80">{option?.size}</div>
                        </div>
                      </div>
                      <p className="text-xs opacity-80">{option?.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <Icon name="Clock" size={32} className="mx-auto mb-3 text-primary" />
              <div className="text-2xl font-bold text-foreground mb-1">&lt; 24h</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <Icon name="Globe" size={32} className="mx-auto mb-3 text-secondary" />
              <div className="text-2xl font-bold text-foreground mb-1">Remote</div>
              <div className="text-sm text-muted-foreground">Work Available</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <Icon name="CheckCircle" size={32} className="mx-auto mb-3 text-accent" />
              <div className="text-2xl font-bold text-foreground mb-1">Open</div>
              <div className="text-sm text-muted-foreground">For Opportunities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;