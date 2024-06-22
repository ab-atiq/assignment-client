import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send email or save to database
    setSubmitted(true);
    // Reset form
    setEmail("");
    setMessage("");
  };

  return (
    <div className="my-20 px-8 w-3/4 mx-auto">
      <h1 className="my-16 text-center font-bold text-3xl">Contact Us</h1>
      <div className="text-lg leading-relaxed text-justify mb-16">
        <p className="mb-4">
          If you have any questions, comments, or concerns, please feel free to
          reach out to us. We are here to help and would love to hear from you!
        </p>
        <div className="mb-8">
          <h2 className="font-bold text-2xl">Company Information</h2>
          <p className="mt-4">
            <strong>Address:</strong> 123 E-commerce St, Online City, Web 45678
          </p>
          <p>
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p>
            <strong>Email:</strong> support@ecommerce.com
          </p>
        </div>
      </div>
      {submitted ? (
        <div className="text-center text-xl text-green-500">
          Thank you! Your message has been sent.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-base-200 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-medium mb-4">Send us an Email</h2>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              id="message"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
