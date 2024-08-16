// src/pages/HomePage.js
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import ProductListings from "../components/ProductListings";
import NewsLetter from "../components/NewsLetter";
import ViewAllProducts from "../components/ViewAllProducts";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCard />
      <ProductListings />
      <ViewAllProducts />
      <NewsLetter />
    </>
  );
};

export default HomePage;
