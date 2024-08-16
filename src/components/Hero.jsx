import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Hero = ({
  title = "Welcome to Our Store",
  subtitle = "Find the best products at unbeatable prices",
}) => {
  return (
    <section className="bg-indigo-700 text-white py-20 mb-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-8">{subtitle}</p>
        <Link
          to="/products"
          className="bg-white text-blue-600 font-bold py-3 px-6 rounded-md shadow-md hover:bg-gray-100"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
