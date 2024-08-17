/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    _id,
    product_name,
    product_image,
    brand,
    price,
    category,
    ratings,
    createdAt,
  } = product;

  const formatDate = (isoDate) => {
    // Check if isoDate is valid
    const date = new Date(isoDate);
    if (isNaN(date.getTime())) {
      return "Invalid Date"; // Handle invalid dates
    }
    return format(date, "MMMM d, yyyy");
  };

  const formattedDate = formatDate(createdAt);

  return (
    <div className="sm:max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-52 border-b"
        src={
          product_image ||
          "https://images.unsplash.com/photo-1719937050679-c3a2c9c67b0f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        }
        alt="Event image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product_name}</div>
        <p className="text-gray-700 text-base">{category}</p>
        <span className="text-xs text-green-500 bg-green-100 px-2 py-1 rounded-full inline-block mb-2">
          {brand}
        </span>
        <div className="flex justify-between">
          <div>
            <p className="text-gray-500">Ratings</p>
            <p className="font-bold">
              <span className="text-yellow-500 flex gap-1">
                {Array.from({ length: 5 }, (_, index) => (
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
                ))}
              </span>
            </p>
          </div>
          <div>
            <p className="text-gray-500">Price</p>
            <p className="font-bold">${price}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Created on</p>
            <p className="font-bold">{formattedDate}</p>
          </div>
          <Link
            to={`/product-details/${_id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
