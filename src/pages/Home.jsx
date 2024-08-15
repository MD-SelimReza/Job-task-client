// src/pages/ProductDetails.js
// import { useParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";

const Home = () => {
  //   const { id } = useParams();

  // Fetch product details from API or context using the id
  // For demonstration purposes, use static data
  const sampleProducts = [
    {
      id: 1,
      name: "Sample Product",
      image: "https://via.placeholder.com/800",
      price: 29.99,
      category: "Electronics",
      description: "Detailed description of the product.",
      creationDate: "2024-08-10T14:48:00.000Z",
    },
    {
      id: 2,
      name: "Sample Product",
      image: "https://via.placeholder.com/800",
      price: 29.99,
      category: "Electronics",
      description: "Detailed description of the product.",
      creationDate: "2024-08-10T14:48:00.000Z",
    },
    {
      id: 3,
      name: "Sample Product",
      image: "https://via.placeholder.com/800",
      price: 29.99,
      category: "Electronics",
      description: "Detailed description of the product.",
      creationDate: "2024-08-10T14:48:00.000Z",
    },
    {
      id: 4,
      name: "Sample Product",
      image: "https://via.placeholder.com/800",
      price: 29.99,
      category: "Electronics",
      description: "Detailed description of the product.",
      creationDate: "2024-08-10T14:48:00.000Z",
    },
    {
      id: 5,
      name: "Sample Product",
      image: "https://via.placeholder.com/800",
      price: 29.99,
      category: "Electronics",
      description: "Detailed description of the product.",
      creationDate: "2024-08-10T14:48:00.000Z",
    },
    {
      id: 6,
      name: "Sample Product",
      image: "https://via.placeholder.com/800",
      price: 29.99,
      category: "Electronics",
      description: "Detailed description of the product.",
      creationDate: "2024-08-10T14:48:00.000Z",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
