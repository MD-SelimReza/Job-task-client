import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <p>Home</p>,
      },
      {
        path: "/products",
        element: <p>Product</p>,
      },
      {
        path: "/about",
        element: <p>About</p>,
      },
      {
        path: "/contact",
        element: <p>Contact us</p>,
      },
      {
        path: "/login",
        element: <p>Login</p>,
      },
    ],
  },
]);
