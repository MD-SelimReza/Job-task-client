const QueryParams = () => {
  return (
    <section className="container mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
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
    </section>
  );
};

export default QueryParams;
