import { Link } from 'react-router-dom';
import Icon from '../AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const navigationLinks = [
    { path: '/homepage', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'Github', url: 'https://github.com/riteshjawale' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com' },
    { name: 'Email', icon: 'Mail', url: 'mailto:jawaleritesh1@gmail.com' },
  ];

  const quickLinks = [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Sitemap', path: '/sitemap' },
  ];

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link to="/homepage" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name="Code2" size={24} color="var(--color-primary)" />
              </div>
              <span className="text-xl font-bold font-mono">Ritesh Jawale</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Building digital experiences that matter. Crafting code with precision and purpose.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors duration-200 group"
                  aria-label={social?.name}
                >
                  <Icon
                    name={social?.icon}
                    size={18}
                    className="text-muted-foreground group-hover:text-primary transition-colors duration-200"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono font-semibold text-sm mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigationLinks?.map((link) => (
                <li key={link?.path}>
                  <Link
                    to={link?.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono font-semibold text-sm mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-muted-foreground">Web Development</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">UI/UX Design</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Full Stack Solutions</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Technical Consulting</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Code Review</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono font-semibold text-sm mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="Mail" size={16} className="text-muted-foreground mt-0.5" />
                <a
                  href="mailto:jawaleritesh1@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  jawaleritesh1@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="text-muted-foreground mt-0.5" />
                <span className="text-sm text-muted-foreground">Hinjawadi, Pune, Maharashtra</span>
              </li>
              {/* <li className="flex items-start gap-2">
                <Icon name="Clock" size={16} className="text-muted-foreground mt-0.5" />
                <span className="text-sm text-muted-foreground">Mon - Fri: 9AM - 6PM PST</span>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Ritesh Jawale. All rights reserved. Built with React & Tailwind CSS.
            </p>
            <div className="flex items-center gap-4">
              {quickLinks?.map((link) => (
                <Link
                  key={link?.path}
                  to={link?.path}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link?.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;