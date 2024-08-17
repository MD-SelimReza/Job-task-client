import ProductListings from "../components/ProductListings";
import QueryParams from "../components/QueryParams";
import { useQuery } from "react-query";
import { baseURL } from "../url/baseURL";
import Spinner from "../components/Spinner";
import axios from "axios";

const ProductsPage = () => {
  const { isLoading, data } = useQuery("productData", () => {
    return axios.get(`${baseURL}/products`);
  });

  if (isLoading) {
    return <Spinner />;
  }

  const productData = data?.data;

  return (
    <section className="bg-blue-50 px-4 py-6">
      <QueryParams />
      <ProductListings data={productData} />
    </section>
  );
};

export default ProductsPage;
