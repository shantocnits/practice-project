import footerBg from "../assets/img/footer-bg.png";

const Footer = () => {
  return (
    <footer className="bg-black mt-[90px] text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-2xl mx-auto py-[50px]">
          <div
            className="absolute flex items-center inset-0 top-[-90%] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${footerBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="mx-auto text-center px-4">
              <h2 className="text-3xl font-normal mb-6 text-white">
                Ready for your project
              </h2>
              <a
                href="#"
                className="inline-flex items-center justify-center 
                              bg-[#8447E9] hover:bg-purple-700 
                              text-white font-medium 
                              px-8 py-3 
                              shadow-lg transition duration-200 
                              text-lg"
              >
                Get in touch
              </a>
            </div>
          </div>

        </div>

        <div className="w-full pt-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="text-4xl font-bold text-purple-600 mb-8 md:mb-0">
              Waves
            </div>

            <nav className="flex space-x-6 md:space-x-10 text-sm font-light mb-8 md:mb-0">
              <a
                href="#"
                className="hover:text-[#8447E9] transition duration-150"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-[#8447E9] transition duration-150"
              >
                About us
              </a>
              <a
                href="#"
                className="hover:text-[#8447E9] transition duration-150"
              >
                Blog
              </a>
              <a
                href="#"
                className="hover:text-[#8447E9] transition duration-150"
              >
                Services
              </a>
            </nav>

            <div className="flex space-x-4 text-xl">
              <a
                href="#"
                className="hover:text-[#8447E9] text-white transition duration-150"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="hover:text-[#8447E9] text-white transition duration-150"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="hover:text-[#8447E9] text-white transition duration-150"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="hover:text-[#8447E9] text-white transition duration-150"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 text-sm font-light">
            <div className="flex justify-between items-center py-4 text-gray-400">
              <span>Privacy Policy | Terms of Use</span>
              <span>© 2024 Waves. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
