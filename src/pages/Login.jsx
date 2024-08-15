const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-2">
          Create account
        </h2>
        <p className="text-sm text-center mb-8">
          Have an account?{" "}
          <a href="#" className="text-blue-600 underline">
            Login
          </a>
        </p>
        <form>
          <div className="mb-4 md:flex md:items-center">
            <label className="block md:indent-2 text-black-700 md:mb-0 md:w-[35%]">
              Email*
            </label>
            <input
              type="email"
              className="w-full md:w-[65%] px-3 py-2 border-t-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-blue-100"
              required
            />
          </div>
          <div className="mb-4 md:flex md:items-center">
            <label className="block md:indent-2 text-gray-700 md:mb-0 md:w-[35%]">
              Password*
            </label>
            <input
              type="password"
              className="w-full md:w-[65%] px-3 py-2 border-t-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-blue-100"
              required
            />
          </div>
          <div className="mb-8 md:flex md:items-center">
            <label className="block md:indent-2 text-gray-700 md:mb-0 md:w-[35%]">
              Confirm password*
            </label>
            <input
              type="password"
              className="w-full md:w-[65%] px-3 py-2 border-t-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-blue-100"
              required
            />
          </div>
          <div className="mb-3">
            <label className="flex items-center justify-center text-sm">
              <input type="checkbox" className="mr-2" required />
              <p>
                I have read and agree to the{" "}
                <a href="#" className="text-blue-600">
                  Terms of Service
                </a>
              </p>
            </label>
          </div>
          <div className="text-center mb-3">
            <button
              type="submit"
              className="w-[300px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Create account
            </button>
          </div>
        </form>

        <div className="text-center mb-5">
          <p className="text-gray-700 mb-2">or</p>
          <button
            type="button"
            className="w-[300px] mx-auto bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 flex items-center justify-center"
          >
            Sign in with Google
          </button>
        </div>

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

export default Login;

// src/CreateAccountForm.js

// const Login = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
//         <h2 className="text-2xl font-semibold text-center mb-6">
//           Create account
//         </h2>
//         <form>
//           <div className="mb-4 md:flex md:items-center">
//             <label className="block text-gray-700 mb-1 md:mb-0 md:w-1/3">
//               Email*
//             </label>
//             <input
//               type="email"
//               className="w-full md:w-2/3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>
//           <div className="mb-4 md:flex md:items-center">
//             <label className="block text-gray-700 mb-1 md:mb-0 md:w-1/3">
//               Password*
//             </label>
//             <input
//               type="password"
//               className="w-full md:w-2/3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>
//           <div className="mb-4 md:flex md:items-center">
//             <label className="block text-gray-700 mb-1 md:mb-0 md:w-1/3">
//               Confirm password*
//             </label>
//             <input
//               type="password"
//               className="w-full md:w-2/3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>
//           <div className="mb-4 md:flex md:items-center">
//             <label className="block text-gray-700 mb-1 md:mb-0 md:w-1/3">
//               Phone*
//             </label>
//             <input
//               type="tel"
//               className="w-full md:w-2/3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>
//           <div className="mb-4 md:flex md:items-center">
//             <label className="block text-gray-700 mb-1 md:mb-0 md:w-1/3">
//               Date of birth*
//             </label>
//             <input
//               type="date"
//               className="w-full md:w-2/3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>
//           <div className="mb-4 md:flex md:items-center">
//             <label className="block text-gray-700 mb-2 md:mb-0 md:w-1/3">
//               Daily steps goal*
//             </label>
//             <div className="w-full md:w-2/3 flex justify-between">
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="steps-goal"
//                   value="14000"
//                   className="mr-2"
//                 />
//                 14000
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="steps-goal"
//                   value="12000"
//                   className="mr-2"
//                 />
//                 12000
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="steps-goal"
//                   value="10000"
//                   className="mr-2"
//                 />
//                 10000
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="steps-goal"
//                   value="8000"
//                   className="mr-2"
//                 />
//                 8000
//               </label>
//             </div>
//           </div>
//           <div className="mb-4 md:flex md:items-center">
//             <label className="block text-gray-700 mb-2 md:mb-0 md:w-1/3">
//               Send goal reminder
//             </label>
//             <div className="w-full md:w-2/3 flex justify-between">
//               <label className="flex items-center">
//                 <input type="checkbox" className="mr-2" />
//                 Via email
//               </label>
//               <label className="flex items-center">
//                 <input type="checkbox" className="mr-2" />
//                 Via SMS
//               </label>
//             </div>
//           </div>
//           <div className="mb-4 md:flex md:items-center">
//             <div className="md:w-1/3"></div>
//             <label className="flex items-center md:w-2/3">
//               <input type="checkbox" className="mr-2" required />I have read and
//               agree to the{" "}
//               <a href="#" className="text-blue-600 underline">
//                 Terms of Service
//               </a>
//             </label>
//           </div>
//           <div className="md:flex md:items-center">
//             <div className="md:w-1/3"></div>
//             <button
//               type="submit"
//               className="w-full md:w-2/3 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
//             >
//               Create account
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
