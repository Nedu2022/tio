import { useState } from 'react';
import axios from 'axios';
import tLogo from "../../assets/TIO-logo.png";
import RegistrationModal from './RegistrationModal';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null); // State for error handling

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    try {
      const response = await axios.post(
        `http://localhost:5300/api/users/register`,
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log(response.data);
      setFormData({ name: '', email: '', password: '' }); // Clear form inputs
      setIsModalOpen(true); // Show modal
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
      setError(error.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex w-full overflow-hidden">
      {/* Left Section */}
      <div className="w-1/2 bg-primaryCoffee p-8 flex flex-col items-center justify-center">
        <div className="mb-8">
          <img src={tLogo} alt="Decorative Bird" className="h-62 object-cover" />
        </div>
        <h2 className="text-primaryCoffee text-xl font-bold mb-2">Maecenas mattis egestas</h2>
        <p className="text-primaryCoffee text-center">
          Erdum et malesuada fames ac ante ipsum primis in faucibus suspendisse porta.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-1/2 p-16 bg-primaryBeige flex flex-col items-center justify-center">
        {/* Logo */}
        <h1 className="text-center text-3xl font-semibold font-sac mb-32">Talk It Out</h1>

        {/* Welcome Text */}
        <h2 className="text-center text-gray-600 text-lg mb-16">Welcome to Talk It Out</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Error Message */}

        <form onSubmit={handleSubmit} className="w-full max-w-md">
          {/* Full Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="David Brooks"
              className="w-full px-0 pb-2 text-gray-900 text-sm border-b border-gray-300 outline-0 bg-transparent focus:border-primaryCoffee"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="davidbrooks@gmail.com"
              className="w-full px-0 pb-2 text-gray-900 text-sm border-b border-gray-300 outline-0 bg-transparent focus:border-primaryCoffee"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full px-0 pb-2 text-gray-900 text-sm border-b border-gray-300 outline-0 bg-transparent focus:border-primaryCoffee"
              required
            />
            <a href="#" className="block text-right text-sm text-primaryCoffee mt-2 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Sign-Up Button */}
          <button type="submit" className="w-full bg-primaryCoffee text-white py-2 px-4 rounded-md hover:bg-gray-800">
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Do you have an account? <a href="#" className="text-primaryCoffee">Login</a>
        </p>
      </div>

      <RegistrationModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default RegistrationPage;
