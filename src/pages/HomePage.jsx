// src/pages/HomePage.js
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import ProductListings from "../components/ProductListings";
import NewsLetter from "../components/NewsLetter";
import ViewAllProducts from "../components/ViewAllProducts";
import { useQuery } from "react-query";
import axios from "axios";
import { baseURL } from "../url/baseURL";
import Spinner from "../components/Spinner";

const HomePage = () => {
  const { isLoading, data } = useQuery("productData", () => {
    return axios.get(`${baseURL}/products`);
  });

  if (isLoading) {
    return <Spinner />;
  }

  const productData = data?.data;

  return (
    <>
      <Hero />
      <HomeCard />
      <ProductListings data={productData} />
      <ViewAllProducts />
      <NewsLetter />
    </>
  );
};

export default HomePage;
