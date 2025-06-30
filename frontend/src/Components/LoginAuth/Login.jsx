import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="hidden lg:flex absolute left-0 top-0 h-full w-[800px] bg-pink-500 rounded-r-[500px] z-0"></div>

      <div className="relative z-10 flex flex-row items-stretch justify-center w-full max-w-5xl p-10 h-full lg:h-[700px] bg-white rounded-lg shadow-lg">
        {/* Left Side */}
        <div className="hidden lg:flex border-r-2 border-neutral-300 w-1/2 p-6 flex-col justify-center">
          <h1 className="text-xl font-bold mb-4">WELCOME BACK!!!🥰</h1>
          <p className="text-gray-600 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 lg:p-6 flex flex-col justify-center items-center lg:space-x-14 space-y-4">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">TIO</h1>
            <p className="mb-6 text-gray-600">Tell us how you feel</p>
          </div>

          <form className="space-y-5">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border rounded-3xl focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-3xl focus:outline-none"
            />
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="appearance-none h-5 w-5 border border-gray-400 rounded-full checked:bg-pink-600 checked:border-transparent transition duration-200"
              />
              <label htmlFor="terms" className="ml-2 text-sm">
                Remember me
              </label>
            </div>
            <button className="w-full bg-pink-500 text-white py-3 rounded-3xl hover:bg-pink-700">
              Login
            </button>
          </form>
          <p className="mt-4 text-sm">
            New to TIO?{" "}
            <Link
              to="/registration"
              className="text-pink-500 cursor-pointer text-sm"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
