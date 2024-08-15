// src/pages/Contact.js

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you! Whether you have a question, feedback,
            or just want to say hello, feel free to reach out to us.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              You can also reach us directly through the following contact
              information:
            </p>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-800">Email:</h3>
              <p className="text-gray-600">support@taskfindr.com</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-800">Phone:</h3>
              <p className="text-gray-600">+1 (123) 456-7890</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-800">Address:</h3>
              <p className="text-gray-600">
                123 TaskFindr Street, Suite 100, City, State, 12345
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Our Location
          </h2>
          <div className="w-full h-64 bg-gray-300 rounded-lg shadow-md flex items-center justify-center">
            {/* Replace this div with an actual map iframe */}
            <p className="text-gray-700">[Map Placeholder]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
