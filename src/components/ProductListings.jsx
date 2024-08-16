/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";

const ProductListings = ({ data }) => {
  const productData = data?.data;

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productData?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListings;
