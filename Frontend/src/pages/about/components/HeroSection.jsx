import { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const stats = [
  { value: '8+', label: 'Years Experience', icon: 'Calendar' },
  { value: '150+', label: 'Projects Completed', icon: 'Briefcase' },
  { value: '50+', label: 'Happy Clients', icon: 'Users' },
  { value: '95%', label: 'Client Retention', icon: 'TrendingUp' }];


  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Icon name="Code2" size={16} color="var(--color-primary)" />
              <span className="text-sm font-mono text-primary">Full Stack Developer</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Crafting Digital Experiences
                <span className="block text-primary mt-2">That Matter</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I'm Ritesh Jawale, a passionate developer who believes great code is both functional art and problem-solving craft. With over 8 years of experience, I architect digital solutions that blend technical excellence with user-centered thinking.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Download"
                iconPosition="left"
                onClick={() => window.open('/assets/resume.pdf', '_blank')}>

                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Mail"
                iconPosition="left"
                onClick={() => window.location.href = '/contact'}>

                Get in Touch
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 md:pt-8">
              {stats?.map((stat, index) =>
              <div key={index} className="text-center p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
                  <Icon name={stat?.icon} size={24} className="mx-auto mb-2 text-primary" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat?.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat?.label}</div>
                </div>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-card rounded-2xl shadow-2xl overflow-hidden transform -rotate-3">
                <Image
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_19b31bf9c-1763295924030.png"
                  alt="Professional portrait of Ritesh Jawale, a confident male developer with short brown hair wearing a navy blue blazer and white shirt, smiling warmly in a modern office setting with natural lighting"
                  className={`w-full h-full object-cover transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setIsImageLoaded(true)} />

              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={20} />
                  <span className="font-mono font-semibold">Available for Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;