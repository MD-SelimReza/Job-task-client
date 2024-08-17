import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../url/baseURL";
import { useState } from "react";
import { imageUpload } from "../utils/imageUpload";

const AddProductPage = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { product_name, price, description, category, ratings, brand } = data;
    const file = data.product_image[0];
    const product_image = await imageUpload(file);
    const newProduct = {
      product_name,
      product_image,
      price,
      description,
      category,
      ratings,
      brand,
    };

    try {
      const response = await axios.post(`${baseURL}/products`, newProduct);
      toast.success(response?.data?.message);
      navigate("/products");
    } catch (error) {
      console.log("There was an error adding the product:", error);
      toast.error("Failed to add product. Please try again.");
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
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
                  onChange={handleImageChange}
                />
                {errors.product_image && (
                  <p className="text-red-500 text-sm mt-1">
                    Product image is required
                  </p>
                )}
              </div>

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
                  id="price"
                  {...register("price", { required: true, min: 150 })}
                  className="border rounded w-full py-2 px-3"
                  placeholder="Enter product price"
                />
                {errors.price && (
                  <p className="text-red-500 text-sm mt-1">
                    Price is required and must be at least 150
                  </p>
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
                  <option value="Personal Care">Personal Care</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Outdoor">Outdoor</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Home">Home</option>
                  <option value="Fitness">Fitness</option>
                </select>
                {errors.category && (
                  <p className="text-red-500 text-sm mt-1">
                    Category is required
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="brand"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Brand
                </label>
                <select
                  id="brand"
                  {...register("brand", { required: true })}
                  className="border rounded w-full py-2 px-3"
                >
                  <option value="">Select a brand</option>
                  <option value="GreenLiving">GreenLiving</option>
                  <option value="EcoWear">EcoWear</option>
                  <option value="SoundMax">SoundMax</option>
                  <option value="BrightHome">BrightHome</option>
                </select>
                {errors.brand && (
                  <p className="text-red-500 text-sm mt-1">Brand is required</p>
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

export default AddProductPage;
