import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-20 px-4 sm:px-8 md:px-16 py-4 flex justify-between items-center bg-white/10 backdrop-blur-xs text-white">
      <h1 className="text-lg md:text-xl font-bold font-nun tracking-wide">
        TIO
      </h1>

      <nav className="space-x-4 md:space-x-8 text-sm md:text-base font-medium">
        <Link to="/" className="hover:underline hover:text-pink-400 transition-colors duration-200">Home</Link>
        <Link to="/about" className="hover:underline hover:text-pink-400 transition-colors duration-200">About</Link>
        <Link to="/services" className="hover:underline hover:text-pink-400 transition-colors duration-200">Book a Session</Link>
          <Link to="/services" className="hover:underline hover:text-pink-400 transition-colors duration-200">Resources</Link>
        <Link to="/contact" className="hover:underline hover:text-pink-400 transition-colors duration-200">FAQ</Link>
      </nav>
    </header>
  );
};

export default Header;
