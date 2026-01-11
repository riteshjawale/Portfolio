import Icon from '../../../components/AppIcon';

const PerformanceMetrics = () => {
  const metrics = [
    {
      category: 'Performance',
      score: 98,
      icon: 'Gauge',
      color: 'var(--color-success)',
      details: [
        { label: 'First Contentful Paint', value: '0.8s' },
        { label: 'Time to Interactive', value: '1.2s' },
        { label: 'Speed Index', value: '1.5s' }
      ]
    },
    {
      category: 'Accessibility',
      score: 100,
      icon: 'Eye',
      color: 'var(--color-primary)',
      details: [
        { label: 'WCAG 2.1 AA', value: 'Compliant' },
        { label: 'Keyboard Navigation', value: 'Full Support' },
        { label: 'Screen Reader', value: 'Optimized' }
      ]
    },
    {
      category: 'Best Practices',
      score: 95,
      icon: 'CheckCircle2',
      color: 'var(--color-accent)',
      details: [
        { label: 'HTTPS', value: 'Enabled' },
        { label: 'Security Headers', value: 'Configured' },
        { label: 'Modern Standards', value: 'Followed' }
      ]
    },
    {
      category: 'SEO',
      score: 100,
      icon: 'Search',
      color: 'var(--color-secondary)',
      details: [
        { label: 'Meta Tags', value: 'Optimized' },
        { label: 'Structured Data', value: 'Implemented' },
        { label: 'Mobile Friendly', value: 'Yes' }
      ]
    }
  ];

  const getScoreColor = (score) => {
    if (score >= 90) return 'var(--color-success)';
    if (score >= 70) return 'var(--color-warning)';
    return 'var(--color-error)';
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Performance Excellence
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with performance, accessibility, and best practices at the core
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics?.map((metric, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${metric?.color}20` }}
                  >
                    <Icon name={metric?.icon} size={24} color={metric?.color} />
                  </div>
                  <div className="text-right">
                    <div
                      className="text-2xl font-bold"
                      style={{ color: getScoreColor(metric?.score) }}
                    >
                      {metric?.score}
                    </div>
                    <div className="text-xs text-muted-foreground">/ 100</div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-4">{metric?.category}</h3>

                <div className="space-y-3">
                  {metric?.details?.map((detail, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{detail?.label}</span>
                      <span className="font-medium">{detail?.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${metric?.score}%`,
                        backgroundColor: getScoreColor(metric?.score)
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 bg-card rounded-lg p-6 md:p-8 border border-border">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  Lighthouse Score: 98/100
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Consistently achieving top-tier performance scores across all metrics. Built with modern web standards and optimized for speed, accessibility, and user experience.
                </p>
              </div>
              <div className="flex items-center gap-2 text-success">
                <Icon name="TrendingUp" size={20} />
                <span className="text-sm font-medium">Excellent</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <Icon name="Zap" size={32} className="text-warning mx-auto mb-3" />
              <div className="text-2xl font-bold mb-2">1.2s</div>
              <div className="text-sm text-muted-foreground">Average Load Time</div>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <Icon name="Shield" size={32} className="text-success mx-auto mb-3" />
              <div className="text-2xl font-bold mb-2">A+</div>
              <div className="text-sm text-muted-foreground">Security Rating</div>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <Icon name="Smartphone" size={32} className="text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Mobile Optimized</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;