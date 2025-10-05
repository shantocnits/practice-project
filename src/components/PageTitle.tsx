import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PageTitle = () => {
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname;
    switch (path) {
      case '/home':
        return 'Home | Wave Website';
      case '/about':
        return 'About | Wave Website';
      case '/blog':
        return 'Blog | Wave Website';
      case '/service':
        return 'Service | Wave Website';
      case '/contact':
        return 'Contact | Wave Website';
      default:
        return '404 Not Found';
    }
  };

  const getPageDescription = () => {
    const path = location.pathname;
    switch (path) {
      case '/home':
        return 'Welcome to our website';
      case '/about':
        return 'Learn more about us';
      case '/blog':
        return 'Read our latest blog posts';
      case '/service':
        return 'Our services';
      case '/contact':
        return 'Get in touch with us';
      default:
        return 'Page not found';
    }
  };

  return (
    <Helmet>
      <title>{getPageTitle()}</title>
      <meta name="description" content={getPageDescription()} />
    </Helmet>
  );
};

export default PageTitle;