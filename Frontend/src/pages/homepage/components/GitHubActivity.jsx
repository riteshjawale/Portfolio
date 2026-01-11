import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GitHubActivity = () => {
  const [selectedYear] = useState(2026);

  const contributionData = [
    { month: 'Jan', contributions: 45, color: 'var(--color-accent)' },
    { month: 'Feb', contributions: 52, color: 'var(--color-accent)' },
    { month: 'Mar', contributions: 38, color: 'var(--color-primary)' },
    { month: 'Apr', contributions: 61, color: 'var(--color-accent)' },
    { month: 'May', contributions: 48, color: 'var(--color-accent)' },
    { month: 'Jun', contributions: 55, color: 'var(--color-accent)' },
    { month: 'Jul', contributions: 42, color: 'var(--color-primary)' },
    { month: 'Aug', contributions: 58, color: 'var(--color-accent)' },
    { month: 'Sep', contributions: 50, color: 'var(--color-accent)' },
    { month: 'Oct', contributions: 47, color: 'var(--color-accent)' },
    { month: 'Nov', contributions: 53, color: 'var(--color-accent)' },
    { month: 'Dec', contributions: 40, color: 'var(--color-primary)' }
  ];

  const stats = [
    { label: 'Total Contributions', value: '589', icon: 'GitCommit', color: 'var(--color-primary)' },
    { label: 'Repositories', value: '42', icon: 'FolderGit2', color: 'var(--color-secondary)' },
    { label: 'Pull Requests', value: '127', icon: 'GitPullRequest', color: 'var(--color-accent)' },
    { label: 'Code Reviews', value: '93', icon: 'FileCode', color: 'var(--color-warning)' }
  ];

  const recentActivity = [
    {
      type: 'commit',
      repo: 'react-dashboard',
      message: 'Implemented real-time data synchronization',
      time: '2 hours ago',
      icon: 'GitCommit'
    },
    {
      type: 'pr',
      repo: 'nodejs-api',
      message: 'Added authentication middleware',
      time: '5 hours ago',
      icon: 'GitPullRequest'
    },
    {
      type: 'review',
      repo: 'typescript-utils',
      message: 'Reviewed code quality improvements',
      time: '1 day ago',
      icon: 'FileCode'
    },
    {
      type: 'star',
      repo: 'open-source-toolkit',
      message: 'Received 50+ stars on new project',
      time: '2 days ago',
      icon: 'Star'
    }
  ];

  const maxContributions = Math.max(...contributionData?.map(d => d?.contributions));

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Open Source Contributions
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Active contributor to the developer community with consistent engagement
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats?.map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-4 md:p-6 border border-border text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-3">
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${stat?.color}20` }}
                  >
                    <Icon name={stat?.icon} size={20} color={stat?.color} />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat?.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat?.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-lg p-6 md:p-8 border border-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg md:text-xl font-semibold">
                Contribution Activity - {selectedYear}
              </h3>
              <span className="text-sm text-muted-foreground font-mono">
                {contributionData?.reduce((sum, d) => sum + d?.contributions, 0)} contributions
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-end justify-between gap-2 h-32 md:h-40">
                {contributionData?.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="relative w-full flex items-end justify-center h-full">
                      <div
                        className="w-full rounded-t transition-all duration-300 hover:opacity-80 cursor-pointer"
                        style={{
                          height: `${(data?.contributions / maxContributions) * 100}%`,
                          backgroundColor: data?.color,
                          minHeight: '8px'
                        }}
                        title={`${data?.month}: ${data?.contributions} contributions`}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{data?.month}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: 'var(--color-primary)' }} />
                  <span className="text-xs text-muted-foreground">Low Activity</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: 'var(--color-accent)' }} />
                  <span className="text-xs text-muted-foreground">High Activity</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 md:p-8 border border-border">
            <h3 className="text-lg md:text-xl font-semibold mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity?.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={activity?.icon} size={16} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm md:text-base mb-1">{activity?.message}</div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-mono">{activity?.repo}</span>
                      <span>•</span>
                      <span>{activity?.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              iconName="Github"
              iconPosition="left"
              onClick={() => window.open('https://github.com/riteshjawale', '_blank')}
            >
              View GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;