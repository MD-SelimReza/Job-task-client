import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <>
      <div className="bg-indigo-700 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Don't Miss Out!</h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter for the latest deals and updates
          </p>
          <Link
            to="/subscribe"
            className="bg-white text-blue-600 font-bold py-3 px-6 rounded-md shadow-md hover:bg-gray-100"
          >
            Subscribe Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
