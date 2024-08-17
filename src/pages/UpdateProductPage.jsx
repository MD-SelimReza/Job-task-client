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

  const { data } = useQuery(["productData", id], () => {
    return axios.get(`${baseURL}/products/${id}`);
  });

  const product = data?.data || {};
  const {
    product_name,
    product_image,
    description,
    price,
    category,
    ratings,
    brand,
  } = product;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    const updatedProduct = {
      product_name: formData.product_name || product_name,
      price: formData.price || price,
      description: formData.description || description,
      category: formData.category || category,
      ratings: formData.ratings || ratings,
      brand: formData.brand || brand,
      product_image: product_image,
    };

    if (formData.product_image && formData.product_image.length > 0) {
      const file = formData.product_image[0];
      updatedProduct.product_image = await imageUpload(file);
    }

    try {
      const response = await axios.put(
        `${baseURL}/products/${id}`,
        updatedProduct
      );
      toast.success(response?.data?.message);
      navigate("/products");
    } catch (error) {
      console.error("There was an error updating the product:", error);
      toast.error("Failed to update product. Please try again.");
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
                  placeholder="Enter product name"
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
                  onChange={handleImageChange}
                />
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
                  {...register("description")}
                  defaultValue={description}
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Enter product description"
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
                  id="price"
                  {...register("price")}
                  defaultValue={price}
                  className="border rounded w-full py-2 px-3"
                  placeholder="Enter product price"
                />
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
                  <option value="Personal Care">Personal Care</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Outdoor">Outdoor</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Home">Home</option>
                  <option value="Fitness">Fitness</option>
                </select>
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
                  {...register("brand")}
                  className="border rounded w-full py-2 px-3"
                >
                  <option value={brand}>{brand}</option>
                  <option value="GreenLiving">GreenLiving</option>
                  <option value="EcoWear">EcoWear</option>
                  <option value="SoundMax">SoundMax</option>
                  <option value="BrightHome">BrightHome</option>
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
                  id="ratings"
                  {...register("ratings", { min: 1, max: 5 })}
                  defaultValue={ratings}
                  className="border rounded w-full py-2 px-3"
                  placeholder="Enter product ratings"
                />
              </div>

              <div>
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Update Product
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
