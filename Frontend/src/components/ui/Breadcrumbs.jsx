import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location?.pathname?.split('/')?.filter((x) => x);

  const breadcrumbNameMap = {
    homepage: 'Home',
    portfolio: 'Portfolio',
    about: 'About',
    skills: 'Skills',
    blog: 'Blog',
    contact: 'Contact',
  };

  if (pathnames?.length === 0 || (pathnames?.length === 1 && pathnames?.[0] === 'homepage')) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link
            to="/homepage"
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <Icon name="Home" size={16} />
          </Link>
        </li>

        {pathnames?.map((pathname, index) => {
          const routeTo = `/${pathnames?.slice(0, index + 1)?.join('/')}`;
          const isLast = index === pathnames?.length - 1;
          const breadcrumbName = breadcrumbNameMap?.[pathname] || pathname;

          return (
            <li key={routeTo} className="flex items-center gap-2">
              <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
              {isLast ? (
                <span className="font-medium text-foreground">{breadcrumbName}</span>
              ) : (
                <Link
                  to={routeTo}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {breadcrumbName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;