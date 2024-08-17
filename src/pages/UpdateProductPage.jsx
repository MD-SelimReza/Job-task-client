import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../url/baseURL";
import { useState } from "react";
import { useQuery } from "react-query";
import { imageUpload } from "../utils/imageUpload";

const UpdateProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);

  const { data } = useQuery("productData", () => {
    return axios.get(`${baseURL}/products/${id}`);
  });

  const product = data?.data || {};
  const { product_name, product_image, description, price, category, ratings } =
    product;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    const product_name2 = formData.product_name || product_name; // Fallback to original value if not changed
    const price2 = formData.price || price;
    const description2 = formData.description || description;
    const category2 = formData.category || category;
    const ratings2 = formData.ratings || ratings;

    let product_image2 = product_image; // Start with original value
    if (formData.product_image && formData.product_image.length > 0) {
      const file = formData.product_image[0];
      product_image2 = await imageUpload(file); // Upload new image if provided
    }

    const updateProduct = {
      product_name: product_name2,
      product_image: product_image2,
      price: price2,
      description: description2,
      category: category2,
      ratings: ratings2,
    };

    console.log(updateProduct);

    try {
      // Make a POST request to the backend
      const response = await axios.put(
        `${baseURL}/products/${id}`,
        updateProduct
      );

      // Handle successful response
      toast.success(response?.data?.message);

      // Redirect to products page
      navigate("/products");
    } catch (error) {
      // Handle errors
      console.log("There was an error updating the product:", error);
      toast.error("Failed to update product. Please try again.");
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
                Update Product
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
                  {...register("product_name")}
                  defaultValue={product_name}
                  className="border rounded w-full py-2 px-3"
                />
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
                  {...register("product_image")}
                  className="border rounded w-full py-2 px-3"
                  onChange={handleImageChange} // Update image preview on change
                />
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
                  defaultValue={description}
                  {...register("description")}
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                ></textarea>
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
                  defaultValue={price}
                  {...register("price")}
                  className="border rounded w-full py-2 px-3"
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
                  {...register("category")}
                  className="border rounded w-full py-2 px-3"
                >
                  <option value={category}>{category}</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Sports & Outdoors">Sports & Outdoors</option>
                  <option value="Home & Kitchen">Home & Kitchen</option>
                  <option value="Home Appliances">Home Appliances</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Home Security">Home Security</option>
                </select>
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
                  defaultValue={ratings}
                  {...register("ratings", {
                    min: 1,
                    max: 5,
                  })}
                  className="border rounded w-full py-2 px-3"
                />
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
