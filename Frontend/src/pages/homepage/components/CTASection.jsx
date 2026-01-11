import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const navigate = useNavigate();

  const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'jawaleritesh1@gmail.com',
      action: () => window.location.href = 'mailto:jawaleritesh1@gmail.com'
    },
    {
      icon: 'Linkedin',
      title: 'LinkedIn',
      value: 'Connect professionally',
      action: () => window.open('https://linkedin.com', '_blank')
    },
    {
      icon: 'Github',
      title: 'GitHub',
      value: 'View my code',
      action: () => window.open('https://github.com/riteshjawale', '_blank')
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-2xl border border-border p-8 md:p-12 lg:p-16 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 mb-6">
              <Icon name="Rocket" size={32} className="text-primary" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Let's Build Something Amazing
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're looking to hire a developer, start a project, or just want to connect, I'd love to hear from you. Let's turn your ideas into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                variant="default"
                size="lg"
                iconName="MessageSquare"
                iconPosition="left"
                onClick={() => navigate('/contact')}
              >
                Start a Conversation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => navigate('/contact')}
              >
                Schedule a Call
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border">
              {contactMethods?.map((method, index) => (
                <button
                  key={index}
                  onClick={method?.action}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-muted transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Icon name={method?.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-1">{method?.title}</div>
                    <div className="text-xs text-muted-foreground">{method?.value}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Currently available for freelance projects and full-time opportunities
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-xs text-muted-foreground">Available Now</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={14} className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;