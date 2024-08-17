/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";
import Spinner from "./Spinner";

const ProductListings = ({ data, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }

  // Ensure productData is an array
  const productData = Array.isArray(data) ? data : [];

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productData.length > 0 ? (
            productData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center text-gray-500">No products available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductListings;
