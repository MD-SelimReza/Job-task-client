// src/pages/About.js

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About TaskFindr
          </h1>
          <p className="text-lg text-gray-600">
            Discover how TaskFindr can help you efficiently manage and find the
            tasks you need. Our platform offers seamless search, filtering,
            sorting, and categorization to optimize your workflow.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              At TaskFindr, our mission is to empower individuals and businesses
              to find the right tasks with ease. We provide powerful tools for
              sorting, filtering, and managing tasks, ensuring that you can
              focus on what truly matters. Whether you're looking for specific
              tasks or managing a team, TaskFindr is designed to meet your
              needs.
            </p>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600">
              TaskFindr is built on a foundation of user-centric design and
              cutting-edge technology. Our platform is:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4">
              <li>Easy to use with an intuitive interface</li>
              <li>Highly customizable to suit your unique needs</li>
              <li>Secure, ensuring your data is always protected</li>
              <li>Efficient, with features that save you time and effort</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Meet the Team
          </h2>
          <p className="text-gray-600 mb-8">
            TaskFindr is brought to you by a team of passionate developers,
            designers, and product managers dedicated to creating the best
            experience possible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Product Manager</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Alex Johnson</h3>
              <p className="text-gray-600">UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
