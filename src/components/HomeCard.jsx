import { Link } from "react-router-dom";
import Card from "./Card";

const HomeCard = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">For Shoppers</h2>
            <p className="mt-2 mb-4">
              Explore our wide range of products and find what you need today
            </p>
            <Link
              to="/products"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Products
            </Link>
          </Card>
          <Card bg="bg-indigo-100">
            <h2 className="text-2xl font-bold">For Sellers</h2>
            <p className="mt-2 mb-4">
              List your products to reach a larger audience and increase sales
            </p>
            <Link
              to="/add-product"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Add Product
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCard;
