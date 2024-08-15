// src/pages/ProductPage.js

const Products = () => {
  //   if (!product) {
  //     return (
  //       <div className="text-center text-gray-600 py-16">Product not found.</div>
  //     );
  //   }

  //   const { name, image, description, price, category, ratings, creationDate } =
  //     product;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* search and filter section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            {/* <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Search products..."
                // value={searchTerm}
                // onChange={handleSearchChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div> */}
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <select
                // value={selectedCategory}
                // onChange={handleCategoryChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              >
                <option value="">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                {/* Add more categories as needed */}
              </select>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <select
                // value={selectedBrand}
                // onChange={handleBrandChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              >
                <option value="">All Brands</option>
                <option value="BrandA">Brand A</option>
                <option value="BrandB">Brand B</option>
                {/* Add more brands as needed */}
              </select>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Price range (min,max)"
                // value={priceRange.join(",")}
                // onChange={handlePriceChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <select
                //   value={sortOrder}
                //   onChange={handleSortChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              >
                <option value="date-desc">Newest First</option>
                <option value="date-asc">Oldest First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Search products..."
              //   value={searchTerm}
              //   onChange={handleSearchChange}
              className="w-full p-3 border border-gray-300 rounded-md mr-2"
            />
            <button
              //   onClick={handleSearch}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md"
            >
              Search
            </button>
          </div>
        </div>

        {/* product list */}
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Product Image */}
          <div className="md:w-1/2">
            <img src="" alt="alt" className="w-full h-64 object-cover" />
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {name ? name : "Name"}
              </h1>
              <p className="text-gray-600 mb-4">
                {/* {description} */}
                Proactively synergize performance based methods of empowerment
                rather than extensible solutions. Authoritatively administrate
                standards compliant users vis-a-vis next-generation outsourcing.
                Rapidiously.
              </p>
              <p className="text-lg font-semibold text-gray-800 mb-4">
                {/* Price: ${price ? price?.toFixed(2) : "45"} */}
                Price: $450
              </p>
              <p className="text-md text-gray-600 mb-4">
                {/* Category: {category ? category : "category"} */}
                Category
              </p>
              <div className="flex items-center mb-4">
                <span className="text-md font-semibold text-gray-800 mr-2">
                  Ratings:
                </span>
                <span className="text-yellow-500">
                  {/* {Array.from({ length: 5 }, (_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-5 h-5 ${
                        index < ratings ? "fill-current" : "text-gray-300"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
                    </svg>
                  ))} */}
                  rating
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                {/* Created on: {new Date(creationDate).toLocaleDateString()} at{" "}
                {new Date(creationDate).toLocaleTimeString()} */}
                Created on: 03/23/24 at 14/03/24
              </p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
