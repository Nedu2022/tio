import tLogo from "../../assets/TIO-logo.png";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-primaryCoffee flex flex-col items-center justify-center">
      {/* Header Section with Logo */}
      <div className="flex flex-row items-center space-x-4 mb-8">
        <img src={tLogo} alt="Logo" className="h-16" />
        <h1 className="text-3xl font-lato text-primaryBeige font-bold">T. I. O</h1>
      </div>

      {/* Login Form Section */}
      <div className="bg-primaryBeige w-full max-w-md p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Welcome back
        </h1>
        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address*
            </label>
            <input
              type="email"
              id="email"
              placeholder="e.g example@email.com"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-sm px-3 py-2"
            />
          </div>

          {/* Password Input */}
          <div>
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password*
              </label>
              <a
                href="#"
                className="text-sm text-primaryCoffee hover:underline"
              >
                Forgot password
              </a>
            </div>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-sm px-3 py-2"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                👁️
              </button>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-primaryCoffee hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Sign in
          </button>
        </form>

        {/* Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-primaryCoffee hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
