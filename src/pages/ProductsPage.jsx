import { useState } from "react";
import ProductListings from "../components/ProductListings";
import QueryParams from "../components/QueryParams";
import { useQuery } from "react-query";
import Spinner from "../components/Spinner";
import fetchProductData from "../hooks/useFetchProductData";

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    priceRange: ["", ""],
    sortOrder: "date-desc",
    searchTerm: "",
  });

  const { isLoading, data, isError, error } = useQuery(
    ["productData", { page: currentPage, limit, filters }],
    fetchProductData,
    {
      keepPreviousData: true,
    }
  );

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  const { data: productData, totalPages } = data;
  const pages = [...Array(totalPages).keys()].map((index) => index + 1);
  // console.log(data);

  const handlePaginationButton = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="bg-blue-50 px-4 py-6">
      <QueryParams onFilterChange={handleFilterChange} />
      <ProductListings data={productData} />
      <div className="pagination-controls">
        <div className="flex justify-center mt-12">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePaginationButton(currentPage - 1)}
            className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white"
          >
            <div className="flex items-center -mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="mx-1">Previous</span>
            </div>
          </button>
          {pages.map((page) => (
            <button
              key={page}
              className={`hidden ${
                currentPage === page ? "bg-blue-500 text-white" : ""
              } px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
              onClick={() => handlePaginationButton(page)}
            >
              {page}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePaginationButton(currentPage + 1)}
            className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
          >
            <div className="flex items-center -mx-1">
              <span className="mx-1">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
