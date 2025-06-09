import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggleMenu = () => setisOpen(!isOpen);

  return (
    <header className="absolute top-0 left-0 w-full z-20 px-4 sm:px-8 md:px-16 py-4 flex justify-between xl:justify-around items-center border-b-[0.5px] border-softBlush text-white">
      <h1 className="text-lg md:text-xl font-bold font-nun tracking-wide">
        <span className="text-softBlush">T</span>IO
      </h1>

      <nav className="hidden lg:flex items-center space-x-4 md:space-x-8 text-sm md:text-base font-medium">
        <Link
          to="/"
          className="hover:underline hover:text-pink-400 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:underline hover:text-pink-400 transition-colors duration-200"
        >
          About
        </Link>
        <Link
          to="/services"
          className="hover:underline hover:text-pink-400 transition-colors duration-200"
        >
          Book a Session
        </Link>
        <Link
          to="/services"
          className="hover:underline hover:text-pink-400 transition-colors duration-200"
        >
          Resources
        </Link>
        <Link
          to="/contact"
          className="hover:underline hover:text-pink-400 transition-colors duration-200"
        >
          FAQ
        </Link>

      </nav>

        <button className="flip-hover lg:flex hidden">
          <span className="flip-text"> Book an Appointment</span>
        </button>
      <button onClick={toggleMenu} className="md:hidden text-2xl z-50">
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      <nav
        className={`lg:hidden overflow-hidden space-y-10 pl-4 pt-10 flex flex-col h-screen fixed top-0 left-0 w-3/4 max-w-xs bg-black text-white transform transition-transform duration-700 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-lg md:text-xl font-bold font-nun tracking-wide ">
          <span className="text-softBlush">T</span>IO
        </h1>
        <Link
          to="/"
          className="hover:underline hover:text-pink-400 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:underline hover:text-pink-400 transition-colors duration-200"
        >
          About
        </Link>
        <Link
          to="/services"
          className="hover:underline hover:text-pink-400 transition-colors duration-200"
        >
          Book a Session
        </Link>
        <Link
          to="/services"
          className="hover:underline hover:text-pink-400 transition-colors duration-200"
        >
          Resources
        </Link>
        <Link
          to="/contact"
          className="hover:underline hover:text-pink-400 transition-colors duration-200"
        >
          FAQ
        </Link>

        <button className="flip-hover w-fit lg:hidden">
          <span className="flip-text"> Book an Appointment</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
