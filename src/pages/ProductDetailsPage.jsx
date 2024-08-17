/* eslint-disable no-unsafe-optional-chaining */
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import { baseURL } from "../url/baseURL";
import { useQuery } from "react-query";
import Spinner from "../components/Spinner";
import { format } from "date-fns";
import toast from "react-hot-toast";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, data } = useQuery("productData", () => {
    return axios.get(`${baseURL}/products/${id}`);
  });

  if (isLoading) {
    return <Spinner />;
  }

  const {
    _id,
    product_name,
    product_image,
    description,
    price,
    category,
    ratings,
    createdAt,
  } = data?.data;

  const formatDate = (isoDate) => {
    // Check if isoDate is valid
    const date = new Date(isoDate);
    if (isNaN(date.getTime())) {
      return "Invalid Date"; // Handle invalid dates
    }
    return format(date, "MMMM d, yyyy");
  };

  const formattedDate = formatDate(createdAt);

  const onDeleteClick = async (id) => {
    // Confirm deletion
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmed) return;

    try {
      // Send DELETE request to the backend
      const response = await axios.delete(`${baseURL}/products/${id}`);

      // Handle successful deletion
      toast.success(response?.data?.message || "Product deleted successfully");

      // Optionally redirect after deletion
      navigate("/products"); // Uncomment if you want to navigate after deletion
    } catch (error) {
      // Handle errors
      console.error("There was an error deleting the product:", error);
      toast.error("Failed to delete product. Please try again.");
    }
  };

  const onSaveClick = () => {
    toast.success("Product added to cart successfully");
  };

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/products"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Products Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
            <main className="md:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{category}</div>
                <h1 className="text-3xl font-bold mb-4">{product_name}</h1>
                <div className="text-gray-500 mb-4">
                  <p>Created on: {formattedDate}</p>
                </div>
              </div>

              <div className="flex flex-col p-4 gap-4 mt-8 md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Product Image */}
                <div className="md:w-1/2">
                  <img
                    src={product_image}
                    alt="alt"
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-indigo-800 text-lg font-bold mb-4">
                      Product Description
                    </h3>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <p className="text-lg font-semibold text-gray-800 mb-4">
                      Price: ${price}
                    </p>
                    <div className="flex items-center">
                      <span className="text-md font-semibold text-gray-800 mr-2">
                        Ratings:
                      </span>
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
                    </div>
                  </div>
                </div>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              {/* <!-- Manage --> */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Manage Product</h3>
                <Link
                  to={`/update-product/${_id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Product
                </Link>
                <button
                  onClick={() => onDeleteClick(_id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Product
                </button>
                <button
                  onClick={onSaveClick}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Add to Cart
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;

// <section className="bg-indigo-50">
//   <section className="px-6 py-10">
//     <div className="max-w-lg flex bg-white rounded-lg overflow-hidden shadow-lg">
//       {/* <!-- Left: Image --> */}
//       <div className="w-[40%]">
//         <img
//           className="h-full w-full object-cover"
//           src="path_to_image.jpg"
//           alt="Event image"
//         />
//       </div>

//       {/* <!-- Right: Content --> */}
//       <div className="w-[60%] p-4">
//         <div className="font-bold text-lg mb-1">St Johns College</div>
//         <p className="text-gray-700 text-sm">IT park, WC</p>
//         <span className="text-xs text-green-500 bg-green-100 px-2 py-1 rounded-full inline-block mb-2">
//           New
//         </span>
//         <div className="flex justify-between mb-2">
//           <div>
//             <p className="text-gray-500 text-sm">Vacancies</p>
//             <p className="font-bold text-sm">82/150</p>
//           </div>
//           <div>
//             <p className="text-gray-500 text-sm">Saplings</p>
//             <p className="font-bold text-sm">500</p>
//           </div>
//         </div>
//         <div>
//           <p className="text-gray-500 text-sm">Event date</p>
//           <p className="font-bold text-sm">23/12/2022</p>
//         </div>
//       </div>
//     </div>
//   </section>
//   <div className="container mx-auto py-10 px-6">
//     {/* product list */}
//     <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
//       {/* Product Image */}
//       <div className="md:w-1/2">
//         <img src="" alt="alt" className="w-full h-64 object-cover" />
//       </div>

//       {/* Product Details */}
//       <div className="md:w-1/2 p-6 flex flex-col justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">
//             {name ? name : "Name"}
//           </h1>
//           <p className="text-gray-600 mb-4">
//             {/* {description} */}
//             Proactively synergize performance based methods of empowerment
//             rather than extensible solutions. Authoritatively administrate
//             standards compliant users vis-a-vis next-generation
//             outsourcing. Rapidiously.
//           </p>
//           <p className="text-lg font-semibold text-gray-800 mb-4">
//             {/* Price: ${price ? price?.toFixed(2) : "45"} */}
//             Price: $450
//           </p>
//           <p className="text-md text-gray-600 mb-4">
//             {/* Category: {category ? category : "category"} */}
//             Category
//           </p>
//           <div className="flex items-center mb-4">
//             <span className="text-md font-semibold text-gray-800 mr-2">
//               Ratings:
//             </span>
//             <span className="text-yellow-500 flex gap-1">
//               {Array.from({ length: 5 }, (_, index) => (
//                 <svg
//                   key={index}
//                   xmlns="http://www.w3.org/2000/svg"
//                   className={`w-5 h-5 ${
//                     index < 3 ? "fill-current" : "text-gray-300"
//                   }`}
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
//                 </svg>
//               ))}
//             </span>
//           </div>
//           <p className="text-gray-600 mb-4">
//             {/* Created on: {new Date(creationDate).toLocaleDateString()} at{" "}
//           {new Date(creationDate).toLocaleTimeString()} */}
//             Created on: 03/23/24 at 14/03/24
//           </p>
//         </div>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   </div>
// </section>
