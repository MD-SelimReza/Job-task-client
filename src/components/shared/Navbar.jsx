import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const logo = "";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  const { user, logOut, loading } = useAuth();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);

  const handleToggleClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
            <img
              className="h-10 w-auto"
              src={logo ? logo : ""}
              alt="React Jobs"
            />
            <span className="hidden md:block text-white text-2xl font-bold ml-2">
              JobTASK
            </span>
          </NavLink>
          <div className="hidden md:flex space-x-4">
            <NavLink to="/products" className={linkClass}>
              Products
            </NavLink>

            <NavLink to="/add-product" className={linkClass}>
              Add Product
            </NavLink>

            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>

            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>

            {!user && !loading ? (
              <Link to="/login">
                <button className="border border-white text-white px-4 py-2 rounded-lg transition transform duration-300 hover:scale-105">
                  Login
                </button>
              </Link>
            ) : (
              <div className="relative">
                <div
                  onClick={() => setIsDropDownOpen(!isDropdownOpen)}
                  className="rounded-full cursor-pointer hover:shadow-md transition"
                >
                  <div>
                    <img
                      className="rounded-full size-10"
                      referrerPolicy="no-referrer"
                      src={user && user?.photoURL ? user?.photoURL : "Image"}
                      title={user?.displayName}
                      alt="profile"
                      height="30"
                      width="30"
                    />
                  </div>
                </div>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-white rounded-md shadow-lg z-20">
                    <div className="block px-4 py-2 text-blue-800 hover:bg-gray-200">
                      {user?.displayName}
                    </div>

                    <div
                      onClick={logOut}
                      className="block px-4 py-2 text-blue-800 hover:bg-gray-200"
                    >
                      Logout
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={handleToggleClick}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <Link
              to="/products"
              className="block py-2 px-4 text-sm text-white hover:bg-gray-700"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="block py-2 px-4 text-sm text-white hover:bg-gray-700"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block py-2 px-4 text-sm text-white hover:bg-gray-700"
            >
              Contact
            </Link>
            <Link
              to="/register"
              className="block py-2 px-4 text-sm text-white hover:bg-gray-700"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

// import React, { useState } from "react";

// const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const handleToggleClick = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-2xl font-bold">
//           <a href="/">TaskFindr</a>
//         </div>
//         <div className="hidden md:flex space-x-4">
//           <a
//             href="/products"
//             className="text-white hover:text-gray-300 transition duration-300"
//           >
//             Products
//           </a>
//           <a
//             href="/about"
//             className="text-white hover:text-gray-300 transition duration-300"
//           >
//             About
//           </a>
//           <a
//             href="/contact"
//             className="text-white hover:text-gray-300 transition duration-300"
//           >
//             Contact
//           </a>
//           <a
//             href="/login"
//             className="text-white hover:text-gray-300 transition duration-300"
//           >
//             Login
//           </a>
//         </div>
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={handleToggleClick}
//             className="text-white focus:outline-none"
//           >
//             <svg
//               className={`w-6 h-6 transition-transform duration-300 transform ${
//                 isMobileMenuOpen ? "rotate-45" : ""
//               }`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={
//                   isMobileMenuOpen
//                     ? "M6 18L18 6M6 6l12 12"
//                     : "M4 6h16M4 12h16m-7 6h7"
//                 }
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//       <div
//         className={`md:hidden transition-all duration-500 transform ${
//           isMobileMenuOpen
//             ? "max-h-screen opacity-100 translate-y-0"
//             : "max-h-0 opacity-0 -translate-y-4"
//         } overflow-hidden`}
//       >
//         <a
//           href="/products"
//           className="block py-2 px-4 text-sm text-white hover:bg-gray-700 transition duration-300"
//         >
//           Products
//         </a>
//         <a
//           href="/about"
//           className="block py-2 px-4 text-sm text-white hover:bg-gray-700 transition duration-300"
//         >
//           About
//         </a>
//         <a
//           href="/contact"
//           className="block py-2 px-4 text-sm text-white hover:bg-gray-700 transition duration-300"
//         >
//           Contact
//         </a>
//         <a
//           href="/login"
//           className="block py-2 px-4 text-sm text-white hover:bg-gray-700 transition duration-300"
//         >
//           Login
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
