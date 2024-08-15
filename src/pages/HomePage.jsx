// src/pages/HomePage.js
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Featured Product 1",
      image: "https://via.placeholder.com/400",
      price: 49.99,
      category: "Electronics",
      creationDate: "2024-08-10T14:48:00.000Z",
    },
    {
      id: 2,
      name: "Featured Product 2",
      image: "https://via.placeholder.com/400",
      price: 29.99,
      category: "Furniture",
      creationDate: "2024-08-11T10:24:00.000Z",
    },
    // Add more featured products as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-xl mb-8">
            Find the best products at unbeatable prices
          </p>
          <Link
            to="/products"
            className="bg-white text-blue-600 font-bold py-3 px-6 rounded-md shadow-md hover:bg-gray-100"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-600 text-white py-16">
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
    </div>
  );
};

export default HomePage;
