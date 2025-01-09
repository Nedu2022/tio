import tLogo from "../../assets/TIO-logo.png";

const RegistrationPage = () => {
  return (
      <div className="min-h-screen flex w-full overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 bg-primaryCoffee p-8 flex flex-col items-center justify-center">
          <div className="mb-8">
            <img
              src={tLogo}
              alt="Decorative Bird"
              className="h-62 object-cover"
            />
          </div>
          <h2 className="text-primaryCoffee text-xl font-bold mb-2">
            Maecenas mattis egestas
          </h2>
          <p className="text-primaryCoffee text-center">
            Erdum et malesuada fames ac ante ipsum primis in faucibus
            suspendisse porta.
          </p>
        </div>

        {/* Right Section */}
        

      <div className="w-1/2 p-16 bg-primaryBeige flex flex-col items-center justify-center">
        {/* Logo */}
        <h1 className="text-center text-3xl font-semibold font-sac mb-32">Talk It Out</h1>

        {/* Welcome Text */}
        <h2 className="text-center text-gray-600 text-lg mb-16">Welcome to Talk It Out</h2>

        {/* Username/Email Input */}
        <div className="w-full max-w-md">

        
        <div>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="David Brooks"
            className="w-full px-0 pb-2 text-gray-900 text-sm border-b border-gray-300 outline-0 bg-transparent focus:border-primaryCoffee"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="davidbrooks@gmail.com"
            className="w-full px-0 pb-2 text-gray-900 text-sm border-b border-gray-300 outline-0 bg-transparent focus:border-primaryCoffee"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            className="w-full px-0 pb-2 text-gray-900 text-sm border-b border-gray-300 outline-0 bg-transparent focus:border-primaryCoffee"
          />
          <a
            href="#"
            className="block text-right text-sm text-primaryCoffee mt-2 hover:underline"
          >
            Forgot password?
          </a>
        </div>
        </div>


        {/* Sign-In Button */}
        <button className="w-full bg-primaryCoffee text-white py-2 px-4 rounded-md hover:bg-gray-800">
          Sign in
        </button>
        </div>


        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Do you have an account?{" "}
          <a href="#" className="text-primaryCoffee">
            Login
          </a>
        </p>
      </div>
    </div>
   
  );
};

export default RegistrationPage;
