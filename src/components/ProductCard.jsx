// src/components/ProductCard.js

const ProductCard = ({ product }) => {
  return (
    // <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
    //   <img
    //     src={product.image}
    //     alt={product.name}
    //     className="w-full h-40 object-cover"
    //   />
    //   <div className="p-4">
    //     <h2 className="text-xl font-semibold text-gray-800 mb-2">
    //       {product.name}
    //     </h2>
    //     <p className="text-lg font-bold text-gray-800 mb-2">
    //       ${product.price.toFixed(2)}
    //     </p>
    //     <p className="text-md text-gray-600 mb-2">
    //       Category: {product.category}
    //     </p>
    //     <p className="text-sm text-gray-500">
    //       Added on: {new Date(product.creationDate).toLocaleDateString()}
    //     </p>
    //   </div>
    // </div>
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {product.name}
        </h2>
        <p className="text-lg font-bold text-gray-800 mb-2">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-md text-gray-600 mb-2">
          Category: {product.category}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Added on: {new Date(product.creationDate).toLocaleDateString()}
        </p>
        {/* <button
          //   onClick={handleViewDetails}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          View Details
        </button> */}
      </div>
    </div>
  );
};

export default ProductCard;
