const Contact = () => {
  return (
    <>

      {/* Contact Start */}
      <div className="Contact py-[80px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Interested?
              <br />
              Let's talk!
            </h1>

            <p className="text-gray-700 mb-12 max-w-lg leading-relaxed">
              Just fill this form and we will contact you promptly to discuss
              your project. Hate forms? Drop us a message at <br />
              <a
                href="mailto:info@waves.com"
                className="text-[#8447E9] hover:underline font-medium"
              >
                info@waves.com
              </a>{" "}
              or{"  "}
              <a
                href="mailto:hello@waves.com"
                className="text-[#8447E9] hover:underline font-medium"
              >
                hello@waves.com
              </a>
            </p>

            <form action="#" method="POST" className="space-y-8">
              <div className="border-b border-gray-300 pb-2">
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="block w-full border-0 focus:ring-0 focus:border-0 p-0 placeholder-gray-500 text-gray-800 text-lg"
                />
              </div>

              <div className="border-b border-gray-300 pb-2">
                <label htmlFor="email" className="sr-only">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="block w-full border-0 focus:ring-0 focus:border-0 p-0 placeholder-gray-500 text-gray-800 text-lg"
                />
              </div>

              <div className="border-b border-gray-300 pb-2">
                <label htmlFor="project" className="sr-only">
                  Tell Us About Your Project
                </label>
                <input
                  type="text"
                  name="project"
                  id="project"
                  placeholder="Tell Us About Your Project"
                  className="block w-full border-0 focus:ring-0 focus:border-0 p-0 placeholder-gray-500 text-gray-800 text-lg"
                />
              </div>

              <div className="pt-2">
                <label className="inline-flex items-center cursor-pointer text-gray-700 hover:text-gray-900 transition-colors">
                  <i className="fas fa-paperclip text-lg mr-2"></i>
                  <span className="text-base font-medium">Add Attachment</span>
                  <input type="file" className="sr-only" />
                </label>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center 
                              bg-[#8447E9] hover:bg-purple-700 
                              text-white font-medium 
                              px-4 py-2 
                              shadow-lg transition duration-200 
                              text-md"
                >
                  Send Request
                  <svg
                    className="ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M0.833338 4.16666H7.15834L4.40834 1.42499C4.25142 1.26807 4.16326 1.05524 4.16326 0.833325C4.16326 0.611407 4.25142 0.398578 4.40834 0.241658C4.56526 0.0847387 4.77809 -0.00341797 5 -0.00341797C5.22192 -0.00341797 5.43475 0.0847387 5.59167 0.241658L9.75834 4.40833C9.83421 4.48758 9.89368 4.58103 9.93334 4.68333C10.0167 4.88621 10.0167 5.11377 9.93334 5.31666C9.89368 5.41895 9.83421 5.51241 9.75834 5.59166L5.59167 9.75832C5.5142 9.83643 5.42203 9.89843 5.32049 9.94074C5.21894 9.98304 5.11001 10.0048 5 10.0048C4.88999 10.0048 4.78107 9.98304 4.67952 9.94074C4.57797 9.89843 4.48581 9.83643 4.40834 9.75832C4.33023 9.68086 4.26824 9.58869 4.22593 9.48714C4.18362 9.38559 4.16184 9.27667 4.16184 9.16666C4.16184 9.05665 4.18362 8.94773 4.22593 8.84618C4.26824 8.74463 4.33023 8.65246 4.40834 8.57499L7.15834 5.83333H0.833338C0.612324 5.83333 0.400362 5.74553 0.244082 5.58925C0.0878015 5.43297 4.76857e-06 5.22101 4.76857e-06 4.99999C4.76857e-06 4.77898 0.0878015 4.56702 0.244082 4.41074C0.400362 4.25446 0.612324 4.16666 0.833338 4.16666Z"
                      fill="#F5F5F5"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
};

export default Contact;
