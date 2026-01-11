import { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO, TechVentures Inc.',
    company: 'TechVentures',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ffde516e-1763293580273.png",
    imageAlt: 'Professional headshot of confident woman with shoulder-length brown hair wearing navy blue blazer and white blouse in modern office setting',
    rating: 5,
    text: 'Ritesh transformed our legacy system into a modern, scalable platform. The attention to detail and technical expertise exceeded our expectations. Our team productivity increased by 40% after the implementation.',
    project: 'Enterprise Platform Migration',
    metrics: ['40% productivity increase', '99.9% uptime', '6-month delivery']
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder & CEO, StartupHub',
    company: 'StartupHub',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17550fd67-1763295501645.png",
    imageAlt: 'Professional portrait of Asian businessman with short black hair wearing charcoal gray suit and burgundy tie smiling confidently in corporate office environment',
    rating: 5,
    text: 'Working with Ritesh was a game-changer for our startup. The MVP was delivered ahead of schedule with exceptional quality. The scalable architecture has supported our 10x user growth seamlessly.',
    project: 'SaaS Platform Development',
    metrics: ['10x user growth', 'Ahead of schedule', '$2M funding raised']
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Product Manager, HealthTech Solutions',
    company: 'HealthTech',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_177aa6562-1763294813834.png",
    imageAlt: 'Professional photograph of Hispanic woman with long dark hair in elegant black business suit with white collar standing in bright modern healthcare facility',
    rating: 5,
    text: 'The healthcare management system Ritesh built is now used by 25+ hospitals. The HIPAA-compliant architecture and intuitive interface have received outstanding feedback from medical staff and patients alike.',
    project: 'Healthcare Management System',
    metrics: ['25+ hospitals', 'HIPAA compliant', '50K+ active users']
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'VP Engineering, DataFlow Analytics',
    company: 'DataFlow',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18b455c05-1763292276996.png",
    imageAlt: 'Professional headshot of middle-aged Caucasian man with graying hair wearing navy blue suit and light blue dress shirt in contemporary tech office',
    rating: 5,
    text: 'Ritesh\'s real-time analytics dashboard processes millions of data points with incredible speed. The custom visualizations and predictive insights have revolutionized how we make business decisions.',
    project: 'Real-Time Analytics Platform',
    metrics: ['10M+ data points', '<50ms latency', '99.5% accuracy']
  }];


  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Client Success Stories
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by industry leaders to deliver exceptional results
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg shadow-xl border border-border p-6 md:p-8 lg:p-10">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-primary/20">
                    <Image
                      src={currentTestimonial?.image}
                      alt={currentTestimonial?.imageAlt}
                      className="w-full h-full object-cover" />

                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Quote" size={16} className="text-primary-foreground" />
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(currentTestimonial?.rating)]?.map((_, index) =>
                  <Icon key={index} name="Star" size={18} className="text-warning fill-warning" />
                  )}
                </div>

                <p className="text-base md:text-lg text-foreground leading-relaxed italic">
                  "{currentTestimonial?.text}"
                </p>

                <div className="flex flex-wrap gap-3">
                  {currentTestimonial?.metrics?.map((metric, index) =>
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">

                      <Icon name="TrendingUp" size={12} />
                      {metric}
                    </span>
                  )}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-base md:text-lg">{currentTestimonial?.name}</div>
                  <div className="text-sm text-muted-foreground">{currentTestimonial?.role}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Project: {currentTestimonial?.project}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6 md:mt-8">
            {testimonials?.map((_, index) =>
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
              index === activeTestimonial ? 'w-8 bg-primary' : 'w-2 bg-muted'}`
              }
              aria-label={`View testimonial ${index + 1}`} />

            )}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-xs md:text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">30+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-warning mb-2">100%</div>
            <div className="text-xs md:text-sm text-muted-foreground">On-Time Delivery</div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;