import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../url/baseURL";
import { useState } from "react";

const UpdateProductPage = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Add the current date and time to the product creation date
    const newProduct = {
      ...data,
      product_creation_date: new Date().toISOString(),
    };

    try {
      // Make a POST request to the backend
      const response = await axios.post(`${baseURL}/products`, newProduct);

      // Handle successful response
      toast.success(response?.data?.message);

      // Redirect to products page
      navigate("/products");
    } catch (error) {
      // Handle errors
      console.log("There was an error adding the product:", error);
      toast.error("Failed to add product. Please try again.");
    }
  };

  // Update image preview when file is selected
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file)); // Create image preview URL
    } else {
      setImagePreview(null);
    }
  };

  return (
    <>
      <section className="bg-indigo-50">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-3xl text-center font-semibold mb-6">
                Add Product
              </h2>

              <div className="mb-4">
                <label
                  htmlFor="product_name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="product_name"
                  {...register("product_name", { required: true })}
                  className="border rounded w-full py-2 px-3"
                  placeholder="Enter product name"
                />
                {errors.product_name && (
                  <p className="text-red-500 text-sm mt-1">
                    Product name is required
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="product_image"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Product Image
                </label>
                <input
                  type="file"
                  id="product_image"
                  {...register("product_image", { required: true })}
                  className="border rounded w-full py-2 px-3"
                  onChange={handleImageChange} // Update image preview on change
                />
                {errors.product_image && (
                  <p className="text-red-500 text-sm mt-1">
                    Product image is required
                  </p>
                )}
              </div>

              {/* Image Preview */}
              {imagePreview && (
                <div className="mb-4 text-center">
                  <img
                    src={imagePreview}
                    alt="Product Preview"
                    className="w-80 h-48 rounded-md object-cover mx-auto"
                  />
                </div>
              )}

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  {...register("description", { required: true })}
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Enter product description"
                ></textarea>
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    Description is required
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Price ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  id="price"
                  {...register("price", { required: true })}
                  className="border rounded w-full py-2 px-3"
                  placeholder="Enter product price"
                />
                {errors.price && (
                  <p className="text-red-500 text-sm mt-1">Price is required</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Category
                </label>
                <select
                  id="category"
                  {...register("category", { required: true })}
                  className="border rounded w-full py-2 px-3"
                >
                  <option value="">Select a category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Sports & Outdoors">Sports & Outdoors</option>
                  <option value="Home & Kitchen">Home & Kitchen</option>
                  <option value="Home Appliances">Home Appliances</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Home Security">Home Security</option>
                </select>
                {errors.category && (
                  <p className="text-red-500 text-sm mt-1">
                    Category is required
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="ratings"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Ratings (1 to 5)
                </label>
                <input
                  type="number"
                  step="0.5"
                  id="ratings"
                  {...register("ratings", {
                    required: true,
                    min: 1,
                    max: 5,
                  })}
                  className="border rounded w-full py-2 px-3"
                  placeholder="Enter product ratings"
                />
                {errors.ratings && (
                  <p className="text-red-500 text-sm mt-1">
                    Ratings should be between 1 and 5
                  </p>
                )}
              </div>

              <div>
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateProductPage;
