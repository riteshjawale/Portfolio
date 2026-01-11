import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BehindScenesSection = () => {
  const [activeImage, setActiveImage] = useState(0);

  const workspaceImages = [
  {
    image: "https://images.unsplash.com/photo-1573377843702-426d10da9054",
    imageAlt: 'Modern minimalist home office workspace with dual monitors displaying code, mechanical keyboard, and plants on clean white desk near window',
    title: 'My Development Setup',
    description: 'Where the magic happens - dual monitors, ergonomic chair, and plenty of natural light'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16f304344-1766999655988.png",
    imageAlt: 'Cozy coffee shop workspace with laptop showing code editor, steaming coffee cup, and notebook with sketches on wooden table',
    title: 'Coffee Shop Coding',
    description: 'Sometimes a change of scenery sparks the best ideas'
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16a546e2e-1766741797712.png",
    imageAlt: 'Team collaboration session with developers gathered around large monitor discussing code architecture with sticky notes on whiteboard',
    title: 'Team Collaboration',
    description: 'Working with talented people on challenging problems'
  },
  {
    image: "https://images.unsplash.com/photo-1583907669219-e8c95feaee12",
    imageAlt: 'Late night coding session with laptop glowing in dark room showing debugging console and multiple terminal windows',
    title: 'Late Night Sessions',
    description: 'When you are in the zone, time becomes irrelevant'
  }];


  const dailyRoutine = [
  {
    time: '7:00 AM',
    activity: 'Morning Review',
    description: 'Check emails, review PRs, plan the day',
    icon: 'Coffee'
  },
  {
    time: '9:00 AM',
    activity: 'Deep Work',
    description: 'Focus time for complex problem-solving',
    icon: 'Code2'
  },
  {
    time: '12:00 PM',
    activity: 'Team Sync',
    description: 'Stand-ups, code reviews, collaboration',
    icon: 'Users'
  },
  {
    time: '2:00 PM',
    activity: 'Development',
    description: 'Building features, writing tests',
    icon: 'Wrench'
  },
  {
    time: '5:00 PM',
    activity: 'Learning Time',
    description: 'Exploring new tech, reading articles',
    icon: 'BookOpen'
  },
  {
    time: '7:00 PM',
    activity: 'Side Projects',
    description: 'Personal projects and open source',
    icon: 'Rocket'
  }];


  const funFacts = [
  { icon: 'Coffee', fact: 'Average 4 cups of coffee per day' },
  { icon: 'Music', fact: 'Code best with lo-fi hip hop' },
  { icon: 'Moon', fact: 'Night owl - most productive after 8 PM' },
  { icon: 'Gamepad2', fact: 'Gaming breaks help solve bugs' },
  { icon: 'Book', fact: 'Read 2 tech books per month' },
  { icon: 'Bike', fact: 'Cycling clears the mind' }];


  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Icon name="Camera" size={16} color="var(--color-accent)" />
            <span className="text-sm font-mono text-accent">Behind the Scenes</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            A Day in the Life
            <span className="block text-primary mt-2">of a Developer</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Get a glimpse into my daily routine, workspace, and the habits that keep me productive and creative.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-96 lg:h-full min-h-[400px]">
                <Image
                  src={workspaceImages?.[activeImage]?.image}
                  alt={workspaceImages?.[activeImage]?.imageAlt}
                  className="w-full h-full object-cover" />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {workspaceImages?.[activeImage]?.title}
                  </h3>
                  <p className="text-sm text-white/90">
                    {workspaceImages?.[activeImage]?.description}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6">Workspace Gallery</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {workspaceImages?.map((img, index) =>
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    activeImage === index ?
                    'border-primary scale-105' : 'border-transparent hover:border-muted'}`
                    }>

                      <Image
                      src={img?.image}
                      alt={img?.imageAlt}
                      className="w-full h-full object-cover" />

                    </button>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  Click on any image to view it larger. These are the spaces where I spend most of my time creating, learning, and collaborating.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Clock" size={24} color="var(--color-primary)" />
                <h3 className="text-xl font-bold">Daily Routine</h3>
              </div>
              <div className="space-y-4">
                {dailyRoutine?.map((item, index) =>
                <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={item?.icon} size={18} color="var(--color-primary)" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-mono font-semibold text-primary">{item?.time}</span>
                        <span className="text-sm font-semibold">{item?.activity}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item?.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Sparkles" size={24} color="var(--color-secondary)" />
                <h3 className="text-xl font-bold">Fun Facts</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {funFacts?.map((item, index) =>
                <div
                  key={index}
                  className="p-4 bg-muted/50 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">

                    <Icon name={item?.icon} size={24} className="text-primary mb-3" />
                    <p className="text-sm text-foreground">{item?.fact}</p>
                  </div>
                )}
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground italic">
                  "The best code is written when you are comfortable, focused, and enjoying the process."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 md:p-8 border border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <Icon name="Heart" size={32} color="var(--color-primary)" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-xl font-bold mb-2">Work-Life Balance Matters</h4>
                <p className="text-sm text-muted-foreground">
                  While I'm passionate about coding, I believe in maintaining a healthy balance. Regular breaks, physical activity, and time with loved ones keep me energized and creative. The best solutions often come when you step away from the screen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default BehindScenesSection;