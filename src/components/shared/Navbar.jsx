import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a href="/">JobTASK</a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="/products" className="text-white hover:text-gray-300">
            Products
          </a>
          <a href="/about" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="/contact" className="text-white hover:text-gray-300">
            Contact
          </a>
          <a href="/login" className="text-white hover:text-gray-300">
            Login
          </a>
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
          <a
            href="/products"
            className="block py-2 px-4 text-sm text-white hover:bg-gray-700"
          >
            Products
          </a>
          <a
            href="/about"
            className="block py-2 px-4 text-sm text-white hover:bg-gray-700"
          >
            About
          </a>
          <a
            href="/contact"
            className="block py-2 px-4 text-sm text-white hover:bg-gray-700"
          >
            Contact
          </a>
          <a
            href="/login"
            className="block py-2 px-4 text-sm text-white hover:bg-gray-700"
          >
            Login
          </a>
        </div>
      )}
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
