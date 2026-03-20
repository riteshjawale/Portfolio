import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Ritesh Jawale</title>
        <meta
          name="description"
          content="Terms of service for the Ritesh Jawale portfolio website."
        />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 pt-20">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 md:py-14">
            <div className="max-w-3xl mx-auto space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold font-mono">Terms of Service</h1>
              <p className="text-muted-foreground">
                This website is provided for portfolio, contact, and informational purposes.
              </p>
              <p className="text-muted-foreground">
                Project details, case studies, and technology references are presented in good faith but may change
                over time as the portfolio is updated.
              </p>
              <p className="text-muted-foreground">
                External links are provided for convenience. Availability and content on third-party sites are outside
                the control of this website.
              </p>
              <p className="text-muted-foreground">
                By using this site, you agree to use it lawfully and not interfere with its operation or availability.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Terms;
