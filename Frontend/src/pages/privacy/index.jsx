import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Ritesh Jawale</title>
        <meta
          name="description"
          content="Privacy policy for the Ritesh Jawale portfolio website."
        />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 pt-20">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 md:py-14">
            <div className="max-w-3xl mx-auto space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold font-mono">Privacy Policy</h1>
              <p className="text-muted-foreground">
                This portfolio collects only the information you choose to share, such as contact form details or
                email inquiries.
              </p>
              <p className="text-muted-foreground">
                Any information submitted is used only to respond to your inquiry, discuss project work, or continue
                a conversation you started.
              </p>
              <p className="text-muted-foreground">
                This site may rely on third-party services such as email, hosting, analytics, and social platforms.
                Those services are governed by their own privacy policies.
              </p>
              <p className="text-muted-foreground">
                If you would like any shared information corrected or removed, contact
                {' '}<a className="text-primary hover:underline" href="mailto:jawaleritesh1@gmail.com">jawaleritesh1@gmail.com</a>.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Privacy;
