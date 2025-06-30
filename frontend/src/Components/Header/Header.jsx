import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Header = ({ className = "" }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const toggleMenu = () => setisOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 1);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed bg-red-700 top-0 left-0 w-full z-20 px-4 lg:mx-0 sm:px-8 md:px-16 py-4 flex justify-between xl:justify-around items-center border-b-[0.5px] border-softBlush transition-colors duration-500
      text-primaryCoffee
      ${
        isHome
          ? isScroll
            ? "bg-white text-primaryCoffee"
            : "bg-transparent text-primaryCoffee"
          : "bg-white text-primaryCoffee"
      }
      ${className}`}
    >
      <h1 className="text-lg md:text-xl font-bold font-nun tracking-wide transition-colors duration-500">
        <span className="">T</span>IO
      </h1>

      <nav className="hidden lg:flex items-center space-x-4 md:space-x-8 font-medium">
        <Link to="/" className="hover:underline transition-colors duration-500">
          Home
        </Link>
        <Link
          to="/about"
          className="hover:underline transition-colors duration-500"
        >
          About
        </Link>
        <Link
          to="/services"
          className="hover:underline  transition-colors duration-500"
        >
          Book a Session
        </Link>
        <Link
          to="/services"
          className="hover:underline transition-colors duration-500"
        >
          Services
        </Link>
      </nav>

      <button className="flip-hover lg:flex hidden">
        <span className="flip-text"> Book A Session</span>
      </button>
      <button onClick={toggleMenu} className="md:hidden text-2xl z-50">
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      <nav
        className={`lg:hidden overflow-hidden space-y-10 pl-4 pt-10 flex flex-col h-screen fixed top-0 left-0 w-3/4 max-w-xs bg-black ${className} transform transition-transform duration-700 ease-in-out z-40 ${
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
