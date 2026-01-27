import { useState } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import FloatingCTA from '../../components/ui/FloatingCTA';
import Icon from '../../components/AppIcon';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { Checkbox } from '../../components/ui/Checkbox';
import ContactMethodCard from './components/ContactMethodCard';
import ProjectTypeCard from './components/ProjectTypeCard';
import BudgetRangeCard from './components/BudgetRangeCard';
import TimelineCard from './components/TimelineCard';
import AvailabilityIndicator from './components/AvailabilityIndicator';
import SuccessModal from './components/SuccessModal';

const Contact = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    newsletter: false,
    preferredContact: 'email'
  });
  const [errors, setErrors] = useState({});

  const contactMethods = [
  {
    icon: 'Mail',
    title: 'Email',
    value: 'jawaleritesh1@gmail.com',
    link: 'mailto:jawaleritesh1@gmail.com',
    description: 'Best for detailed project inquiries'
  },
  {
    icon: 'Linkedin',
    title: 'LinkedIn',
    value: 'linkedin.com/in/ritesh-jawale',
    link: 'https://linkedin.com/in/ritesh-jawale',
    description: 'Professional networking and connections'
  },
  {
    icon: 'Github',
    title: 'GitHub',
    value: 'github.com/riteshjawale',
    link: 'https://github.com/riteshjawale',
    description: 'View my code and open-source contributions'
  },
  {
    icon: 'Calendar',
    title: 'Schedule Call',
    value: 'Book 30-min consultation',
    link: 'https://calendly.com/devportfolio',
    description: 'Direct calendar booking for meetings'
  }];


  const projectTypes = [
  {
    icon: 'Globe',
    title: 'Web Application',
    description: 'Full-stack web apps, SaaS platforms, dashboards'
  },
  {
    icon: 'Smartphone',
    title: 'Mobile Development',
    description: 'React Native apps, progressive web apps'
  },
  {
    icon: 'Palette',
    title: 'UI/UX Design',
    description: 'Interface design, prototyping, user research'
  },
  {
    icon: 'Code2',
    title: 'Technical Consulting',
    description: 'Code review, architecture planning, mentoring'
  },
  {
    icon: 'Zap',
    title: 'API Development',
    description: 'RESTful APIs, GraphQL, microservices'
  },
  {
    icon: 'Users',
    title: 'Team Augmentation',
    description: 'Join your team for specific projects'
  }];


  const budgetRanges = [
  { range: '₹20,000 - ₹30,000', description: 'Small projects, MVPs' },
  { range: '₹40,000 - ₹90,000', description: 'Medium complexity projects' },
  { range: '₹90,000 - ₹150,000', description: 'Large-scale applications' },
  { range: '₹150,000+', description: 'Enterprise solutions' }];


  const timelines = [
  { timeline: '1-2 weeks', description: 'Quick turnaround projects' },
  { timeline: '1-2 months', description: 'Standard project timeline' },
  { timeline: '3-6 months', description: 'Complex, phased development' },
  { timeline: '6+ months', description: 'Long-term partnerships' }];


  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData?.name?.trim()) newErrors.name = 'Name is required';
      if (!formData?.email?.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
        newErrors.email = 'Invalid email format';
      }
      if (!formData?.phone?.trim()) newErrors.phone = 'Phone number is required';
    }

    if (step === 2) {
      if (!formData?.projectType) newErrors.projectType = 'Please select a project type';
    }

    if (step === 3) {
      if (!formData?.budget) newErrors.budget = 'Please select a budget range';
      if (!formData?.timeline) newErrors.timeline = 'Please select a timeline';
    }

    if (step === 4) {
      if (!formData?.message?.trim()) {
        newErrors.message = 'Please describe your project';
      } else if (formData?.message?.trim()?.length < 50) {
        newErrors.message = 'Please provide at least 50 characters';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    setErrors({});
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (validateStep(4)) {
      setShowSuccessModal(true);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    setCurrentStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: '',
      newsletter: false,
      preferredContact: 'email'
    });
    setErrors({});
  };

  const progressPercentage = currentStep / 4 * 100;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-4">
        <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 md:pt-16 lg:pt-20">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Icon name="MessageSquare" size={16} color="var(--color-primary)" />
                <span className="text-sm font-mono text-primary">Let's Build Something Amazing</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono mb-4">
                Get in Touch
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                Whether you have a project in mind, need technical consulting, or just want to connect, I'm here to help bring your ideas to life.
              </p>
            </div>
          </div>
        </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-8 lg:py-16">
          <div className="max-w-6xl mx-auto">
            <AvailabilityIndicator
              status="available"
              message="Currently Available for New Projects"
              responseTime="24-48 hours" />


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 md:mt-12">
              <div className="lg:col-span-2">
                <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl md:text-2xl font-bold font-mono">Project Inquiry Form</h2>
                      <span className="text-sm font-mono text-muted-foreground">
                        Step {currentStep} of 4
                      </span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }} />

                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {currentStep === 1 &&
                    <div className="space-y-6 animate-fade-in">
                        <div>
                          <h3 className="text-lg font-semibold font-mono mb-4">Your Information</h3>
                          <div className="space-y-4">
                            <Input
                            label="Full Name"
                            type="text"
                            placeholder="Your Name"
                            required
                            value={formData?.name}
                            onChange={(e) => handleInputChange('name', e?.target?.value)}
                            error={errors?.name} />

                            <Input
                            label="Email Address"
                            type="email"
                            placeholder="email@example.com"
                            required
                            value={formData?.email}
                            onChange={(e) => handleInputChange('email', e?.target?.value)}
                            error={errors?.email} />

                            <Input
                            label="Phone Number"
                            type="tel"
                            placeholder="Enter  Mobile Number"
                            required
                            value={formData?.phone}
                            onChange={(e) => handleInputChange('phone', e?.target?.value)}
                            error={errors?.phone} />

                            <Input
                            label="Company (Optional)"
                            type="text"
                            placeholder="Your Company Name"
                            value={formData?.company}
                            onChange={(e) => handleInputChange('company', e?.target?.value)} />

                          </div>
                        </div>
                      </div>
                    }

                    {currentStep === 2 &&
                    <div className="space-y-6 animate-fade-in">
                        <div>
                          <h3 className="text-lg font-semibold font-mono mb-2">Project Type</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Select the type of project you need help with
                          </p>
                          {errors?.projectType &&
                        <p className="text-sm text-error mb-4">{errors?.projectType}</p>
                        }
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {projectTypes?.map((type) =>
                          <ProjectTypeCard
                            key={type?.title}
                            icon={type?.icon}
                            title={type?.title}
                            description={type?.description}
                            isSelected={formData?.projectType === type?.title}
                            onClick={() => {
                              handleInputChange('projectType', type?.title);
                            }} />

                          )}
                          </div>
                        </div>
                      </div>
                    }

                    {currentStep === 3 &&
                    <div className="space-y-6 animate-fade-in">
                        <div>
                          <h3 className="text-lg font-semibold font-mono mb-2">Budget Range</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Select your estimated project budget
                          </p>
                          {errors?.budget &&
                        <p className="text-sm text-error mb-4">{errors?.budget}</p>
                        }
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {budgetRanges?.map((budget) =>
                          <BudgetRangeCard
                            key={budget?.range}
                            range={budget?.range}
                            description={budget?.description}
                            isSelected={formData?.budget === budget?.range}
                            onClick={() => handleInputChange('budget', budget?.range)} />

                          )}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold font-mono mb-2">Project Timeline</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            When do you need the project completed?
                          </p>
                          {errors?.timeline &&
                        <p className="text-sm text-error mb-4">{errors?.timeline}</p>
                        }
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {timelines?.map((time) =>
                          <TimelineCard
                            key={time?.timeline}
                            timeline={time?.timeline}
                            description={time?.description}
                            isSelected={formData?.timeline === time?.timeline}
                            onClick={() => handleInputChange('timeline', time?.timeline)} />

                          )}
                          </div>
                        </div>
                      </div>
                    }

                    {currentStep === 4 &&
                    <div className="space-y-6 animate-fade-in">
                        <div>
                          <h3 className="text-lg font-semibold font-mono mb-4">Project Details</h3>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium mb-2">
                                Project Description <span className="text-error">*</span>
                              </label>
                              <textarea
                              className="w-full min-h-[150px] px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
                              placeholder="Tell me about your project, goals, and any specific requirements..."
                              value={formData?.message}
                              onChange={(e) => handleInputChange('message', e?.target?.value)} />

                              {errors?.message &&
                            <p className="text-sm text-error mt-2">{errors?.message}</p>
                            }
                              <p className="text-xs text-muted-foreground mt-2">
                                {formData?.message?.length} / 50 characters minimum
                              </p>
                            </div>

                            <div>
                              <label className="block text-sm font-medium mb-3">
                                Preferred Contact Method
                              </label>
                              <div className="space-y-2">
                                <Checkbox
                                label="Email"
                                checked={formData?.preferredContact === 'email'}
                                onChange={() => handleInputChange('preferredContact', 'email')} />

                                <Checkbox
                                label="Phone"
                                checked={formData?.preferredContact === 'phone'}
                                onChange={() => handleInputChange('preferredContact', 'phone')} />

                                <Checkbox
                                label="Video Call"
                                checked={formData?.preferredContact === 'video'}
                                onChange={() => handleInputChange('preferredContact', 'video')} />

                              </div>
                            </div>

                            <div className="pt-4 border-t border-border">
                              <Checkbox
                              label="Subscribe to newsletter for development tips and updates"
                              checked={formData?.newsletter}
                              onChange={(e) =>
                              handleInputChange('newsletter', e?.target?.checked)
                              } />

                            </div>
                          </div>
                        </div>
                      </div>
                    }

                    <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-border">
                      {currentStep > 1 &&
                      <Button
                        type="button"
                        variant="outline"
                        iconName="ChevronLeft"
                        iconPosition="left"
                        onClick={handlePrevious}
                        className="sm:w-auto">

                          Previous
                        </Button>
                      }
                      {currentStep < 4 ?
                      <Button
                        type="button"
                        variant="default"
                        iconName="ChevronRight"
                        iconPosition="right"
                        onClick={handleNext}
                        className="sm:ml-auto sm:w-auto">

                          Next Step
                        </Button> :

                      <Button
                        type="submit"
                        variant="default"
                        iconName="Send"
                        iconPosition="right"
                        className="sm:ml-auto sm:w-auto">

                          Submit Inquiry
                        </Button>
                      }
                    </div>
                  </form>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold font-mono mb-4">Quick Contact</h3>
                  <div className="space-y-3">
                    {contactMethods?.map((method) =>
                    <ContactMethodCard
                      key={method?.title}
                      icon={method?.icon}
                      title={method?.title}
                      value={method?.value}
                      link={method?.link}
                      description={method?.description} />

                    )}
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold font-mono mb-4">Office Hours</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Monday - Friday</p>
                        <p className="text-sm text-muted-foreground">9:00 AM - 6:00 PM PST</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">Hinjawadi, Pune, Maharashtra</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Globe" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Remote Work</p>
                        <p className="text-sm text-muted-foreground">Available worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 md:p-12 text-center">
              <Icon name="Zap" size={48} color="var(--color-primary)" className="mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold font-mono mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how I can help bring your vision to life with clean code and creative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  onClick={() => window.open('https://calendly.com/devportfolio', '_blank')}>

                  Schedule a Call
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="FileText"
                  iconPosition="left"
                  onClick={() => window.open('/portfolio', '_self')}>

                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleModalClose}
        formData={formData} />

    </div>);

};

export default Contact;