import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ToolsSection = () => {
  const toolCategories = [
  {
    category: 'Development Environment',
    icon: 'Code2',
    tools: [
    {
      name: 'VS Code',
      description: 'Primary code editor with custom extensions',
      image: "https://images.unsplash.com/photo-1593720217529-01f0a5d09aed",
      imageAlt: 'Modern laptop displaying Visual Studio Code editor with colorful syntax highlighting on dark theme showing JavaScript code on wooden desk',
      favorite: true
    },
    {
      name: 'iTerm2',
      description: 'Terminal emulator for macOS',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1669ed23b-1765333399165.png",
      imageAlt: 'Close-up of terminal window with green text on black background showing command line interface with system commands',
      favorite: false
    },
    {
      name: 'Postman',
      description: 'API development and testing',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f8ff97a8-1765187422299.png",
      imageAlt: 'Computer screen showing API testing interface with JSON response data and HTTP request parameters in modern development tool',
      favorite: true
    }]

  },
  {
    category: 'Design & Prototyping',
    icon: 'Palette',
    tools: [
    {
      name: 'Figma',
      description: 'UI/UX design and collaboration',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_13002b75f-1766792816373.png",
      imageAlt: 'Designer working on user interface mockups in Figma showing colorful mobile app screens with design components and layers panel',
      favorite: true
    },
    {
      name: 'Adobe XD',
      description: 'Prototyping and wireframing',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_18c7d0091-1767719463778.png",
      imageAlt: 'Tablet displaying Adobe XD interface with wireframe sketches and design prototypes for mobile application layout',
      favorite: false
    },
    {
      name: 'Sketch',
      description: 'Vector graphics and icons',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_102f05e2d-1764747372200.png",
      imageAlt: 'MacBook screen showing Sketch application with vector icon designs and artboard layouts for web interface elements',
      favorite: false
    }]

  },
  {
    category: 'Productivity & Collaboration',
    icon: 'Users',
    tools: [
    {
      name: 'Notion',
      description: 'Documentation and project planning',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a32d9434-1765037555351.png",
      imageAlt: 'Organized workspace showing Notion interface with project boards, task lists, and documentation pages on laptop screen',
      favorite: true
    },
    {
      name: 'Slack',
      description: 'Team communication',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1889e3f17-1766998086377.png",
      imageAlt: 'Smartphone displaying Slack messaging app with team channels, direct messages, and notification badges on modern interface',
      favorite: true
    },
    {
      name: 'Linear',
      description: 'Issue tracking and sprint planning',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c3a7a3bc-1764648271797.png",
      imageAlt: 'Project management dashboard showing kanban board with task cards, sprint timeline, and team progress metrics',
      favorite: false
    }]

  },
  {
    category: 'Version Control & DevOps',
    icon: 'GitBranch',
    tools: [
    {
      name: 'GitHub',
      description: 'Code hosting and collaboration',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_15c4c8a37-1766746450128.png",
      imageAlt: 'GitHub repository page showing code commits, pull requests, and contribution graph with green activity squares',
      favorite: true
    },
    {
      name: 'Docker',
      description: 'Containerization platform',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_17f4977cd-1764649065810.png",
      imageAlt: 'Terminal window displaying Docker container logs with blue whale logo and running container status information',
      favorite: true
    },
    {
      name: 'Vercel',
      description: 'Deployment and hosting',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b612ec8c-1768131555923.png",
      imageAlt: 'Deployment dashboard showing successful build status, analytics graphs, and domain configuration for web application',
      favorite: false
    }]

  }];


  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <Icon name="Wrench" size={16} color="var(--color-secondary)" />
            <span className="text-sm font-mono text-secondary">Developer Toolkit</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Favorite Tools &
            <span className="block text-primary mt-2">Technologies</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            The essential tools and technologies that power my development workflow and help me deliver exceptional results.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          {toolCategories?.map((category, categoryIndex) =>
          <div key={categoryIndex} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={category?.icon} size={20} color="var(--color-primary)" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">{category?.category}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category?.tools?.map((tool, toolIndex) =>
              <div
                key={toolIndex}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">

                    <div className="relative h-48 overflow-hidden">
                      <Image
                    src={tool?.image}
                    alt={tool?.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                      {tool?.favorite &&
                  <div className="absolute top-3 right-3 bg-warning text-warning-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Icon name="Star" size={12} />
                          Favorite
                        </div>
                  }
                    </div>
                    <div className="p-5">
                      <h4 className="text-lg font-bold mb-2">{tool?.name}</h4>
                      <p className="text-sm text-muted-foreground">{tool?.description}</p>
                    </div>
                  </div>
              )}
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block p-6 md:p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Icon name="Sparkles" size={48} color="var(--color-primary)" />
              <div className="text-left">
                <h4 className="text-xl font-bold mb-2">Always Learning, Always Growing</h4>
                <p className="text-sm text-muted-foreground max-w-2xl">
                  I'm constantly exploring new tools and technologies to stay at the forefront of web development. My toolkit evolves as the industry advances, ensuring I always deliver cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ToolsSection;