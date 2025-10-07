import Form from "../components/form";

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

            <Form />
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
};

export default Contact;
