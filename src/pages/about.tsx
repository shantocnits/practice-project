import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Waves Technology</title>
        <link rel="canonical" href="http://mysite.com/about" />
      </Helmet>

      {/* Page Hero Start */}
      <div className="hero pb-[60px]">
        <div className="page-hero py-[50px] bg-[#E1DBF6]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full">
              <h2 className="text-2xl text-center sm:text-3xl font-semibold text-black leading-tight">
                About
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page Hero End */}
    </>
  );
};

export default About;
