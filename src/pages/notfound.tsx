import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 Not Found | Waves Technology</title>
        <link rel="canonical" href="http://mysite.com/404" />
      </Helmet>
        <main className="container mx-auto py-[80px]">
        <h1 className=" text-green-500 text-4xl font-bold text-center">
          404 page
        </h1>
      </main>
    </>
  );
};

export default NotFound;