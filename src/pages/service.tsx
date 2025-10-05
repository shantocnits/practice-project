import Service1 from "../assets/img/service1.png";
import Service2 from "../assets/img/service2.png";

const Service = () => {
  return (
    <>
      {/* Page Hero Start */}
      <div className="page-hero py-[50px] bg-[#E1DBF6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <p className="uppercase text-xs tracking-widest text-[#8447E9] mb-4 font-medium">
              OUR SERVICES
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-black leading-tight lg:w-4/5">
              From proof of concepts and to complex systems of an
              enterprise-level – we've got everything covered.
            </h2>
          </div>
        </div>
      </div>
      {/* Page Hero End */}

      {/* Services Start */}
      <div className="services py-[80px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center pb-[60px]">
            <div className="md:order-1">
              <h2 className="text-xl font-semibold text-[#8447E9] mb-5">
                Strategy services
              </h2>
              <p className="text-black mb-8 leading-relaxed">
                With a little group of creative, short text about an amazing
                platform, design or an awesome service you can offer... plus, a
                few lines so that you don't worry about it. Every line of copy
                has a point or an action.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">
                    Online and social media assets
                  </span>
                </p>
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">Sign up</span>
                </p>
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">Call-to-action testing</span>
                </p>
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">AB-testing</span>
                </p>
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">Remarketing/Retargeting</span>
                </p>
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">Search engine optimal</span>
                </p>
              </div>
            </div>

            <div className="md:order-2">
              <img src={Service1} alt="" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center pb-[60px]">
            <div className="order-2 md:order-1">
              <img src={Service2} alt="" />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-xl font-semibold text-[#8447E9] mb-5">
                Marketing services
              </h2>
              <p className="text-black mb-8 leading-relaxed">
                Really cool copy right? I put a full story where the title is
                for a fully expected product (or thing).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">Style & validation expert</span>
                </p>
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">Promo makers</span>
                </p>
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">Sales & testing</span>
                </p>
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">Hacking</span>
                </p>
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">Project management</span>
                </p>
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">SEO</span>
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center pb-[60px]">
            <div className="md:order-1">
              <h2 className="text-xl font-semibold text-[#8447E9] mb-5">
                Strategy services
              </h2>
              <p className="text-black mb-8 leading-relaxed">
                With a little group of creative, short text about an amazing
                platform, design or an awesome service you can offer... plus, a
                few lines so that you don't worry about it. Every line of copy
                has a point or an action.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">
                    Online and social media assets
                  </span>
                </p>
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">Sign up</span>
                </p>
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">Call-to-action testing</span>
                </p>
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">AB-testing</span>
                </p>
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">Remarketing/Retargeting</span>
                </p>
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">Search engine optimal</span>
                </p>
              </div>
            </div>

            <div className="md:order-2">
              <img src={Service1} alt="" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center pb-[60px]">
            <div className="order-2 md:order-1">
              <img src={Service2} alt="" />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-xl font-semibold text-[#8447E9] mb-5">
                Marketing services
              </h2>
              <p className="text-black mb-8 leading-relaxed">
                Really cool copy right? I put a full story where the title is
                for a fully expected product (or thing).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">Style & validation expert</span>
                </p>
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">Promo makers</span>
                </p>
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">Sales & testing</span>
                </p>
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">Hacking</span>
                </p>
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">Project management</span>
                </p>
                <p className="flex items-center gap-2 text-[#8447E9] text-sm">
                  <span className="bullet-point mt-1">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect y="0.1875" width="16" height="3" fill="#BDB0EC" />
                    </svg>
                  </span>
                  <span className="font-medium">SEO</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services End */}
    </>
  );
};

export default Service;
