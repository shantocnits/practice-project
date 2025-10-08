import React, { useState } from "react";

interface FormValues {
  name: string;
  email: string;
  number: string;
  subject: string;
  contact_method: string;
  contact_date: string;
  contact_time: string;
  theme_color: string;
  message: string;
  newsletter: boolean;
}

const Form = () => {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    number: "",
    subject: "",
    contact_method: "",
    contact_date: "",
    contact_time: "",
    theme_color: "",
    message: "",
    newsletter: false,
  });

  const handleChanges = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;

    setValues({
      ...values,
      [target.name]: value,
    });
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(values);
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // THE MODIFICATION: Show an alert with the submitted data
    const submittedData = `
    Form Submitted Successfully! 🎉
    -----------------------------
    Name: ${values.name}
    Email: ${values.email}
    Number: ${values.number}
    Subject: ${values.subject}
    Preferred Contact: ${values.contact_method}
    Contact Date: ${values.contact_date}
    Contact Time: ${values.contact_time}
    Theme Color: ${values.theme_color}
    Message: ${values.message}
    Newsletter Subscribed: ${values.newsletter}
    `;
    // This shows the browser alert box
    alert(submittedData);

    // The original console log is still useful for debugging:
    console.log("Submitted Values:", values);
  };

  const ResetFun = () => {
    setValues({
      name: "",
      email: "",
      number: "",
      subject: "",
      contact_method: "",
      contact_date: "",
      contact_time: "",
      theme_color: "",
      message: "",
      newsletter: false,
    });
  };

  return (
    <>
      {/* Form Start */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="group mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            onChange={(e) => handleChanges(e)}
            required
            value={values.name}
            id="name"
            placeholder="Your Name"
            className="block w-full border p-2 rounded-md border-gray-300 outline-none focus:ring-0 placeholder-gray-500 text-gray-800 text-lg"
          />
        </div>

        <div className="group mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            onChange={(e) => handleChanges(e)}
            required
            value={values.email}
            id="email"
            placeholder="Your Email"
            className="block w-full border p-2 rounded-md border-gray-300 outline-none focus:ring-0 placeholder-gray-500 text-gray-800 text-lg"
          />
        </div>

        <div className="group mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Number
          </label>
          <input
            type="tel"
            name="number"
            onChange={(e) => handleChanges(e)}
            value={values.number}
            required
            id="number"
            placeholder="Your Number"
            className="block w-full border p-2 rounded-md border-gray-300 outline-none focus:ring-0 placeholder-gray-500 text-gray-800 text-lg"
          />
        </div>

        <div className="group mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <select
            name="subject"
            onChange={(e) => handleChanges(e)}
            value={values.subject}
            required
            id="subject"
            className="block w-full border p-2 rounded-md border-gray-300 outline-none focus:ring-0 text-gray-800 text-lg"
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="support">Technical Support</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="group mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Contact Method
          </label>
          <div className="space-y-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="contact_method"
                onChange={(e) => handleChanges(e)}
                value="email"
                checked={values.contact_method === "email"}
                required
                className="form-radio text-purple-600"
              />
              <span className="ml-2">Email</span>
            </label>
            <br />
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="contact_method"
                onChange={(e) => handleChanges(e)}
                value="phone"
                checked={values.contact_method === "phone"}
                required
                className="form-radio text-purple-600"
              />
              <span className="ml-2">Phone</span>
            </label>
          </div>
        </div>

        <div className="group mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Contact Date
          </label>
          <input
            type="date"
            name="contact_date"
            onChange={(e) => handleChanges(e)}
            value={values.contact_date}
            required
            id="contact_date"
            className="block w-full border p-2 rounded-md border-gray-300 outline-none focus:ring-0 text-gray-800 text-lg"
          />
        </div>

        <div className="group mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Contact Time
          </label>
          <input
            type="time"
            name="contact_time"
            onChange={(e) => handleChanges(e)}
            value={values.contact_time}
            required
            id="contact_time"
            className="block w-full border p-2 rounded-md border-gray-300 outline-none focus:ring-0 text-gray-800 text-lg"
          />
        </div>

        <div className="group mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Theme Color
          </label>
          <input
            type="color"
            name="theme_color"
            onChange={(e) => handleChanges(e)}
            value={values.theme_color}
            required
            id="theme_color"
            className="block w-12 h-12 border rounded-md border-gray-300 outline-none focus:ring-0"
          />
        </div>

        <div className="group mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            onChange={(e) => handleChanges(e)}
            value={values.message}
            required
            id="message"
            placeholder="Your message"
            className="block w-full border p-2 rounded-md border-gray-300 outline-none focus:ring-0 placeholder-gray-500 text-gray-800 text-lg"
            rows={4}
          />
        </div>

        <div className="group mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              onChange={(e) => handleChanges(e)}
              checked={values.newsletter}
              name="newsletter"
              className="form-checkbox text-purple-600"
            />
            <span className="ml-2">Subscribe to our newsletter</span>
          </label>
        </div>

        <div className="pt-2">
          <label className="inline-flex border border-gray-400 p-2 rounded-md items-center cursor-pointer text-gray-700 hover:text-gray-900 transition-colors">
            <i className="fas fa-paperclip text-lg mr-2"></i>
            <span className="text-base font-medium">Add Attachment</span>
            <input type="file" className="sr-only" />
          </label>
        </div>

        <div className="pt-6 flex gap-3">
          <button
            type="submit"
            onClick={ResetFun}
            className="inline-flex items-center justify-center 
                              bg-[#8447E9] hover:bg-purple-700 
                              text-white font-medium 
                              px-4 py-2 
                              shadow-lg transition duration-200 
                              text-md"
          >
            Reset
          </button>

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
      {/* Form End */}
    </>
  );
};

export default Form;
