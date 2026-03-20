import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';

const links = [
  { path: '/', label: 'Home' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
  { path: '/privacy', label: 'Privacy Policy' },
  { path: '/terms', label: 'Terms of Service' },
];

const Sitemap = () => {
  return (
    <>
      <Helmet>
        <title>Sitemap - Ritesh Jawale</title>
        <meta
          name="description"
          content="Sitemap for the Ritesh Jawale portfolio website."
        />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 pt-20">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 md:py-14">
            <div className="max-w-3xl mx-auto space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold font-mono">Sitemap</h1>
              <div className="grid gap-3">
                {links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="rounded-lg border border-border bg-card px-4 py-3 hover:border-primary/50"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Sitemap;
