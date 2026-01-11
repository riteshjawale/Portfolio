import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e?.preventDefault();
    setError('');

    if (!email) {
      setError('Email is required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex?.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Mock subscription
    console.log('Subscribing email:', email);
    setIsSubscribed(true);
    setEmail('');

    setTimeout(() => {
      setIsSubscribed(false);
    }, 5000);
  };

  return (
    <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-xl border border-border p-6 md:p-8 lg:p-10">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 mb-4 md:mb-6">
          <Icon name="Mail" size={32} className="text-primary" />
        </div>

        <h3 className="text-2xl md:text-3xl font-bold font-mono mb-3 md:mb-4 text-foreground">
          Stay Updated with Latest Insights
        </h3>

        <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
          Get weekly technical tutorials, industry trends, and development best practices delivered straight to your inbox. Join 5,000+ developers already subscribed.
        </p>

        {isSubscribed ? (
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-success/10 border border-success/20 rounded-lg">
            <Icon name="CheckCircle2" size={24} className="text-success" />
            <p className="text-success font-semibold">Successfully subscribed! Check your email for confirmation.</p>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e?.target?.value)}
                error={error}
                className="h-12 md:h-14"
              />
            </div>
            <Button
              type="submit"
              variant="default"
              size="lg"
              iconName="Send"
              iconPosition="right"
              className="whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>
        )}

        <p className="text-xs md:text-sm text-muted-foreground mt-4">
          No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSection;