import { Outlet } from 'react-router-dom';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import FloatingCTA from '../components/ui/FloatingCTA';
import Breadcrumbs from '../components/ui/Breadcrumbs';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <Breadcrumbs />
          <Outlet />
        </div>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default MainLayout;