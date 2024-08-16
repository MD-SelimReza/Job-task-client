import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { imageUpload } from "../../utils/imageUpload";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const { user, createUser, updateUserProfile, loading } = useAuth();

  // State to store the selected image URL
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const file = data.profilePicture[0];

    const { name, email, password } = data;
    const image_url = await imageUpload(file);

    try {
      const result = await createUser(email, password);
      await updateUserProfile(name, image_url);
      if (result?.user) {
        toast.success("Sign Up Successful!");
        navigate("/");
        reset();
        setImagePreview(null);
        window.location.reload();
      }
    } catch (err) {
      toast.error(err?.message);
    }
  };

  const password = watch("password");

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

  useEffect(() => {
    if (user && loading) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-2">
          Create account
        </h2>
        <p className="text-sm text-center mb-8">
          Have an account?{" "}
          <a href="/login" className="text-blue-600 underline">
            Login
          </a>
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className="mb-4 md:flex md:items-center">
            <label className="block md:indent-2 text-black-700 md:mb-0 md:w-[35%]">
              Name*
            </label>
            <div className="md:w-[65%]">
              <input
                type="name"
                name="name"
                id="name"
                className="w-full px-3 py-2 border-t-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-blue-100"
                {...register("name", {
                  required: { value: true, message: "Name is required" },
                })}
              />
              <p className="text-sm text-red-600">{errors.name?.message}</p>
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-4 md:flex md:items-center">
            <label className="block md:indent-2 text-black-700 md:mb-0 md:w-[35%]">
              Email*
            </label>
            <div className="md:w-[65%]">
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-3 py-2 border-t-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-blue-100"
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email format",
                  },
                })}
              />
              <p className="text-sm text-red-600">{errors.email?.message}</p>
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4 md:flex md:items-center">
            <label className="block md:indent-2 text-gray-700 md:mb-0 md:w-[35%]">
              Password*
            </label>
            <div className="md:w-[65%]">
              <input
                type="password"
                name="password"
                id="password"
                className="w-full px-3 py-2 border-t-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-blue-100"
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                })}
              />
              <p className="text-sm text-red-600">{errors.password?.message}</p>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="mb-8 md:flex md:items-center">
            <label className="block md:indent-2 text-gray-700 md:mb-0 md:w-[35%]">
              Confirm password*
            </label>
            <div className="md:w-[65%]">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="w-full px-3 py-2 border-t-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-blue-100"
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Confirm Password is required",
                  },
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              <p className="text-sm text-red-600">
                {errors.confirmPassword?.message}
              </p>
            </div>
          </div>

          {/* Image Upload Field with Preview */}
          <div className="mb-4 md:flex md:items-center">
            <label className="block md:indent-2 text-gray-700 md:mb-0 md:w-[35%]">
              Profile Picture*
            </label>
            <div className="md:w-[65%]">
              <input
                type="file"
                name="profilePicture"
                id="profilePicture"
                className="w-full px-3 py-2 border-t-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-blue-100"
                {...register("profilePicture", {
                  required: {
                    value: true,
                    message: "Profile picture is required",
                  },
                })}
                onChange={handleImageChange} // Update image preview on change
              />
              <p className="text-sm text-red-600">
                {errors.profilePicture?.message}
              </p>
            </div>
          </div>

          {/* Image Preview */}
          {imagePreview && (
            <div className="mb-4 text-center">
              <img
                src={imagePreview}
                alt="Profile Preview"
                className="w-24 h-24 rounded-full object-cover mx-auto"
              />
            </div>
          )}

          {/* Terms of Service Checkbox */}
          <div className="mb-3 text-center">
            <label className="flex items-center justify-center text-sm">
              <input
                type="checkbox"
                className="mr-2"
                {...register("checkbox", {
                  required: {
                    value: true,
                    message: "You must agree to the Terms of Service",
                  },
                })}
              />
              <p>
                I have read and agree to the{" "}
                <a href="#" className="text-blue-600">
                  Terms of Service
                </a>
              </p>
            </label>
            {errors.checkbox && (
              <p className="text-sm text-red-600 mt-1">
                {errors.checkbox.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center mb-3">
            <button
              type="submit"
              className="w-[300px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Create account
            </button>
          </div>
        </form>

        <p className="text-sm text-gray-700 text-center">
          Read{" "}
          <a href="#" className="text-blue-600">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
